import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {

    drawerLabel: 'Promotions',
    drawerIcon: ({ tintColor }) => (
      <View>

        <Image style={{ width: 25, height: 25, tintColor: '#FFF' }} source={require('../../Assets/coupon.png')} />
      </View>
    ),
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
                <SafeAreaView/> 
        <View style={{ padding: 21, alignItems: 'center' }}>
          <View style={{
            backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 130, padding: 18,elevation:5,
            borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
          }}>
            <View style={{ flexDirection: 'row', padding: 8 }}>
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />
              <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginRight: 5, marginBottom: 8 }} source={require('../../Assets/star.png')} />

            </View>
            <Text style={{ fontSize: 22, color: '#aaa', textAlign: 'center' }}>Congrats! Your are one wash away from your free car wash</Text>
          </View>
          <Text style={{ color: '#aaa', fontSize: 20, marginBottom: 15, marginTop: 20, marginRight: 25 }}>Promo code for you cannot be used together</Text>

          <View style={{
            backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 60, padding: 5, justifyContent: 'center', marginTop: 10, marginBottom: 10,elevation:5,
            borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>15% 1 Wash</Text>
              <Text style={{ color: Colors.blue_color }}>Apply</Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 60, padding: 5, justifyContent: 'center', marginTop: 10, marginBottom: 10,elevation:5,
            borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>10% 4 of July Special</Text>
              <Text style={{ color: Colors.blue_color }}>Apply</Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 60, padding: 5, justifyContent: 'center', marginTop: 10, marginBottom: 10,elevation:5,
            borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>20% 25 of Christmas Special</Text>
              <Text style={{ color: Colors.blue_color }}>Apply</Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#fff', alignItems: 'center', width: '100%', height: 60, padding: 5, justifyContent: 'center', marginTop: 10, marginBottom: 10,elevation:5,
            borderRadius: 10, shadowOpacity: 0.8, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>10% 1 of December Special</Text>
              <Text style={{ color: Colors.blue_color }}>Apply</Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 }}>
          <TouchableOpacity
            elevation={5}
            // onPress={() => { navigation.navigate('Booking Review'); }}
            style={styles.auth_btn}
            underlayColor='gray'
            activeOpacity={0.8}
          // disabled={this.state.disableBtn}
          >
            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Cancel</Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
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