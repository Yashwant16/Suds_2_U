import React from 'react';
import {StyleSheet, Button, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native';

import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {MoreHeader} from '../../Components/CustomeHeader';
import {ScrollView} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CtaButton from '../Components/CtaButton';
import LinkButton from '../Components/LinkButton';
import CustomHeader from '../Components/CustomHeader';
export default class SignUpUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <CustomHeader title="LOGIN" onLeftButtonPress={() => this.props.navigation.goBack()} />

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

                  <CustomInput label="EMAIL ADDRESS" iconSource={require(`../../Assets/icon/email.png`)} setState={({text}) => this.setState({email: text})} state={this.state.email} />
                  <CustomInput label="PASSWORD" iconSource={require(`../../Assets/icon/password.png`)} setState={({text}) => this.setState({password: text})} state={this.state.password} />

                  <CtaButton title="Sign In" primary onPress={() => this.props.navigation.navigate('DriverApp')} />

                  <LinkButton title="Forgot Your Password" onPress={() => this.props.navigation.navigate('ForgotPassword')} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('SignUp');
                  }}
                  style={{marginTop: 10, marginBottom: 5}}
                  underlayColor="gray"
                  activeOpacity={0.8}
                  // disabled={this.state.disableBtn}
                >
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
  }
}

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
