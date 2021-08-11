import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { callApi } from '.';
import { changeStack, CUSTOMER, navigate, type, WASHER } from '../Navigation/NavigationService';
import messaging from '@react-native-firebase/messaging';
import { getCurrentPosition } from '../Services/LocationServices';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loginData, setLoginData] = useState({})

  const getToken = async () => {
    // return 'random token'
    return await messaging().getToken()
  }

  useEffect(() => messaging().getToken().then((token) => console.log(token)), [])

  const updateUserLocation = async () => {
    try {
      const { latitude, longitude } = (await getCurrentPosition()).coords
      let json = await callApi('liveTracking', userData.api_token, { lat: latitude, long: longitude, user_id: userData.id });
      saveUserData('AUTH_DONE', { ...userData, latitude, longitude })
      setUserData(cv => ({ ...cv, latitude, longitude }))
    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async signUpData => {
    console.log("Washer sign up")
    setLoginData(signUpData)
    let json = await callApi('washregistration', 'ABCDEFGHIJK', { ...signUpData, device_token: await getToken() });
    if (!json) return;
    setUserData({ ...json.data, password: signUpData.password });
    return { otp: json.otp, id: json.data.id };
  };

  const customerSignUp = async signUpData => {
    console.log("Customer sign up")
    setLoginData(signUpData)
    let json = await callApi('signup', 'ABCDEFGHIJK', { ...signUpData, device_token: await getToken() });
    if (!json) return;
    setUserData({ ...json.data, password: signUpData.password });
    return { otp: json.otp, id: json.data.id };
  };

  const login = async loginData => {
    setLoginData(loginData)
    setUserData(loginData)
    // changeStack('CustomerHomeStack')
    let json = await callApi(type.current == CUSTOMER ? 'customerlogin' : 'login', 'ABCDEFGHIJK', { ...loginData, device_token: await getToken() }, jsonResponse => {
      console.log({ bro: jsonResponse.id, full: jsonResponse })
      if (jsonResponse.data?.api_token) setUserData(jsonResponse.data)
      if (jsonResponse.api_token) setUserData(jsonResponse); // this makes sure to save the id and api-token in the userData state even if the response was false
      Alert.alert('Alert', jsonResponse.message, [
        {
          text: 'Ok',
          onPress: () => {
            if (jsonResponse.upload_status == '0') navigate('UPDATE DOCUMENT', { authStack: true })
            else if (jsonResponse.otp && jsonResponse.id) navigate('ENTER OTP', { otp: jsonResponse.otp });
            else if (jsonResponse.message.toLowerCase().includes('terms')) navigate('TERMS & CONDITIONS', { loginData });
          },
        },
      ]);
    });
    if (!json) return;
    setUserData(json.data);
    await saveUserData('AUTH_DONE', json.data);
    changeStack(json.data.role_as == WASHER ? 'DriverHomeStack' : 'CustomerHomeStack');
    return 'success';
  };

  const termsAndConditions = async () => {
    let json = await callApi('termCondition', userData.api_token, { id: userData.id });
    if (!json) return;
    let loginSuccess = await login(loginData);
    if (loginSuccess) return 'success';
  };

  const completeProfile = async (data, isFromAuthStack) => {
    let json = await callApi(type.current == WASHER ? 'save_complete_profile' : 'updateUserPofile', userData.api_token, { ...data, user_id: userData.id });
    if (!json) return;
    let userDetailJson = await getUserDetails()
    if (!userDetailJson) return
    console.log(JSON.stringify(userDetailJson, null, 2))
    await saveUserData(isFromAuthStack ? 'UPDATE DOCUMENT' : 'AUTH_DONE', userDetailJson.data);
    setUserData(cv => ({ ...cv, ...userDetailJson.data }))
    return 'success';
  };

  const updateDrivingLicense = async (data, isFromAuthStack) => {
    let json = await callApi('update_drivinglicense', userData.api_token, { ...data, user_id: userData.id, term_condition: 0 });
    if (!json) return;
    await saveUserData(isFromAuthStack ? 'BACKGROUND CHECK' : 'AUTH_DONE');
    return 'success';
  };

  const setOnlineStatus = async status => await callApi('updatestatus', userData.api_token, { user_id: userData.id, status });

  const getOnlineStatus = async () => await callApi('useronlinestatus', userData.api_token, { user_id: userData.id });

  const saveAgreement = async () => await callApi('saveagree', userData.api_token, { user_id: userData.id });

  const getBackgroundCheckContent = async () => await callApi('backgroundcheck', userData.api_token, {}, null, 'GET');

  const getDrivingLicenseDetails = async () => await callApi('drivinglicensedetails', userData.api_token, { user_id: userData.id });

  const resendOtp = async () => await callApi('resentOtp', 'ABCDEFGHIJK', { email: loginData.email });

  const getUserDetails = async () => await callApi('userdetails', userData.api_token, { user_id: userData.id });

  const changePassword = async data => await callApi('change_password', userData.api_token, { ...data, user_id: userData.id });

  const saveBankInfo = async data => await callApi('save_bank_details', userData.api_token, { ...data, user_id: userData.id });

  const getBankInfo = async () => await callApi('get_bank_details', userData.api_token, { user_id: userData.id });

  const getCountries = async () => await callApi('get_country', userData.api_token, {}, null, 'GET');

  const getStates = async country_id => await callApi('get_state', userData.api_token, { country_id });

  const getCities = async state_id => await callApi('get_city', userData.api_token, { state_id });

  const forgotPassword = async emailid => await callApi('forget_password', 'ABCDEFGHIJK', { emailid });

  const addCard = async data => await callApi('addCard', userData.api_token, { ...data, user_id: userData.id });

  const updateCard = async data => await callApi('updateCard', userData.api_token, { ...data, user_id: userData.id });

  const getCardDetails = async () => await callApi('getCardDetails', userData.api_token, { user_id: userData.id });

  const changeImage = async (image) => {
    let json = await callApi('userImage', userData.api_token, { user_id: userData.id, image })
    if (json) {
      setUserData(cv => ({ ...cv, image: image.uri }))
      let userDetailJson = await getUserDetails()
      if (!userDetailJson) return
      await saveUserData('AUTH_DONE', userDetailJson.data);
      setUserData(cv => ({ ...cv, ...userDetailJson.data }))
      return "success"
    }
  }

  const otpVerified = async () => {
    let json = await callApi('otpVerify', userData.api_token, { id: userData.id })
    if (json) setUserData(json.data)
    return json
  };

  const documentVerified = async () => {
    let json = await callApi('documentVerify', userData.api_token, { id: userData.id })
    if (json) setUserData(json.data)
    return json
  };

  const getAuthStatus = async (syncCurrentRunningBooking) => {
    let savedUserData = JSON.parse(await AsyncStorage.getItem('userData'));
    console.log("Saved user data : ", savedUserData);
    await syncCurrentRunningBooking(savedUserData)
    if (savedUserData) {
      setUserData(savedUserData);
      if (savedUserData.stage == 'AUTH_DONE') changeStack(savedUserData.role_as == WASHER ? 'DriverHomeStack' : 'CustomerHomeStack');
      else {
        changeStack('AuthStack');
        // setTimeout(() => navigate(savedUserData.stage), 100);
      }
    } else changeStack('AuthStack');
  };

  const saveUserData = async (stage, data = userData) => {
    let savedUserData = JSON.parse(await AsyncStorage.getItem('userData'));
    await AsyncStorage.setItem('userData', JSON.stringify({ ...savedUserData, ...data, stage }))
  }
  const logout = async () => {
    await AsyncStorage.removeItem('userData');
    changeStack('AuthStack');
    setUserData({});
    messaging().deleteToken().then(() => console.log('Token deleted'))
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        getAuthStatus,
        login,
        userData,
        termsAndConditions,
        saveUserData,
        completeProfile,
        saveBankInfo,
        getBankInfo,
        changePassword,
        logout,
        getCountries,
        getStates,
        getCities,
        getUserDetails,
        resendOtp,
        updateDrivingLicense,
        getDrivingLicenseDetails,
        getBackgroundCheckContent,
        saveAgreement,
        getOnlineStatus,
        setOnlineStatus,
        forgotPassword,
        otpVerified,
        documentVerified,
        customerSignUp,
        addCard,
        getCardDetails,
        updateCard,
        updateUserLocation,
        changeImage
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

