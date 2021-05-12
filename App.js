import 'react-native-gesture-handler';
import React, {} from 'react';
import {Platform, StatusBar, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigators/RootStack';
import {navigationRef} from './src/Navigation/NavigationService';
import Providers from './src/Providers';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = () => {
  // useEffect(() => {
  //   messaging().subscribeToTopic('mike');
  // });
  return (
    <Providers>
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Navigation />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
