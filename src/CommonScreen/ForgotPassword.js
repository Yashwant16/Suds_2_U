import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Colors from '../../Constants/Colors';
import CustomHeader from '../Components/CustomHeader';
import CtaButton from '../Components/CtaButton';
import InputsContainer from '../Components/InputsContainer';
import CustomInput from '../Components/CustomInput';

class ForgotPassword extends React.Component {
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
          flexDirection: 'column',
        }}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <ImageBackground
            style={{width: '100%', height: '100%', flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}
            source={require('../../Assets/imageBG.png')}>
            <Image style={{width: 200, height: 200, tintColor: '#fff', alignSelf: 'center'}} source={require('../../Assets/padlock.png')} />
            <InputsContainer>
              <View style={{width: '100%', padding: 7, alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
                <Text style={{fontWeight: 'bold', marginTop: 5, fontSize: 18}}>Reset Your Password</Text>
                <Text style={{textAlign: 'center', marginTop: 5, marginBottom: 5, color: '#999', lineHeight: 22}}>
                  Please enter your username or email address you will receive a link to create a new password via email
                </Text>
                <View style={{width: '94%', height: 1, backgroundColor: '#ddd', marginVertical: 5}} />
              </View>
              <CustomInput
                label="USER NAME or EMAIL"
                iconSource={require(`../../Assets/icon/email.png`)}
                setState={({text}) => this.setState({email: text})}
                state={this.state.email}
              />
              <CtaButton primary title="Submit" />
            </InputsContainer>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default ForgotPassword;
