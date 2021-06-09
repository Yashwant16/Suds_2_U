import Geolocation from '@react-native-community/geolocation';
import { Platform } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const askLocationService = async () => {
  if (Platform.OS == 'android') {
    try {
      return await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });
    } catch (error) {
      throw error;
    }
  } else return;
};

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    askLocationService()
      .then(data => setTimeout(() => Geolocation.getCurrentPosition(info => resolve(info), error => console.log(error), { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }), data == 'already-enabled' ? 0 : 6000))
      .catch(err => reject(err));
  });
};

export const subscribeLocationLocation = () => {
  watchID = Geolocation.watchPosition(
    (position) => {
      console.log(position)
    },
    (error) => {
      // setLocationStatus(error.message);
    },
    { enableHighAccuracy: false, maximumAge: 1000 }
  );
};
