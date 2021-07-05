import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigators/RootStack';
import { navigationRef } from './src/Navigation/NavigationService';
import Providers from './src/Providers';
import messaging from '@react-native-firebase/messaging';
import { StripeProvider } from '@stripe/stripe-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App = () => {
  useEffect(() => messaging().subscribeToTopic('mike'));
  return (
    <StripeProvider
      publishableKey="pk_test_51J60G0Kr8szE4qfQ1i3QuKJnxPqWYCZ7wLlnOVWdvGcGN9EvA8WFX2Q6phXQsiQxsEHHoMFBF1YkDfwdub29lAUR000zSHyZnL"
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Providers>
        <NavigationContainer ref={navigationRef}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <Navigation />
        </NavigationContainer>
      </Providers>
    </StripeProvider>
  );
};

export default App;
