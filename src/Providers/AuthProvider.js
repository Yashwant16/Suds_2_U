import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import { callApi } from '.';
import {changeStack, navigate, WASHER} from '../Navigation/NavigationService';

const DEVICE_TOKEN = 'random_token';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  const signUp = async data => {
    let json = await callApi('washregistration', 'ABCDEFGHIJK', {...data, device_token: DEVICE_TOKEN});
    if (!json) return;
    setUserData({...json.data, password: data.password});
    return json.otp;
  };

  const login = async loginData => {
    let json = await callApi('login', 'ABCDEFGHIJK', {...loginData, device_token: DEVICE_TOKEN}, jsonResponse => {
      Alert.alert('Error', jsonResponse.message, [
        {
          text: 'Ok',
          onPress: () => {
            if (jsonResponse.message.toLowerCase().includes('terms')) navigate('TERMS & CONDITIONS', {loginData});
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
    let json = await callApi('termCondition', userData.api_token, {id: userData.id});
    if (!json) return;
    let loginSuccess = await login({...userData});
    if (loginSuccess) return 'success';
  };

  const completeProfile = async (data, isFromAuthStack) => {
    let json = await callApi('save_complete_profile', userData.api_token, {...data, user_id: userData.id});
    if (!json) return;
    await saveUserData(isFromAuthStack ? 'UPDATE DOCUMENT' : 'AUTH_DONE');
    return 'success';
  };

  const getUserDetails = async () => await callApi('userdetails', userData.api_token, {user_id: userData.id});

  const changePassword = async data => await callApi('change_password', userData.api_token, {...data, user_id: userData.id});

  const saveBankInfo = async data => await callApi('save_bank_details', userData.api_token, {...data, user_id: userData.id});

  const getBankInfo = async () => await callApi('get_bank_details', userData.api_token, {user_id: userData.id});

  const getCountries = async () => await callApi('get_country', userData.api_token, {}, null, 'GET');

  const getStates = async country_id => await callApi('get_state', userData.api_token, {country_id});

  const getCities = async state_id => await callApi('get_city', userData.api_token, {state_id});

  const getAuthStatus = async () => {
    let savedUserData = JSON.parse(await AsyncStorage.getItem('userData'));
    console.log(savedUserData);
    if (savedUserData) {
      setUserData(savedUserData);
      if (savedUserData.stage == 'AUTH_DONE') changeStack(savedUserData.role_as == WASHER ? 'DriverHomeStack' : 'CustomerHomeStack');
      else {
        changeStack('AuthStack');
        setTimeout(() => navigate(savedUserData.stage), 100);
      }
    } else changeStack('AuthStack'); 
  };

  const saveUserData = async (stage, data = userData) => await AsyncStorage.setItem('userData', JSON.stringify({...data, stage}));
  const logout = async () => {
    await AsyncStorage.removeItem('userData');
    changeStack('AuthStack');
    setUserData({});
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
