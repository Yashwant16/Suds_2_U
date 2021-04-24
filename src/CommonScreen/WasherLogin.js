import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';

import {ScrollView} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CtaButton from '../Components/CtaButton';
import LinkButton from '../Components/LinkButton';
import { changeStack } from '../Navigation/NavigationService';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <ImageBackground style={{width: '100%', flex: 1, height: '100%'}} source={require('../../Assets/imageBG.png')}>
          <SafeAreaView />
          <ScrollView>
            <Image style={{width: '100%', height: 95, resizeMode: 'contain', marginTop: 30}} source={require('../../Assets/logo_icon.png')}></Image>
            <Image style={{width: '100%', height: 65, resizeMode: 'contain', marginTop: 5}} source={require('../../Assets/logo2.png')}></Image>
            <View style={{padding: 21, justifyContent: 'flex-end', flex: 1}}>
              <View style={styles.inputs_container}>
                <Text style={{fontWeight: 'bold', marginTop: 10}}>Hello</Text>
                <Text style={{padding: 5}}>Sign into your ccount</Text>

                <CustomInput
                  label="EMAIL ADDRESS"
                  iconSource={require(`../../Assets/icon/email.png`)}
                  setState={({text}) => setEmail(text)}
                  state={email}
                />
                <CustomInput
                  label="PASSWORD"
                  iconSource={require(`../../Assets/icon/password.png`)}
                  setState={({text}) => setPassword(text)}
                  state={password}
                />

                <CtaButton title="Sign In" primary onPress={() => changeStack("DriverHomeStack")} />

                <LinkButton title="Forgot Your Password" onPress={() => navigation.navigate('FORGOT PASSWORD')} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('REGISTER')}
                style={{marginTop: 10, marginBottom: 5}}
                underlayColor="gray"
                activeOpacity={0.8}>
                <Text style={{fontSize: 14, textAlign: 'center', color: '#000', fontWeight: 'bold'}}>
                  Don't have an account <Text style={{color: '#4193F7', fontWeight: 'bold', fontSize: 16}}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputs_container: {
    width: '96%',
    // height: 270,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent: 'flex-end',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    borderRadius: 15,
    elevation: 5,
  },
});
