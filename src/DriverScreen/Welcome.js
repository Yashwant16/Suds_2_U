import React, { useState, useEffect, useContext, useRef } from 'react';
import { Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import NewJobModal from '../Components/NewJobModal';
import { AuthContext } from '../Providers/AuthProvider';
import messaging from '@react-native-firebase/messaging';
import LoadingView from '../Components/LoadingView';
import { BookingContext, WASHR_ON_THE_WAY } from '../Providers/BookingProvider';
import { dontShow } from '../Navigation/NavigationService';
import { subscribeLocation } from '../Services/LocationServices';

export const nav = React.createRef(null);

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisibility] = useState(false);
  const [newJobBooking, setNewJobBooking] = useState();
  const [loading, setLoading] = useState(false);
  const { getSingleBookingDetails, acceptJob, rejectJob, runningBooking, updateLocation } = useContext(BookingContext);
  const {
    userData: { latitude, longitude },
    updateUserLocation
  } = useContext(AuthContext);

  useEffect(() => {
    let unsubscribe
    if (runningBooking?.status === WASHR_ON_THE_WAY) {
      unsubscribe = subscribeLocation(updateLocation)
    } else unsubscribe ? unsubscribe() : null

    return () => unsubscribe ? unsubscribe() : null

  }, [runningBooking])

  const accept = async () => {
    setModalVisibility(false);
    setLoading(true);
    let success = await acceptJob(newJobBooking?.booking_id);
    setLoading(false);
    if (success) navigation.navigate('ON JOB', { booking: newJobBooking });
  };

  useEffect(() => {
    nav.current = navigation;
    updateUserLocation()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.data.type == 0) {
        setLoading(true);
        let json = await getSingleBookingDetails(remoteMessage.data.booking_id);
        setLoading(false);
        if (json) {
          setNewJobBooking(json.data);
          setModalVisibility(true);
        }
      }
    });


    // const timeout1 = setTimeout(async () => {
    //   if (!dontShow) {
    //     setLoading(true);
    //     let json = await getSingleBookingDetails('17')
    //     setLoading(false);
    //     if (json) {
    //       setNewJobBooking(json.data)
    //       setModalVisibility(true);
    //     }
    //   }
    // }, 3000);
    return unsubscribe;
    // return () => clearTimeout(timeout1)
  }, []);

  const hide = async () => {
    setLoading(true);
    await rejectJob(newJobBooking.booking_id);
    setLoading(false);
    setModalVisibility(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: '100%', flex: 1 }}
        region={{
          latitude: latitude ? parseFloat(latitude) : 37.78825,
          longitude: longitude ? parseFloat(longitude) : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <View style={{ backgroundColor: '#efefef', padding: 10 }}>
        <Text style={{ fontSize: 18, paddingBottom: 5 }}>TODAY'S TRIP</Text>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 4, padding: 10, marginBottom: 10 }}>
          <Image
            style={{ height: 48, width: 48, marginRight: 10, padding: 10, borderRadius: 35 }}
            source={require('../../Assets/car-steering-wheel.png')}
          />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{}}>
              <Text style={{ marginHorizontal: 5, fontSize: 16 }}>8 Jobs Done</Text>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                <Image style={{ width: 16, height: 16, tintColor: '#777' }} source={require('../../Assets/coupon.png')} />
                <Text style={{ marginHorizontal: 3, color: '#999' }}>8 hours online</Text>
              </View>
            </View>
            <View style={{}}>
              <Text style={{ marginHorizontal: 5, fontWeight: 'bold', textAlign: 'right' }}>$8.5</Text>
              <Text style={{ marginHorizontal: 5, color: '#aaa', textAlign: 'right', marginTop: 5 }}>Earned</Text>
            </View>
          </View>
        </View>
      </View>
      <LoadingView loading={loading} />
      <NewJobModal booking={newJobBooking} accept={accept} modalVisible={modalVisible} hide={hide} setModalVisible={setModalVisibility} />
    </View>
  );
};

export default WelcomeScreen;
