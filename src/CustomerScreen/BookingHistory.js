import { useNetInfo } from '@react-native-community/netinfo';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native';
import Colors from '../../Constants/Colors';
import ListEmpty from '../Components/ListEmpty';
import { partialProfileUrl } from '../Providers';
import { AppContext } from '../Providers/AppProvider';
import { ACTIONS, BookingContext, WASHER_ACCEPTED, WASHER_ARRIVED, WASHR_ON_THE_WAY, WASH_COMPLETED, WASH_IN_PROGRESS, WASH_PENDING, WASH_REJECTED } from '../Providers/BookingProvider';

const BookingHistory = ({ navigation }) => {
  const netInfo = useNetInfo();
  const {
    state: { bookingHistory, loading, hasLoadedAllItems, refreshing, type },
    dispatch,
  } = useContext(BookingContext);

  useEffect(() => dispatch({ type: ACTIONS.Start }), []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', color: Colors.text_white, fontSize: 18 }}>Rewards:</Text>

        {[...Array(10)].map((v, i) => (
          <Image
            key={i}
            style={{ width: 22, height: 22, tintColor: i < 4 ? Colors.blue_color : '#777', marginTop: 2, marginLeft: 5 }}
            source={require('../../Assets/drop.png')}
          />
        ))}
      </View>
      <FlatList
        keyExtractor={item => item.booking_id}
        style={{ width: '100%', height: 200 }}
        showsVerticalScrollIndicator={false}
        data={bookingHistory}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
        ListEmptyComponent={!loading && <ListEmpty retry={() => dispatch({ type: ACTIONS.Start })} netInfo={netInfo} emptyMsg="No Results Found" />}
        ListFooterComponent={(loading || (!hasLoadedAllItems && type !== ACTIONS.OnFail)) && ListFooter}
        onEndReached={!hasLoadedAllItems && (() => dispatch({ type: ACTIONS.LoadMore }))}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => dispatch({ type: ACTIONS.Refresh })} />}
      />
    </View>
  );
};

export default BookingHistory;
const Item = ({ item, navigation }) => {
  console.log(JSON.stringify(item, null, 2))
  const washStatusObject = useMemo(() => getWashStatus(item.status), [item])
  const { getSingleBookingDetails } = useContext(BookingContext);
  const { setLoading } = useContext(AppContext)
  const param = useMemo(() => {
    switch (item.status) {
      case WASH_PENDING: return { id: item.booking_id }
      case WASHR_ON_THE_WAY:
      case WASHER_ACCEPTED:
        return { booking: { ...item, wash_lat_lng: { latitude: 8.968911, longitude: 38.721940 } } }
      case WASH_IN_PROGRESS: return { booking: { ...item, wash_lat_lng: { latitude: 8.968911, longitude: 38.721940 } } }
      default: return { id: item.booking_id }
    }
  }, [item])

  const onPress = async () => {
    let booking;
    switch (item.status) {
      case WASH_PENDING:
        navigation.navigate('BOOKING DETAILS', { id: item.booking_id })
        break;
      case WASH_REJECTED: return Alert.alert('Rejected', 'Washer rejected this job request')
      case WASHER_ACCEPTED:
        navigation.navigate('BOOKING DETAILS', { id: item.booking_id })
        break;
      case WASHR_ON_THE_WAY:
        booking = await getBookingWithId(item.booking_id)
        if (booking) navigation.navigate('On The Way', { booking, onTheWay: true })
        break;
      case WASH_IN_PROGRESS:
        booking = await getBookingWithId(item.booking_id)
        if (booking) navigation.navigate('Work In Progress', { booking });
        break;
      case WASH_COMPLETED:
        navigation.navigate('BOOKING DETAILS', { id: item.booking_id });
        break;
      default:
        break;
    }
  }

  const getBookingWithId = async (id) => {
    setLoading(true);
    let json = await getSingleBookingDetails(item.booking_id);
    setLoading(false);
    if (json?.data) return json.data
    else Alert.alert('Error', 'Something went wrong')
  }

  return (
    <TouchableOpacity style={{ padding: 16, flex: 1 }} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ height: 70, width: 70, marginRight: 10, padding: 10, borderRadius: 35 }} source={(item.userdetails[0]?.image || item.userdetails?.image) ? { uri: partialProfileUrl + (item.userdetails[0]?.image || item.userdetails?.image) } : require('../../Assets/icon/user.png')} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ marginHorizontal: 5, fontSize: 16, marginBottom: 2 }}>{(item.userdetails[0]?.name || item.userdetails?.name)}</Text>
            <Text style={{ marginHorizontal: 5, fontWeight: 'bold', color: Colors.blue_color }}>{item.vehicledetails[0]?.model || item.vehicle_type}</Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 16, height: 16, tintColor: '#777' }} source={require('../../Assets/location.png')} />
              <Text style={{ marginHorizontal: 3, color: '#999' }}>{item.wash_location}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={{ marginHorizontal: 5, color: getWashStatus(item.status).color, fontWeight: 'bold', textAlign: 'right' }}>{washStatusObject.name}</Text>
            <Text style={{ marginHorizontal: 5, color: '#aaa', textAlign: 'right' }}>{item.updated_at}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const ListFooter = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', padding: 8 }}>
    <ActivityIndicator color={Colors.blue_color} size="large" />
  </View>
);
const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#ffae00',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 15,
  },
});


const getWashStatus = (status) => {
  switch (status) {
    case WASH_PENDING: return { name: "Pending", color: 'orange', naviagteTo: 'BOOKING DETAILS' }
    case WASHER_ACCEPTED: return { name: "Accepted", color: 'orange', naviagteTo: 'BOOKING DETAILS' }
    case WASHR_ON_THE_WAY: return { name: "Washer on the way", color: 'orange', naviagteTo: 'On The Way' }
    case WASHER_ARRIVED: return { name: "Washer Arrived", color: 'orange', naviagteTo: 'On The Way' }
    case WASH_IN_PROGRESS: return { name: "In progress", color: 'orange', naviagteTo: 'Work In Progress' }
    case WASH_COMPLETED: return { name: "Success", color: Colors.green, naviagteTo: 'BOOKING DETAILS' }
    case WASH_REJECTED: return { name: "Rejected", color: 'red', naviagteTo: 'BOOKING DETAILS' }
  }
}