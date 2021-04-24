import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigators/RootStack';
import { navigationRef } from './src/Navigation/NavigationService';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;



