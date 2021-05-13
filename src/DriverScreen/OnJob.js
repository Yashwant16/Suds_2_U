import React, {useContext, useMemo, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import CtaButton from '../Components/CtaButton';
import Colors from '../../Constants/Colors';
import MapViewDirections from 'react-native-maps-directions';
import {AuthContext} from '../Providers/AuthProvider';
import LoadingView from '../Components/LoadingView';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDC6TqkoPpjdfWkfkfe641ITSW6C9VSKDM';
const OnJob = ({navigation,route}) => {
  const [arrived, setArrived] = useState(false);
  const [loading, setLoading] = useState(false);
  const booking = useMemo(()=>route.params?.booking, [route])

  const {
    userData: {latitude, longitude},
  } = useContext(AuthContext);

  const onPress = () => {
    if (arrived) navigation.navigate('WORK IN PROGRESS', {booking});
    else setArrived(true);
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <LoadingView loading={loading} />
      <MapView
        style={{width: '100%', flex: 1}}
        camera={{
          zoom: 17,
          pitch: 2,
          heading: 2, 
          altitude: 2,
          center: {latitude: parseFloat(latitude), longitude: parseFloat(longitude)},
        }}>
        {/* <MapViewDirections
          onReady={() => setLoading(false)}
          strokeWidth={5}
          strokeColor={Colors.blue_color}
          origin={{latitude: parseFloat(latitude), longitude: parseFloat(longitude)}}
          destination={{latitude: parseFloat(booking?.userdetails[0].latitude), longitude: parseFloat(booking?.userdetails[0].longitude)}}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        <MapView.Marker coordinate={{latitude: parseFloat(latitude), longitude: parseFloat(longitude)}} title={'Your location'} />
        <MapView.Marker
          coordinate={{latitude: parseFloat(booking?.userdetails[0].latitude), longitude: parseFloat(booking?.userdetails[0].longitude)}}
          title={'Customer location'}
        />
      </MapView>

      <View style={styles.jobDestination}>
        <Image
          style={{height: 25, width: 25, marginRight: 10, padding: 10, alignSelf: 'center', tintColor: '#999'}}
          source={require('../../Assets/help.png')}
        />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Text style={{marginHorizontal: 5, fontSize: 16, color: Colors.dark_orange}}>JOB DESTINATION</Text>
            <Text style={{marginHorizontal: 5, fontSize: 16, color: '#444'}}>{booking?.wash_location}</Text>
          </View>
          <Image
            style={{height: 25, width: 25, marginRight: 10, padding: 10, alignSelf: 'center', tintColor: '#444'}}
            source={require('../../Assets/location.png')}
          />
        </View>
      </View>

      <View style={{backgroundColor: '#efefef', padding: 10}}>
        <Text style={{fontSize: 18, paddingBottom: 5}}>CUSTOMER INFORMATION</Text>
        <View style={styles.customerDetails}>
          <Image
            style={{height: 48, width: 48, marginRight: 10, padding: 10, borderRadius: 35}}
            source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
          />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{}}>
              <Text style={{marginHorizontal: 5, fontSize: 16}}>{booking?.userdetails[0].name}</Text>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/coupon.png')} />
                <Text style={{marginHorizontal: 3, color: '#999'}}>5:30 pm</Text>
              </View>
            </View>
            <View style={{}}>
              <Text style={{marginHorizontal: 5, fontWeight: 'bold', textAlign: 'right'}}>1.5 km</Text>
              <Text style={{marginHorizontal: 5, color: '#aaa', textAlign: 'right', marginTop: 5}}>Distance</Text>
            </View>
          </View>
        </View>
        <CtaButton
          onPress={onPress}
          primary
          title={arrived ? 'ARRIVED & START JOB' : 'ON MY WAY'}
          style={{borderRadius: 5, backgroundColor: arrived ? Colors.green : '#226', padding: 16, width: '100%'}}
        />
      </View>
    </View>
  );
};
     


export default OnJob;

const styles = StyleSheet.create({
  customerDetails: {
    shadowOffset: {width: 1, height: 1},
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
    shadowOffset: {width: 1, height: 1},
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

// const booking = {
//   booking_date: '2021-05-07',
//   booking_id: '1',
//   booking_time: '10:00 AM',
//   created_at: '2021-04-06',
//   extra_add_ons: '7,8',
//   extraaddonsdetails: [
//     {add_ons_name: 'extra oil', add_ons_price: '20', created_at: '2021-04-06', id: '7', package_id: '15', updated_at: '2021-04-08'},
//     {add_ons_name: 'pet hair', add_ons_price: '20', created_at: '2021-04-06', id: '8', package_id: '15', updated_at: '2021-04-08'},
//   ],
//   package: '10',
//   package_price: '24',
//   rating: '2.5',
//   review: ' test test test test ',
//   tip: '0',
//   total: '290',
//   updated_at: '2021-05-08',
//   user_id: '6',
//   userdetails: [
//     {
//       api_token: null,
//       created_at: '2021-03-30 22:55:15',
//       email: 'admisnss@gmail.com',
//       email_verified_at: null,
//       id: '6',
//       image: 'Group 2.png',
//       latitude: 8.95277,
//       longitude: 38.741453,
//       mobile: '963214584',
//       name: 'adminbb',
//       onlinestatus: '0',
//       password: '$2y$10$wXxaQMqNPKhVUYCmQefGMuOqUPYwY9NGqht/u0I1jMT/t5u/pc5Zm',
//       remember_token: 'CDGs62sIauvXTZa4ndQP1EFzkL1NR3pv0FteaWjyyJ1XvnMyY8pBDECWhNBb',
//       role_as: '3',
//       status: '0',
//       updated_at: '2021-04-02 21:51:54',
//     },
//   ],
//   vehicle_id: '1',
//   vehicledetails: [
//     {
//       category_id: '2',
//       created_at: '2021-04-05 16:57:11',
//       engine: '40',
//       image: 'car.jpg',
//       make: 'today',
//       model: 'new model',
//       updated_at: '2021-04-05 16:57:11',
//       user_id: '6',
//       vehicle_id: '1',
//       vehicle_type: null,
//       year: '2021',
//     },
//   ],
//   wash_location: 'mahu naka',
//   washer_id: '4',
// };
