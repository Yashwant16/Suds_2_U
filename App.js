import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigators/RootStack';
import { navigate, navigationRef, clickedNotification } from './src/Navigation/NavigationService';
import Providers from './src/Providers';
import messaging from '@react-native-firebase/messaging';
import { StripeProvider } from '@stripe/stripe-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import LoadingView from './src/Components/LoadingView';
import { AppContext } from './src/Providers/AppProvider';
import { appIsOpen } from './src/Services/NotificatoinService';

Icon.loadFont();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const config = {
  screens: {
    DriverHomeStack: 'booking/:booking_id',
    CustomerHomeStack : 'customer_booking/:booking_id'
  }
}

const linking = {
  prefixes: ['https://suds2u.com', 'suds2u://'],
  config
}




const App = () => {
  useEffect(()=>{appIsOpen.current=true; messaging().subscribeToTopic('Mikias3')}, [])

  

  // const navigation = useNavigation()
  // navigation.navigate('dd', {screen : '', params})
  return (
    <StripeProvider
      publishableKey="pk_test_51J60G0Kr8szE4qfQ1i3QuKJnxPqWYCZ7wLlnOVWdvGcGN9EvA8WFX2Q6phXQsiQxsEHHoMFBF1YkDfwdub29lAUR000zSHyZnL"
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Providers>
        <LoadingView />
        <NavigationContainer linking={linking} ref={navigationRef}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <Navigation />
        </NavigationContainer>
      </Providers>
    </StripeProvider>
  );
};

export default App;
