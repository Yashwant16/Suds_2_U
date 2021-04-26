import React from 'react';
import {Text, View, Image, SafeAreaView, ImageBackground} from 'react-native';
import CtaButton from '../Components/CtaButton';
import {CUSTOMER, type, WASHER} from '../Navigation/NavigationService';

const UserTypeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <ImageBackground style={{width: '100%', height: '100%', flex: 1}} source={require('../../Assets/bg_img.png')}>
          <SafeAreaView />

          <View style={{flex: 1, padding: 21}}>
            <View style={{marginTop: 25}}>
              <Image
                style={{
                  width: '100%',
                  height: 95,
                  resizeMode: 'contain',
                  marginTop: 30,
                }}
                source={require('../../Assets/logo_icon.png')}></Image>
              <Image
                style={{
                  width: '100%',
                  height: 65,
                  resizeMode: 'contain',
                  marginTop: 5,
                }}
                source={require('../../Assets/logo2.png')}></Image>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                marginBottom: 5,
                fontSize: 18,
              }}>
              Hello Well come to suds-2-U
            </Text>
            <Text style={{color: '#fff', textAlign: 'center', marginBottom: 5, fontSize: 18, fontWeight: 'bold'}}>Continue as a</Text>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                marginBottom: 5,
                marginTop: 5,
                padding: 5,
              }}>
              <CtaButton
                primary
                onPress={() => {
                  navigation.navigate('chooseScreen');
                  type.current = CUSTOMER;
                }}
                title="Customer"
              />
              <CtaButton
                onPress={() => {
                  navigation.navigate('chooseScreen');
                  type.current = WASHER;
                }}
                title="Car Washer"
              />
            </View>
          </View>
          <SafeAreaView />
        </ImageBackground>
      </View>
    </View>
  );
};

export default UserTypeScreen;
