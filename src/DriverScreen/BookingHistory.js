import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView, RefreshControl, ActivityIndicator} from 'react-native';
import Colors from '../../Constants/Colors';
import {ACTIONS, BookingContext} from '../Providers/BookingProvider';

const BookingHistory = ({navigation}) => {
  const {
    state: {bookingHistory, loading, hasLoadedAllItems, refreshing},
    dispatch,
  } = useContext(BookingContext);

  useEffect(() => dispatch({type: ACTIONS.Start}), []);

  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', color: Colors.text_white, fontSize: 18}}>Rewards:</Text>

        {[...Array(10)].map((v, i) => (
          <Image
            key={i}
            style={{width: 22, height: 22, tintColor: i < 4 ? Colors.blue_color : '#777', marginTop: 2, marginLeft: 5}}
            source={require('../../Assets/drop.png')}
          />
        ))}
      </View>
      <FlatList
        keyExtractor={item => item.id}
        style={{width: '100%', height: 200}}
        showsVerticalScrollIndicator={false}
        data={bookingHistory}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
        ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ddd'}} />}
        ListEmptyComponent={!loading && ListEmpty}
        ListFooterComponent={(loading || !hasLoadedAllItems) && ListFooter}
        onEndReached={!hasLoadedAllItems && (() => dispatch({type: ACTIONS.LoadMore}))}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl
             refreshing={refreshing}
            onRefresh={() =>dispatch({type:ACTIONS.Refresh})}
          />
        }
      />
    </View>
  );
};

export default BookingHistory;

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity style={{padding: 16, flex: 1}} onPress={() => navigation.navigate('BOOKING DETAILS')}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{height: 70, width: 70, marginRight: 10, padding: 10, borderRadius: 35}} source={{uri: item.image}} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{}}>
            <Text style={{marginHorizontal: 5, fontSize: 16, marginBottom: 2}}>{item.name}</Text>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold', color: Colors.blue_color}}>{item.vehicleType}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/location.png')} />
              <Text style={{marginHorizontal: 3, color: '#999'}}>{item.name}</Text>
            </View>
          </View>
          <View style={{}}>
            <Text style={{marginHorizontal: 5, color: 'green', fontWeight: 'bold', textAlign: 'right'}}>Success</Text>
            <Text style={{marginHorizontal: 5, color: '#aaa', textAlign: 'right'}}>Today at 3:26 pm</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListEmpty = () => (
  <View style={{alignItems: 'center', padding: 20}}>
    <Text style={{fontSize: 32, fontWeight: 'bold', opacity: 0.4, color: 'black'}}>No Results Found</Text>
  </View>
);
const ListFooter = () => (
  <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', padding: 8}}>
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
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 15,
  },
});
