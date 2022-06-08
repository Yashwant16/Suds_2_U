import { useContext, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { AuthContext } from '../Providers/AuthProvider';
import { AppContext } from '../Providers/AppProvider';
import { CUSTOMER, WASHER } from '../Navigation/NavigationService';
import { NOTIFICATION_TYPES } from '../..';
import { useNavigation } from '@react-navigation/core';

const NotificationController = () => {

  const navigation = useNavigation()

  const { setNotificationPopup, setNewJobRequestId } = useContext(AppContext)
  const { userData } = useContext(AuthContext)

  PushNotification.configure({
    onNotification: notification => notification.userInteraction ? handleNotification(notification, notification.bigPictureUrl, notification.data) : false
  })

  useEffect(() => {
    messaging().getInitialNotification().then(remoteMessage => handleNotification(remoteMessage?.notification, remoteMessage?.notification?.android?.imageUrl, remoteMessage?.data))
    const unsubscribe = messaging().onMessage(createLocalNotification)
    return unsubscribe;
  }, []);

  const handleNotification = (notification, imageUrl, data,) => {
    if (!notification) return
    console.log(userData)
    console.log('H A N D L E D', JSON.stringify({ title: notification.title, body: notification.body, data: { ...data } }, null, 2))

    if (data?.type != undefined) {
      if (userData?.role_as == CUSTOMER) {
        switch (data.type) {
          case NOTIFICATION_TYPES.JOB_ACCEPTED: return navigation.navigate('BOOKING DETAILS', { id: data.booking_id })
          case NOTIFICATION_TYPES.WASHER_ON_THE_WAY: return navigation.navigate('On The Way', { booking_id: data.booking_id })
          case NOTIFICATION_TYPES.WASH_IN_PROGRESS: return navigation.navigate('Work In Progress', { booking_id: data.booking_id });
          
          default:
            break;
        }
      } else if (userData?.role_as == WASHER) {
        switch (data.type) {
          case NOTIFICATION_TYPES.NEW_ON_DEMAND_REQUEST: return setNewJobRequestId(data.booking_id)

          default:
            break;
        }
      }
    } else if (userData.api_token) return setNotificationPopup({ title: notification.title, body: notification.body, imageUrl })

  }

  const createLocalNotification = (remoteMessage) => {

    if (userData?.role_as == WASHER && remoteMessage.data.type == NOTIFICATION_TYPES.NEW_ON_DEMAND_REQUEST) return setNewJobRequestId(remoteMessage.data.booking_id)

    PushNotification.localNotification({
      channelId: 'channel-id',
      message: remoteMessage.notification.body,
      body: remoteMessage.notification.body,
      title: remoteMessage.notification.title,
      bigPictureUrl: remoteMessage.notification.android.imageUrl,
      smallIcon: remoteMessage.notification.android.imageUrl,
      data: remoteMessage.data,
    });
  }


  return null;
};

export default NotificationController;

