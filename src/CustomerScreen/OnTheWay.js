import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../Constants/Colors';
import { SafeAreaView } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import LoadingView from '../Components/LoadingView';
import { BookingContext } from '../Providers/BookingProvider'
import { partialProfileUrl } from '../Providers';
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC6TqkoPpjdfWkfkfe641ITSW6C9VSKDM';


export default OnTheWay = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true)
  const { getWasherLocation } = useContext(BookingContext)
  const { booking } = useMemo(() => route?.params, [route])
  const [origin, setOrigin] = useState()
  const [washerLocation, setWasherLocation] = useState()


  useEffect(() => {
    let interval = setInterval(function x() {
      getWasherLocation(booking.washer_id).then(json => {
        if (json?.data) {
          if (!origin) setOrigin({ latitude: parseFloat(json?.data[0].latitude), longitude: parseFloat(json?.data[0].longitude) })
          setWasherLocation(json?.data[0])
        }
      })
      return x;
    }(), 60000);
    return () => clearInterval(interval)
  }, [])

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <LoadingView loading={loading} />
      <MapView
        style={{ width: '100%', flex: 1 }}
        initialRegion={{
          ...(origin ? origin :getWashCoordinates(booking)),
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }} >

        {origin && <MapViewDirections
          onReady={() => setLoading(false)}
          onError={() => setLoading(false)}
          strokeWidth={5}
          strokeColor={Colors.blue_color}
          origin={getWashCoordinates(booking)}
          destination={origin}
          apikey={GOOGLE_MAPS_APIKEY}
        />}

        {washerLocation != undefined &&
          <Marker
            title="Washer"
            coordinate={{ latitude: parseFloat(washerLocation.latitude), longitude: parseFloat(washerLocation.longitude) }}>
            <Image style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white' }} source={booking.userdetails.image ? { uri: partialProfileUrl + booking.userdetails.image } : require('../../Assets/icon/user.png')} />
          </Marker>}

        {origin != undefined &&
          <Marker
            title="You"
            coordinate={getWashCoordinates(booking)} />}
      </MapView>

      <View style={styles.jobDestination}>
        <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 18 }} >JOB DESTINATION</Text>
        <Text>{booking.wash_location}</Text>
      </View>

      <View style={{ backgroundColor: '#efefef', padding: 10, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10, alignSelf: 'center' }}>
          <Image style={{ width: 25, height: 25, tintColor: '#24AE88', }} source={require('../../Assets/checkdark.png')} />
          <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', textAlign: 'center', marginLeft: 5 }}>Booking Confirm</Text>
        </View>
        <View style={{
          borderWidth: 1, borderColor: '#ccc',
          width: '95%', backgroundColor: '#fff', alignSelf: 'center',
          marginBottom: 22, shadowOpacity: 0.8, shadowColor: '#aaa', justifyContent: 'center', borderRadius: 15
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
            <Text>{booking?.wash_location}</Text>
            <Text style={{ color: 'yellow', backgroundColor: '#000', padding: 4, fontWeight: 'bold', borderRadius: 5 }}> 0.5 min </Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={booking.userdetails.image ? { uri: partialProfileUrl + booking.userdetails.image } : require('../../Assets/icon/user.png')} />
            <Text style={{ padding: 4, marginLeft: 5, fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>{booking.userdetails[0]?.name}</Text>
          </View>

          <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${booking.userdetails.mobile}`)} style={{ flexDirection: 'row', padding: 10, width: '50%' }}>
              <Image style={{ width: 20, height: 20, tintColor: '#0EFF74', }} source={require('../../Assets/call.png')} />
              <Text style={{ padding: 4, marginLeft: 5, fontSize: 12 }}>CALL WASHER</Text>
            </TouchableOpacity>
            <View style={{ width: 1, height: 45, backgroundColor: '#aaa' }} />
            <TouchableOpacity style={{ flexDirection: 'row', padding: 10, width: '50%' }}>
              <Image style={{ width: 20, height: 20, tintColor: 'red', }} source={require('../../Assets/error.png')} />
              <Text style={{ padding: 4, marginLeft: 5, fontSize: 12 }}>CANCEL BOOKING </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
          <View style={{ flexDirection: 'row', padding: 5, marginLeft: 10, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#445F98', width: 45, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 0, margin: 7 }}>
              <Image style={{ width: 40, height: 40, tintColor: '#FFF', }} source={require('../../Assets/smartphone.png')} />
            </View>

            <TextInput
              style={[styles.auth_textInput,]}
              placeholder="Type your message"
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TouchableOpacity
              onPress={() => { navigation.navigate('Work In Progress'); }}>

              <Text style={{ color: '#445F98', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <SafeAreaView />
    </View>
  );
}

const getWashCoordinates = booking => ({ latitude: parseFloat(booking.wash_lat_lng.latitude), longitude: parseFloat(booking.wash_lat_lng.longitude) })

const styles = StyleSheet.create({
  customerDetails: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#777',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },

  jobDestination: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  auth_textInput: {

    alignSelf: 'center',
    width: '55%',
    // borderWidth: 1,
    marginLeft: 5,
    marginRight: 15,
    borderBottomWidth: 0,
    height: 40,
    color: Colors.text_color,
    marginTop: 5,

  },
});
