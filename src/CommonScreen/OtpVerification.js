import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import OTPTextView from 'react-native-otp-textinput';
import {ScrollView} from 'react-native';
import LinkButton from '../Components/LinkButton';
import CtaButton from '../Components/CtaButton';

class OTPverification extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <ScrollView>
            <ImageBackground style={{width: '100%', height: '67%', flex: 1}} source={require('../../Assets/imageBG.png')}>
              <SafeAreaView />
              <Image style={{width: '100%', height: 95, resizeMode: 'contain', marginTop: 30}} source={require('../../Assets/logo_icon.png')}></Image>
              <Image style={{width: '100%', height: 65, resizeMode: 'contain', marginTop: 5}} source={require('../../Assets/logo2.png')}></Image>
              <View style={{flex: 1, justifyContent: 'flex-end', padding: 21, alignItems: 'center'}}>
                <View style={styles.inputs_container}>
                  <Text style={{fontWeight: 'bold', marginTop: 5, color: '#000', fontSize: 16, marginBottom: 8}}>Enter OTP</Text>
                  <Text style={{marginTop: 5, color: '#555', fontSize: 16, marginBottom: 8, textAlign: 'center'}}>Enter 4 digits OTP Code that you have received on phone.</Text>
                  <OTPTextView handleTextChange={e => {}} containerStyle={styles.textInputContainer} textInputStyle={[styles.roundedTextInput, {borderRadius: 10}]} tintColor={Colors.blue_color} />
                  <Text style={{marginTop: 5, color: '#999', fontSize: 16, marginBottom: 8}}>
                    Dont's have the OTP? <Text style={{fontWeight: 'bold', marginTop: 5, color: 'red', fontSize: 16, marginBottom: 8}}>RESENT OTP</Text>
                  </Text>

                  <CtaButton primary title="Confirm OTP" onPress={() => this.props.navigation.navigate('COMPLETE PROFILE')} />
                  <LinkButton title="Login with Password" />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('REGISTER');
                  }}
                  style={{marginTop: 15, marginBottom: 15}}
                  underlayColor="gray"
                  activeOpacity={0.8}
                  // disabled={this.state.disableBtn}
                >
                  <Text style={{fontSize: 16, textAlign: 'center', color: '#000'}}>
                    Don't have an account - <Text style={{color: '#4193F7', fontWeight: 'bold', fontSize: 16}}>Sign Up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default OTPverification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  inputs_container: {
    width: '96%',
    padding: 15,
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

  textInputContainer: {
    marginBottom: 20,
    marginTop: 5,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderBottomWidth: 2,
    borderWidth: 2,
  },
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.buttom_color,
    borderRadius: 25,
    width: '90%',
    height: 50,
    justifyContent: 'center',
  },
});
