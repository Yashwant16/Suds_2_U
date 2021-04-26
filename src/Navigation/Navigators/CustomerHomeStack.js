import React, {useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenOptions} from '../NavigationService';
import {Image, TouchableOpacity} from 'react-native';
import DriverDrawer from './DriverDrawer';
import {useNavigation, useRoute} from '@react-navigation/core';
import OnJob from '../../DriverScreen/OnJob';
import WorkInProgress from '../../DriverScreen/WorkInProgress';
import JobFinished from '../../DriverScreen/JobFinished';
import BookingDetails from '../../DriverScreen/BookingDetails';
import { nav } from '../../CustomerScreen/HomeScreen';
import TripSwitch from '../../Components/TirpSwitch';
import UploadDriverLicense from '../../DriverScreen/UploadDriverLicense';
import CustomerDrawer from './CustomerDrawer';

const Stack = createStackNavigator();

const CustomerHomeStack = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const title = useMemo(() => getActionFromState(navigation.dangerouslyGetState()), [route]);

  function getActionFromState(state) {
    let index = state?.routes[0]?.state?.routes[0]?.state?.index;
    return state?.routes[0]?.state?.routes[0]?.state?.routeNames[index];
  }
  return (
    <Stack.Navigator initialRouteName="DASHBOARD" mode="modal" screenOptions={defaultScreenOptions}>
      <Stack.Screen name="DASHBOARD" options={{headerLeft: () => <Icon navigation={nav.current} />, headerTitle: title, headerRight:() => <TripSwitch headerTitle={title} />}} component={CustomerDrawer} />
      {/* <Stack.Screen name="ON JOB" component={OnJob} /> */}
    </Stack.Navigator>
  );
};

const Icon = ({navigation}) => (
  <TouchableOpacity style={{padding: 10}} onPress={() => navigation.toggleDrawer()}>
    <Image style={{height: 20, width: 20, tintColor: 'white'}} source={require('../../../Assets/menu.png')} />
  </TouchableOpacity>
);


export default CustomerHomeStack;
