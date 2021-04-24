import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenOptions} from '../NavigationService';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import DriverDrawer from './DriverDrawer';
import {nav} from '../../DriverScreen/BookingHistory';
import {useNavigation, useRoute} from '@react-navigation/core';
import OnJob from '../../DriverScreen/OnJob';
import WorkInProgress from '../../DriverScreen/WorkInProgress';
import JobFinished from '../../DriverScreen/JobFinished';
import BookingDetails from '../../DriverScreen/BookingDetails';

const Stack = createStackNavigator();

const DriverHomeStack = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const title = useMemo(() => getActionFromState(navigation.dangerouslyGetState()), [route]);

  function getActionFromState(state) {
    let index = state?.routes[0]?.state?.routes[0]?.state?.index;
    return state?.routes[0]?.state?.routes[0]?.state?.routeNames[index];
  }
  return (
    <Stack.Navigator initialRouteName="drawer" screenOptions={defaultScreenOptions}>
      <Stack.Screen name="WELCOME" options={{headerLeft: () => <Icon navigation={nav.current} />, headerTitle: title}} component={DriverDrawer} />
      <Stack.Screen name="ON JOB" component={OnJob} />
      <Stack.Screen name="WORK IN PROGRESS" component={WorkInProgress} />
      <Stack.Screen name="JOB FINISHED" component={JobFinished} />
      <Stack.Screen name="BOOKING DETAILS" component={BookingDetails} />
    </Stack.Navigator>
  );
};

const Icon = ({navigation}) => (
  <TouchableOpacity style={{padding: 10}} onPress={() => navigation.toggleDrawer()}>
    <Image style={{height: 20, width: 20, tintColor: 'white'}} source={require('../../../Assets/menu.png')} />
  </TouchableOpacity>
);

export default DriverHomeStack;
