import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native';
export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {

    drawerLabel: 'Edit Password',
    drawerIcon: ({ tintColor }) => (
      <View>

        <Image style={{ width: 25, height: 25, tintColor: '#FFF' }} source={require('../../Assets/pencil.png')} />
      </View>
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      mobbile_no:'',preferredmethod:'', completeaddress:'',city:'',state:'',hourlyrate:'',
      email: "",
      password: "",    country: ''

    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          height={79}
          containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
          backgroundColor={Colors.blue_color}
          placement={"left"}
          leftComponent={
            <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
              <Image style={{ width: 25, height: 27, tintColor: '#fff', marginTop: 5, }} source={require('../../Assets/back_arrow.png')} />

            </TouchableOpacity>
          }
          centerComponent={
            <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>EDIT PROFILE</Text>
          }
        />
 
        <ImageBackground style={{ width: '100%', flex: 1, height: '100%', }} source={require('../../Assets/bg_img.png')}>
        <ScrollView>
          <View style={{ backgroundColor: Colors.blue_color, width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor: '#fff', borderWidth: 3, width: 70, height: 70, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
              <Image style={{ width: 25, height: 27, tintColor: '#fff', alignSelf: 'center' }} source={require('../../Assets/camera.png')} />

            </View>
          </View>
          <View style={{ padding: 18, alignItems: 'center' }}>
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(mobbile_no) => this.setState({ mobbile_no })}
              value={this.state.mobbile_no}
              placeholder="Phone Number"
              // secureTextEntry='true'
              keyboardType='phone-pad'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(preferredmethod) => this.setState({ preferredmethod })}
              value={this.state.preferredmethod}
              placeholder="Preferred method of contact"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(completeaddress) => this.setState({ completeaddress })}
              value={this.state.completeaddress}
              placeholder="Complete Address"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(city) => this.setState({ city })}
              value={this.state.city}
              placeholder="City"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(state) => this.setState({ state })}
              value={this.state.state}
              placeholder="State"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(country) => this.setState({ country })}
              value={this.state.country}
              placeholder="Country"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(hourlyrate) => this.setState({ hourlyrate })}
              value={this.state.hourlyrate}
              placeholder="Hourly Rate"
              // secureTextEntry='true'
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

              <TouchableOpacity style={styles.auth_btn} >
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Continue</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
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
const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    // borderWidth: 1,
    fontSize: 16,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 25,
    color: '#000',
    marginTop: 10, paddingLeft: 20, fontWeight: 'bold'

  },
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.buttom_color,
    borderRadius: 25,
    width: '90%',
    height: 50,
    justifyContent: 'center',alignItems:'center'
  },
})