import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../Constants/Colors';
import { Icon } from 'react-native-elements';
import { getCurrentPosition, subscribeLocationLocation } from '../Services/LocationServices';
import { bookingType, changeStack, navigate, ON_DEMAND } from '../Navigation/NavigationService';
import { useNavigation } from '@react-navigation/core';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC6TqkoPpjdfWkfkfe641ITSW6C9VSKDM';
import Geocoder from 'react-native-geocoding';
import { BookingContext } from '../Providers/BookingProvider';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
Geocoder.init("AIzaSyDC6TqkoPpjdfWkfkfe641ITSW6C9VSKDM");

const GETTING_LOCATION = 'Getting Location...'
const ERROR_GETTING_LOCATION = "Error getting location"


const OnDemand = ({ route }) => {
  const navigation = useNavigation()
  const [state, setState] = useState({ latitude: 9.010977, longitude: 38.727332, locationStatus: GETTING_LOCATION })
  const { setCurrentBooking, currentBooking } = useContext(BookingContext)

  useEffect(() => getOneTimeLocation(), [])
  useEffect(() => {
    setCurrentBooking({})
    if (route.params?.headerTitle) navigation.setOptions({ title: route.params.headerTitle })
    return ()=>setCurrentBooking({})
  }, [])

  const getFormattedAddress = (lat, lng) => {
    setState({ ...state, locationStatus: GETTING_LOCATION })
    Geocoder.from(lat, lng)
      .then(json => setState({ ...state, latitude: lat, longitude: lng, locationStatus: json.results[0].formatted_address }))
      .catch(error => { console.warn(error); setState({ ...state, locationStatus: ERROR_GETTING_LOCATION }) })
  }

  const getOneTimeLocation = async () => {
    if (currentBooking?.wash_lat_lng) setTimeout(()=>{
      mapRef.current.animateCamera({ zoom: 15, pitch: 2, heading: 2, altitude: 2, center: { ...currentBooking.wash_lat_lng } }, { duration: 1 })
    }, 5)
    let info = await getCurrentPosition()
    if (info) {
      mapRef.current.animateCamera({ zoom: 15, pitch: 2, heading: 2, altitude: 2, center: { ...info.coords } }, { duration: 1000 })
      subscribeLocationLocation()
    }
    else console.log(info)
  };

  const mapRef = useRef(null)

  const onPlaceSelected = (data, details = null) => {
    console.log(details)
    mapRef.current.animateCamera({
      zoom: 15,
      pitch: 2,
      heading: 2,
      altitude: 50,
      center: { latitude: details.geometry.location.lat, longitude: details.geometry.location.lng }
    }, { duration: 1000 })
    setState({ latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, locationStatus: data?.description })
  }

  const onConfirmLocation = async () => {
    if (state.locationStatus == GETTING_LOCATION) return Alert.alert('Please wait', state.locationStatus, [{text : 'Ok', onPress:(state.locationStatus==GETTING_LOCATION) ? ()=>null : onConfirmLocation}])
    if (state.locationStatus == ERROR_GETTING_LOCATION) return Alert.alert('Error', 'Error etting your location. Please check your internet connection.')
    bookingType.current = route.params?.bookingType ? route.params.bookingType : ON_DEMAND
    let wash_lat_lng = (await mapRef.current.getCamera())?.center
    setCurrentBooking(cv => ({ ...cv, wash_location: state.locationStatus, wash_lat_lng }))
    if (route.params?.changeLocation) return navigation.goBack()
    navigate("Select Vehicle Type")
  }

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor:Colors.blue_color}}>

      <MapView
        style={{ flex:1}}
        onRegionChangeComplete={({ latitude, longitude }) => getFormattedAddress(latitude, longitude)}
        showsCompass={false}
        ref={map => mapRef.current = map}
        initialRegion={{latitude: state.latitude, longitude: state.longitude , latitudeDelta : .009, longitudeDelta : .009 }}>
      </MapView>

      <View style={styles.jobDestination}>
        <Icon name="search" style={{ paddingTop: 12.5 }} color="#999" />
        <GooglePlacesInput onPress={onPlaceSelected} placeholder={state.locationStatus} />
      </View>

      <View style={{ marginTop: 'auto' }}>
        <TouchableOpacity
          onPress={() => { getOneTimeLocation() }}
          activeOpacity={0.7}
          style={{ elevation: 2, shadowColor:'#555', shadowRadius : 5, shadowOpacity :.2,borderRadius: 25, padding: 10, margin: 10, backgroundColor: 'white', position : 'absolute', right : 0, bottom : 65 }}>
          <Icon name="gps-fixed" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onConfirmLocation}
          style={styles.auth_btn}
          activeOpacity={0.8}>
          <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold', }}>CONFIRM LOCATION</Text>
        </TouchableOpacity>
      </View>
      <View pointerEvents="none" style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Icon size={50} color="orange" name="place" style={{ paddingBottom: 35 }} />
      </View>

    </SafeAreaView>
  );
}

export default OnDemand

const GooglePlacesInput = ({ onPress, placeholder }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      fetchDetails
      styles={{ textInput: { marginBottom: 0, height: 45 } }}
      onFail={(err) => console.log(err)}
      onPress={onPress}
      numberOfLines={1}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
  );
};

const styles = StyleSheet.create({
  auth_btn: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.blue_color,
    width: '100%',
    height: 65,
    justifyContent: 'center',
  },
  jobDestination: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
});
