import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import UserTypeScreen from '../../CommonScreen/UserTypeScreen';
import {defaultScreenOptions} from '../NavigationService';
import ChooseScreen from '../../CommonScreen/ChooseScreen';
import LoginScreen from '../../CommonScreen/WasherLogin';
import SignUp from '../../CommonScreen/SignUp';
import OTPverification from '../../CommonScreen/OtpVerification';
import TermsConditions from '../../CommonScreen/TermsConditions';
import ForgotPassword from '../../CommonScreen/ForgotPassword';
import CompleteProfile from '../../DriverScreen/CompleteProfile';
import UpdateDocument from '../../DriverScreen/UpdateDocument';
import BackgroundCheck from '../../DriverScreen/BackgroundCheck';
import UploadDriverLicense from '../../DriverScreen/UploadDriverLicense';
import Colors from '../../../Constants/Colors';
import Splash from '../../CommonScreen/Splash';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="userTypeScreen" mode="modal" screenOptions={defaultScreenOptions}>
      <Stack.Screen name="userTypeScreen" component={UserTypeScreen} options={{headerTitle: 'GET STARTED NOW'}} />
      <Stack.Screen name="chooseScreen" component={ChooseScreen} options={{headerTitle: 'GET STARTED NOW'}} />
      <Stack.Screen name="LOGIN" component={LoginScreen} />
      <Stack.Screen name="REGISTER" component={SignUp} />
      <Stack.Screen name="ENTER OTP" component={OTPverification} />
      <Stack.Screen name="FORGOT PASSWORD" component={ForgotPassword} />
      <Stack.Screen name="COMPLETE PROFILE" component={CompleteProfile} initialParams={{authStack: true}}/>
      <Stack.Screen name="BACKGROUND CHECK" component={BackgroundCheck} />
      <Stack.Screen name="TERMS & CONDITIONS" component={TermsConditions} />
      <Stack.Screen name="UPDATE DOCUMENT" component={UpdateDocument} initialParams={{authStack: true}} />
      <Stack.Screen name="UPLOAD DRIVING LICENSE" component={UploadDriverLicense} initialParams={{authStack: true}} />
    </Stack.Navigator>
  );
};

export default AuthStack;
