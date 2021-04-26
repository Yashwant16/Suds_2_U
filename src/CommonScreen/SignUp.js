import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native';

import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {MoreHeader} from '../../Components/CustomeHeader';
import {ScrollView} from 'react-native';
import CtaButton from '../Components/CtaButton';
import CustomInput from '../Components/CustomInput';
import LinkButton from '../Components/LinkButton';
import CustomHeader from '../Components/CustomHeader';
export default class SignUpUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
        }}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <CustomHeader title="REGISTER" onLeftButtonPress={() => this.props.navigation.goBack()} />

        <View style={{flex: 1}}>
          <ScrollView>
            <ImageBackground style={{width: '100%', height: '100%', flex: 1}} source={require('../../Assets/imageBG.png')}>
              <SafeAreaView />
              <Image style={{width: '100%', height: 95, resizeMode: 'contain', marginTop: 30}} source={require('../../Assets/logo_icon.png')}></Image>
              <Image style={{width: '100%', height: 65, resizeMode: 'contain', marginTop: 5}} source={require('../../Assets/logo2.png')}></Image>
              <View style={{padding: 21, alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
                <Text style={{fontWeight: 'bold', marginTop: 5, color: '#fff', fontSize: 16, marginBottom: 8}}>Create an Account</Text>
                <View style={styles.inputs_container}>
                  <CustomInput label="FULL NAME" iconSource={require(`../../Assets/icon/user.png`)} setState={({text}) => this.setState({name: text})} state={this.state.name} />
                  <CustomInput label="EMAIL ADDRESS" iconSource={require(`../../Assets/icon/email.png`)} setState={({text}) => this.setState({email: text})} state={this.state.email} />
                  <CustomInput label="MOBILE NUMEBR" iconSource={require(`../../Assets/icon/cell-phone.png`)} setState={({text}) => this.setState({mobile: text})} state={this.state.mobile} />
                  <CustomInput label="PASSWORD" iconSource={require(`../../Assets/icon/password.png`)} setState={({text}) => this.setState({password: text})} state={this.state.password} />

                  <CtaButton title="Continue" primary onPress={() => this.props.navigation.navigate('OtpVerification', {type: this.props.navigation.getParam('type')})} />
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}
                  style={{marginTop: 10, marginBottom: 5}}
                  underlayColor="gray"
                  activeOpacity={0.8}
                  // disabled={this.state.disableBtn}
                >
                  <Text style={{textAlign: 'center', color: '#000', fontSize: 16}}>
                    Already have an account - <Text style={{color: '#4193F7', fontWeight: 'bold', fontSize: 16}}>Sign In</Text>
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

const styles = StyleSheet.create({
  inputs_container: {
    width: '96%',
    // height: 350,

    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    borderRadius: 15,
    elevation: 5,
    paddingVertical: 16,
  },
});