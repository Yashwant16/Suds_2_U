import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import DriverHomeStack from './DriverHomeStack';
import DriverDrawer from './DriverDrawer';
import CustomerHomeStack from './CustomerHomeStack';
import CustomerDrawer from './CustomerDrawer';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="AuthStack" headerMode="none" mode="modal" screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="DriverHomeStack" component={DriverHomeStack} />
      <Stack.Screen name="CustomerHomeStack" component={CustomerHomeStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
