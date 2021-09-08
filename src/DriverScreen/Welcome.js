import React, { useState, useEffect, useContext, useRef } from 'react';
import { Text, View, Image } from 'react-native';
import MapView from 'react-native-maps';
import NewJobModal from '../Components/NewJobModal';
import { AuthContext } from '../Providers/AuthProvider';
import messaging from '@react-native-firebase/messaging';
import LoadingView from '../Components/LoadingView';
import { BookingContext, WASHR_ON_THE_WAY, WASH_IN_PROGRESS } from '../Providers/BookingProvider';
import { dontShow, onStartAction } from '../Navigation/NavigationService';
import { subscribeLocation } from '../Services/LocationServices';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { partialProfileUrl } from '../Providers';
import { launchImageLibrary } from 'react-native-image-picker';
import { AppState } from 'react-native';
import { NOTIFICATION_TYPES } from '../..';
import PushNotification from 'react-native-push-notification';

export const nav = React.createRef(null);

const WelcomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisibility] = useState(false);
  const [newJobBooking, setNewJobBooking] = useState();
  const [loading, setLoading] = useState(false);
  const { getSingleBookingDetails, acceptJob, rejectJob, runningBooking, updateLocation } = useContext(BookingContext);
  const {
    userData: { latitude, longitude },
    userData,
    updateUserLocation,
    changeImage
  } = useContext(AuthContext);

  useEffect(() => {
    let unsubscribe
    if (runningBooking?.status === WASHR_ON_THE_WAY) {
      unsubscribe = subscribeLocation(updateLocation)
    } else unsubscribe ? unsubscribe() : null

    return () => unsubscribe ? unsubscribe() : null

  }, [runningBooking])

  useEffect(()=>{
    console.log(runningBooking, "RUNNING BOOKING STATUS")
    switch (runningBooking?.status) {
      case WASHR_ON_THE_WAY:
         getBookingWithId(runningBooking.booking_id).then(booking=>{
          if (booking) navigation.navigate('ON JOB', { booking, onTheWay: true })
        })
        break;
        case WASH_IN_PROGRESS:
          getBookingWithId(runningBooking.booking_id).then(booking=>{
            if (booking) navigation.navigate('WORK IN PROGRESS', { booking });
          })
          break;
      default:
        break;
    }
  },[])

  const getBookingWithId = async (id) => {
    setLoading(true);
    let json = await getSingleBookingDetails(id);
    setLoading(false);
    if (json?.data) return json.data
    else Alert.alert('Error', 'Something went wrong')
  }


  const accept = async () => {
    setModalVisibility(false);
    setLoading(true);
    let success = await acceptJob(newJobBooking?.booking_id);
    setLoading(false);
    if (success) navigation.navigate('ON JOB', { booking: newJobBooking });
  };

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => nextAppState == "active" ? setTimeout(() => onStartAction.current ? handleNotificationClick(onStartAction.current) : null, 500) : null

  const handleNotificationClick = async (notification)=>{
    console.log("HANDELNG CLICKED NOTIFICATION")
    if(notification.data.type == NOTIFICATION_TYPES.NEW_ON_DEMAND_REQUEST){
      setLoading(true);
      let json = await getSingleBookingDetails(notification.data.booking_id);
      setLoading(false);
      if (json) {
        setNewJobBooking(json.data);
        setModalVisibility(true);
      }
    } else if (notification.data.type == NOTIFICATION_TYPES.WASH_FINISHED) {
      navigation.navigate('BOOKING DETAILS', { id: '67' })
    }
    onStartAction.current=null //clear the notification once it has been handled.
  }

  useEffect(() => {
    nav.current = navigation;
    setTimeout(() => onStartAction.current ? handleNotificationClick(onStartAction.current) : null, 2000)
    updateUserLocation()
    const unsubscribe = messaging().onMessage(async remoteMessage => {

      console.log(remoteMessage.data)

      PushNotification.action
      
      if (remoteMessage.data.type == 0) {
        setLoading(true);
        let json = await getSingleBookingDetails(remoteMessage.data.booking_id);
        setLoading(false);
        if (json) {
          setNewJobBooking(json.data);
          setModalVisibility(true);
        }
      } else {
        // PushNotification.localNotification({
        //   channelId : 'channel-id',
        //   message: remoteMessage.notification.body,
        //   title : remoteMessage.notification.title,
        //   data : remoteMessage.data
        // })
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

  const imageCallBack = async (res) => {
    console.log(res)
    if (res.didCancel) return
    setLoading(true)
    await changeImage(res.assets[0])
    setLoading(false)
  }



  return (
    <View style={{ flex: 1 }}>
      {/* <MapView
        style={{ height: '100%' }}
        region={{
          latitude: latitude ? parseFloat(latitude) : 37.78825,
          longitude: longitude ? parseFloat(longitude) : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}

      {/* <View style={{ backgroundColor: '#efefef', padding: 10 }}>
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
      </View> */}
      <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={{ uri: userData.image ? partialProfileUrl + userData.image : 'https://cdn2.vectorstock.com/i/1000x1000/34/76/default-placeholder-fitness-trainer-in-a-t-shirt-vector-20773476.jpg' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 21 }}>
          <TouchableOpacity onPress={() => launchImageLibrary({}, imageCallBack)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#e23a53', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginTop: 5, margin: 2 }} source={require('../../Assets/pencil.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', }}>
          <ImageBackground style={{ width: '100%', height: 170, alignItems: 'center', marginBottom: -1 }} source={require('../../Assets/shape.png')} >

            <Text style={{ color: '#fff', marginTop: 20, fontWeight: '900' }}> <Text style={{ textAlign: 'center', color: '#fff', marginTop: 10, fontSize: 16 }}>Welcome, </Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>{userData.name}</Text></Text>

            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center' }}>
              <Image style={{ width: 17, height: 17, tintColor: '#fff', }} source={require('../../Assets/location.png')} />
              <Text numberOfLines={1} style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{'currentAddress'}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', width: '100%', }}>
              <TouchableOpacity
                elevation={5}
                onPress={() => navigation.navigate('BOOKING HISTORY')}
                style={styles.auth_btn}
                underlayColor='gray'
                activeOpacity={0.8}>
                <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Bookings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                elevation={5}
                onPress={() => navigation.navigate('EARNING')}
                style={styles.auth_btn}
                underlayColor='gray'
                activeOpacity={0.8} >
                <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Earnings</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
      <LoadingView loading={loading} />
      <NewJobModal booking={newJobBooking} accept={accept} modalVisible={modalVisible} hide={hide} setModalVisible={setModalVisibility} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  auth_btn: {
    marginTop: 16,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#f5c946',
    borderRadius: 10,
    width: '35%',
    height: 50,
    justifyContent: 'center',
    margin: 5
  },
})
