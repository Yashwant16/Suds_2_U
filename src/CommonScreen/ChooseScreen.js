import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
import CtaButton from '../Components/CtaButton';
import {CUSTOMER, type, WASHER} from '../Navigation/NavigationService';
console.log('user type',global.usertype)
const ChooseScreen = ({navigation}) => (
  
  <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{flex: 1}}>
      <ImageBackground style={{width: '100%', height: '100%', flex: 1}} source={require('../../Assets/bg_img.png')}>
        <SafeAreaView />

        <View style={{flex: 1, padding: 21}}>
          <Image style={{width: '100%', height: 95, resizeMode: 'contain', marginTop: 30}} source={require('../../Assets/logo_icon.png')}></Image>
          <Image style={{width: '100%', height: 65, resizeMode: 'contain', marginTop: 5}} source={require('../../Assets/logo2.png')}></Image>
        </View>
        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={{color: '#fff', textAlign: 'center', marginBottom: 5, fontSize: 18, fontWeight: 'normal'}}>Hello Well come to suds-2-U</Text>
          <Text style={{color: '#fff', textAlign: 'center', marginBottom: 5, fontSize: 18, fontWeight: 'bold'}}>Get Started Now</Text>
          <View style={{alignItems: 'center', width: '100%', marginBottom: 5, marginTop: 5, padding: 5}}>
            <CtaButton primary title="Login" onPress={() => { (type.current==3)? navigation.navigate(' LOGIN '): (type.current==2)?navigation.navigate('LOGIN') :null}  }/>
            <CtaButton title="Create an Account" onPress={() =>{ (type.current==3)? navigation.navigate(' REGISTER '):navigation.navigate('REGISTER')} }/>
          </View>
        </View>
        <SafeAreaView />
      </ImageBackground>
    </View>
  </View>
);
export default ChooseScreen;
const styles = StyleSheet.create({
  auth_textInput: {
    paddingLeft: 20,
    alignSelf: 'center',
    width: '93%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    marginTop: 20,
    // backgroundColor: Colors.dark_gray,
  },
  auth_btn: {
    padding: 10,
    backgroundColor: '#4193F7',
    borderRadius: 25,
    marginTop: 5,
    width: '90%',
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
  },
  auth_btn2: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 5,
    width: '90%',
    height: 50,
    marginTop: 10,
    justifyContent: 'center',
  },
});
