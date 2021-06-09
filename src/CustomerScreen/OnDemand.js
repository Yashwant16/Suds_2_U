import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../Constants/Colors';
import { Icon } from 'react-native-elements';
import { getCurrentPosition, subscribeLocationLocation } from '../Services/LocationServices';
import { changeStack, navigate } from '../Navigation/NavigationService';

const OnDemand = () => {

  const [state, setState] = useState({
    arrived: false,
    latitude: 9.010977,
    longitude: 38.727332,
    locationStatus: ''

  })

  useEffect(() => getOneTimeLocation(), [])

  const getOneTimeLocation = async () => {
    setState({ ...state, locationStatus: "Getting Location..." })
    let info = await getCurrentPosition()
    if (info) { 
      setState({ ...state, ...info.coords, locationStatus: "Formatted address" }) 
      subscribeLocationLocation()
    }
    else console.log(info)
  };

  return (
    <View style={{ flex: 1 }}>

      <MapView
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
        camera={{
          zoom: 15,
          pitch: 2,
          heading: 2,
          altitude: 2,
          center: { latitude: state.latitude, longitude: state.longitude }
        }}>

        <Marker
          coordinate={{ latitude: state.latitude, longitude: state.longitude }}
          title="Your Live Location" >
        </Marker>
      </MapView>
      <View style={styles.jobDestination}>
        <Image
          style={{ height: 25, width: 25, marginRight: -30, padding: 10, alignSelf: 'center', tintColor: '#999' }}
          source={require('../../Assets/search.png')}
        />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={{ marginHorizontal: 5, fontSize: 16, color: Colors.dark_orange }}>JOB DESTINATION</Text>
            <Text style={{ marginHorizontal: 5, fontSize: 16, color: '#444' }}>{state.locationStatus}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 'auto' }}>
        <TouchableOpacity
          onPress={() => { getOneTimeLocation() }}
          activeOpacity={0.7}
          style={{ elevation: 2, borderRadius: 25, padding: 10, margin: 10, backgroundColor: 'white', alignSelf: 'flex-end' }}>
          <Icon name="gps-fixed" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("SELECT VEHICLE")}
          style={styles.auth_btn}
          activeOpacity={0.8}>
          <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>CONFIRM LOCATION</Text>
        </TouchableOpacity>
      </View>

    </View>
  );


}

export default OnDemand

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
    padding: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
});
