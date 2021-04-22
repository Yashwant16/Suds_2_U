import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CustomHeader from '../Components/CustomHeader';

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Help',
    drawerIcon: ({tintColor}) => (
      <View>
        <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/help.png')} />
      </View>
    ),
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title ="HELP" leftIconSource={require('../../Assets/menu.png')} onLeftButtonPress={()=>this.props.navigation.openDrawer()}/>
        <ImageBackground style={{width: '100%', height: '100%', flex: 1}} source={require('../../Assets/bg_img.png')}>
          <SafeAreaView />

          <Image style={{width: '100%', marginTop: 15, height: 70, resizeMode: 'contain'}} source={require('../../Assets/logo2.png')}></Image>
          <Image style={{width: '100%', height: 140, resizeMode: 'contain', marginTop: 70}} source={require('../../Assets/logo_icon.png')}></Image>
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{color: Colors.blue_color, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>CONNECTS WITH US</Text>

            <Text style={{color: Colors.text_white, fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>supports@sudeo-2-u.com</Text>
            <Text style={{color: Colors.text_white, fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>1800-234-5678</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginBottom: 20}}>
            <Text style={{color: Colors.text_white, fontSize: 15, fontWeight: '500', textAlign: 'center', marginTop: 10}}>@ 2021 SUDS-2-U. All rights reserved</Text>
          </View>
          <SafeAreaView />
        </ImageBackground>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });
