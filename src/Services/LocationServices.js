import { Alert, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';

const [YES, NO, WAIT] = [1, 2, 3]

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the fine location");
      return true
    } else {
      Alert.alert('Notice', 'Ezezu needs your location to work properly.', { cancelable: false })
      console.log("Camera permission denied");
      return false
    }
  } catch (err) {
    console.warn(err);
    return false
  }
};

export const askLocationService = async () => {
  try {
    if (Platform.OS == 'android') {
      let access = await requestLocationPermission()
      if (access) {
        let result = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000, });
        return result == 'already-enabled' ? YES : YES
      } else return NO
    } else {
      let result = await Geolocation.requestAuthorization("whenInUse")
      if (result == "granted" || result == "restricted") return YES
      else return NO
    }
  } catch (error) {
    console.log(error)
    return NO
  }
};

export const getCurrentPosition = () => {
  return new Promise(async (resolve, reject) => {
    let permission = await askLocationService()
    if (permission == YES) Geolocation.getCurrentPosition(info => resolve(info) , error => console.log(error), { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 })
    else reject()
  })
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
