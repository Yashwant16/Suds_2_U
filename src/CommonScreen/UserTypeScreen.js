import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import {MoreHeader} from '../../Components/CustomeHeader';
// import { SubmitButton } from '../src/components/Buttons';
// import Fonts from '../../constants/Fonts';
export default class SignUpUser2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: '',
      password: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

        <MoreHeader title="GET STARTED NOW" />

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
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Continue as a
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: 5,
                  marginTop: 5,
                  padding: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ChooseScreen', {
                      type: 'CUSTOMER',
                    });
                  }}
                  style={styles.auth_btn}
                  underlayColor="gray"
                  activeOpacity={0.8}
                  elevation={5}
                  // disabled={this.state.disableBtn}
                >
                  <Text style={{fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ChooseScreen', {
                      type: 'Washer',
                    });
                  }}
                  style={styles.auth_btn2}
                  underlayColor="gray"
                  activeOpacity={0.8}
                  elevation={5}
                  // disabled={this.state.disableBtn}
                >
                  <Text style={{fontSize: 18, textAlign: 'center', color: '#333333', fontWeight: 'bold'}}>Car Washer</Text>
                </TouchableOpacity>
              </View>
            </View>
            <SafeAreaView />
          </ImageBackground>
        </View>
      </View>
    );
  }
}
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
