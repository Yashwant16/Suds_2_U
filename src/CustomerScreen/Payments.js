import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Button, ImageBackground } from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import { navigate } from '../Navigation/NavigationService';

const Payments = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('../../Assets/bg_img.png')}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              elevation={5}
              onPress={() => navigate('PAYPAL')}
              style={styles.auth_btn}
              underlayColor="gray"
              activeOpacity={0.8}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginHorizontal: 10 }} source={require('../../Assets/icon/paypal-logo.png')} />
                  <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold', marginTop: 5 }}>PayPal</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                  <Image style={{ width: 19, height: 19, tintColor: '#aaa', marginHorizontal: 10, marginTop: 3 }} source={require('../../Assets/icon/right_back.png')} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              elevation={5}
              onPress={() => navigation.navigate('Creddit/Debit Card')}
              style={styles.auth_btn}
              underlayColor="gray"
              activeOpacity={0.8}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginHorizontal: 10 }} source={require('../../Assets/icon/credit-card.png')} />
                  <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold', marginTop: 5 }}>Creddit/Debit Card</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                  <Image style={{ width: 19, height: 19, tintColor: '#aaa', marginHorizontal: 10, marginTop: 3 }} source={require('../../Assets/icon/right_back.png')} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
            <View
              elevation={5}
              // onPress={() => navigation.navigate('Add Card')}
              style={styles.add_auth_btn}
              underlayColor="gray"
              activeOpacity={0.8}>
              <Text style={{ fontSize: 15, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Add New Credit/Debit Card </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Payments

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
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.text_white,
    borderRadius: 5,
    width: '90%',
    height: 50,
    justifyContent: 'center',
  },
  add_auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.blue_color,
    borderRadius: 5,
    width: '100%',
    height: 70,
    justifyContent: 'center',
  },
});
