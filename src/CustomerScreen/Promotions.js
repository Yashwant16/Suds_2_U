import { useNetInfo } from '@react-native-community/netinfo';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, SafeAreaView, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';

import Colors from '../../Constants/Colors';
import ListEmpty from '../Components/ListEmpty';
import { ERROR, LOADING } from '../Providers';
import { AuthContext } from '../Providers/AuthProvider';
import { BookingContext } from '../Providers/BookingProvider';

export default Promotions = () => {

  const [promotions, setPromotions] = useState(LOADING)
  const netInfo = useNetInfo()

  const { getPromotions } = useContext(AuthContext)
  const { getRewards } = useContext(BookingContext)

  const [rewards, setRewards] = useState(LOADING)

  useEffect(() => {
    getRewards(setRewards)
    getPromotions(setPromotions)
  }, [])

  const Item = ({ item }) => (
    <View style={{
      backgroundColor: '#fff', alignItems: 'center', marginHorizontal: 15, height: 60, padding: 5, justifyContent: 'center', marginTop: 10, marginBottom: 10, elevation: 5,
      borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
    }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ color: Colors.blue_color }}>Apply</Text>
      </View>
    </View>
  )

  const List = () => {
    switch (promotions) {
      case LOADING: return <ActivityIndicator style={{ padding: 50 }} color={Colors.blue_color} size="large" />
      case ERROR: return <ListEmpty opacity={0.5} color={Colors.blue_color} netInfo={netInfo} emptyMsg="No promotions at this time." />

      default: return (
        <FlatList
          keyExtractor={item => item.id}
          data={promotions}
          style={{ width: '100%' }}
          renderItem={({ item }) => <Item item={item} />}
        />

      )
    }
  }

  const Rewards = () => {
    switch (rewards) {
      case LOADING: return <ActivityIndicator style={{ padding: 50 }} color={Colors.blue_color} size="large" />
      case ERROR: return (
        <>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            {[...Array(0)].map((v, i) => <Image key={i} style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />)}

          </View>
          <Text style={{ fontSize: 22, color: '#aaa', textAlign: 'center' }}>You are ten wash away from your free car wash</Text>
        </>

      )
      default: return (
        <>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            {[...Array(rewards)].map((v, i) => <Image key={i} style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />)}

          </View>
          <Text style={{ fontSize: 22, color: '#aaa', textAlign: 'center' }}>{10-rewards<=3?'Congrats! ' : ''}You are {10-rewards} {10-rewards==1 ? 'wash' : 'washes'} away from your free car wash</Text>
        </>

      )
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <SafeAreaView />
      <View style={{ padding: 21, alignItems: 'center', width: '100%' }}>
        <View style={{
          backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 130, padding: 18, elevation: 5,
          borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
        }}>
          <Rewards/>
        </View>
        <Text style={{ color: '#aaa', fontSize: 20, marginBottom: 15, marginTop: 20, marginVertical: 15, textAlign: 'center', width: '100%' }}>Promo codes cannot be used together</Text>

        <List />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    color: Colors.text_color,
    marginTop: 10,

  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.buttom_color,

    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  add_btn: {

    backgroundColor: '#e28c39',
    alignItems: 'center',
    width: '45%',
    height: 40,
    justifyContent: 'center', borderRadius: 20
  },
})