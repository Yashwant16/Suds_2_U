import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, ImageBackground,SafeAreaView } from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card_no: "",
      card_name: '',
      expire_month: '',
      expire_year: '',
      cvv_no: '',
      password: "",
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
          <SafeAreaView />
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(card_no) => this.setState({ card_no })}
              value={this.state.card_no}
              placeholder="Card Number"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(card_name) => this.setState({ card_name })}
              value={this.state.card_name}
              placeholder="Name on Card"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '93%' }}>
              <TextInput
                style={[styles.short_textInput,]}
                onChangeText={(expire_month) => this.setState({ expire_month })}
                value={this.state.expire_month}
                placeholder="Expire Month"

                placeholderTextColor={Colors.text_color}
                autoCapitalize='none' />
              <TextInput
                style={[styles.short_textInput,]}
                onChangeText={(expire_year) => this.setState({ expire_year })}
                value={this.state.expire_year}
                placeholder="Expire Year"

                placeholderTextColor={Colors.text_color}
                autoCapitalize='none' />
            </View>
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(cvv_no) => this.setState({ cvv_no })}
              value={this.state.cvv_no}
              placeholder="CVV Number"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TouchableOpacity
              elevation={5}
              onPress={() => { }}
              style={styles.auth_btn}
              underlayColor='gray'
              activeOpacity={0.8}
            // disabled={this.state.disableBtn}
            >
              <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Submit </Text>
            </TouchableOpacity>
          </View>
          <SafeAreaView />
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    height: 50,
    color: '#000',
    borderRadius: 25, paddingLeft: 15,
    marginTop: 10,

  },
  short_textInput: {

    alignSelf: 'center',
    width: '46%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    height: 50,
    color: '#000',
    borderRadius: 25, paddingLeft: 15,
    marginTop: 10,

  },
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.blue_color,
    borderRadius: 5,
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
})

