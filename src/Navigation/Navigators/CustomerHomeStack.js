import React, {useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenOptions} from '../NavigationService';
import {Image, TouchableOpacity} from 'react-native';
import DriverDrawer from './DriverDrawer';
import {useNavigation, useRoute} from '@react-navigation/core';
import OnJob from '../../DriverScreen/OnJob';
// import WorkInProgress from '../../DriverScreen/WorkInProgress';
import JobFinished from '../../DriverScreen/JobFinished';

import AddNewVehicle from '../../CustomerScreen/AddNewVehicle';
import SelectPackage from '../../CustomerScreen/SelectPackage';
import AddCard from '../../CustomerScreen/AddCard';
import SelectAddOns from '../../CustomerScreen/SelectAddOns';
import BookingReview from '../../CustomerScreen/BookingReview';
import BookingDetail from '../../CustomerScreen/BookingDetail';
import BookingConfirm from '../../CustomerScreen/BookingConfirm';
import ScheduleBook from '../../CustomerScreen/ScheduleBook';
import OnTheWay from '../../CustomerScreen/OnTheWay';
import OnDemand from '../../CustomerScreen/OnDemand';
import WorkInProgress from '../../CustomerScreen/WorkInProgress';
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
      <Stack.Screen name="Add New Vehicle" component={AddNewVehicle} />
      <Stack.Screen name="Select Package" component={SelectPackage} />
      <Stack.Screen name="Add Card" component={AddCard} />
      <Stack.Screen name="Select Add Ons" component={SelectAddOns} />
      <Stack.Screen name="Booking Review" component={BookingReview} />
      <Stack.Screen name="Booking Confirm" component={BookingConfirm} />
      <Stack.Screen name="Schedule Book" component={ScheduleBook} />
      <Stack.Screen name="Booking Detail" component={BookingDetail} />
      <Stack.Screen name="OnDemand" component={OnDemand} />
      <Stack.Screen name="On The Way" component={OnTheWay} />
      <Stack.Screen name="Work In Progress" component={WorkInProgress} />
    </Stack.Navigator>
  );
};

const Icon = ({navigation}) => (
  <TouchableOpacity style={{padding: 10}} onPress={() => navigation.toggleDrawer()}>
    <Image style={{height: 20, width: 20, tintColor: 'white'}} source={require('../../../Assets/menu.png')} />
  </TouchableOpacity>
);


export default CustomerHomeStack;
