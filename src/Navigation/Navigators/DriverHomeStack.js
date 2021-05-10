import React, {useContext, useEffect, useMemo, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenOptions} from '../NavigationService';
import {Image, TouchableOpacity} from 'react-native';
import DriverDrawer from './DriverDrawer';
import {useNavigation, useRoute} from '@react-navigation/core';
import OnJob from '../../DriverScreen/OnJob';
import WorkInProgress from '../../DriverScreen/WorkInProgress';
import JobFinished from '../../DriverScreen/JobFinished';
import BookingDetails from '../../DriverScreen/BookingDetails';
import {nav} from '../../DriverScreen/Welcome';
import TripSwitch from '../../Components/TirpSwitch';
import UploadDriverLicense from '../../DriverScreen/UploadDriverLicense';
import CompleteProfile from '../../DriverScreen/CompleteProfile';
import PackgeScreen from '../../DriverScreen/PackageScreen';
import {AuthContext} from '../../Providers/AuthProvider';

const Stack = createStackNavigator();

const DriverHomeStack = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {getOnlineStatus} = useContext(AuthContext);

  const title = useMemo(() => getActionFromState(navigation.dangerouslyGetState()), [route]);
  const [onlineStatus, setOnlineStatus] = useState()

  useEffect(()=>getOnlineStatus().then(json=>setOnlineStatus(json?.status)), [])

  function getActionFromState(state) {
    let index = state?.routes[0]?.state?.routes[0]?.state?.index;
    return state?.routes[0]?.state?.routes[0]?.state?.routeNames[index];
  } 
  return (
    <Stack.Navigator initialRouteName="WELCOME" mode="modal" screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="WELCOME" 
        options={{headerLeft: () => <Icon navigation={nav.current} />, headerTitle: title, headerRight: () => <TripSwitch status={onlineStatus} headerTitle={title} />}}
        component={DriverDrawer}
      />
      <Stack.Screen name="ON JOB" component={OnJob} />
      <Stack.Screen name="WORK IN PROGRESS" component={WorkInProgress} />
      <Stack.Screen name="JOB FINISHED" component={JobFinished} />
      <Stack.Screen name="BOOKING DETAILS" component={BookingDetails} />
      <Stack.Screen name="UPLOAD DRIVING LICENSE" component={UploadDriverLicense} initialParams={{authStack: false}} />
      <Stack.Screen name="EDIT PROFILE" component={CompleteProfile} />
      <Stack.Screen name="PACKAGE DETAILS" component={PackgeScreen} />
    </Stack.Navigator>
  );
};

const Icon = ({navigation}) => (
  <TouchableOpacity style={{padding: 10}} onPress={() => navigation.toggleDrawer()}>
    <Image style={{height: 20, width: 20, tintColor: 'white'}} source={require('../../../Assets/menu.png')} />
  </TouchableOpacity>
);

export default DriverHomeStack;
