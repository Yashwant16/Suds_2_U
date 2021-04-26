import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, Dimensions, SafeAreaView } from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import { ImageBackground } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const nav = React.createRef(null);
export default class MyNotificationsScreen extends React.Component {
  constructor(props){
    super(props)
    nav.current = props.navigation;
  }
  static navigationOptions = {

    drawerLabel: 'DashBoard',
    drawerIcon: ({ tintColor }) => (
      <View>

        <Image style={{ width: 25, height: 25, tintColor: '#FFF' }} source={require('../../Assets/home.png')} />
      </View>
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />

        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          height={79}
          containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
          backgroundColor={Colors.blue_color}
          placement={"left"}
          leftComponent={
            <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
              <Image style={{ width: 25, height: 25, tintColor: '#fff', marginTop: 4 }} source={require('../../Assets/menu.png')} />

            </TouchableOpacity>
          }
          centerComponent={
            <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>DASHBOARD</Text>
          }
        />
        <SafeAreaView />


        <View style={{ width: '100%', height: 40, backgroundColor: '#e28c39', flexDirection: 'row' }}>
          <Text style={{ color: '#fff', margin: 6, marginTop: 10,fontSize:16 ,fontWeight:'600' }}>Rewards</Text>

          <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
        </View>
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('../../Assets/images.jpeg')}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',  padding: 21 }}>
            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#e23a53', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 25, height: 25, tintColor: '#fff', marginTop: 5, margin: 2 }} source={require('../../Assets/pencil.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#60d0de', alignItems: 'center',justifyContent:'center' }}>
              <Image style={{ width: 25, height: 25, tintColor: '#fff', marginTop: 5, margin: 2 }} source={require('../../Assets/document.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', }}>
            <ImageBackground style={{ width: '100%', height: 170, alignItems: 'center', marginBottom:-1 }} source={require('../../Assets/shape.png')} >

              <Text style={{ color: '#fff', marginTop: 20, fontWeight: '900' }}> <Text style={{ textAlign: 'center', color: '#fff', marginTop: 10, fontSize: 16 }}>Wellcome, </Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Randy Orton</Text></Text>

              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image style={{ width: 17, height: 17, tintColor: '#fff', }} source={require('../../Assets/location.png')} />
                <Text style={{ color: '#fff', fontWeight: 'bold' }}> 321 Main Street, san -USA</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', width: '100%',}}>
                <TouchableOpacity
                  elevation={5}
                  onPress={() => { this.props.navigation.navigate('Login'); }}
                  style={styles.auth_btn}
                  underlayColor='gray'
                  activeOpacity={0.8}
                // disabled={this.state.disableBtn}
                >
                  <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>On-Demand</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  elevation={5}
                  onPress={() => { this.props.navigation.navigate('BookWasher_Now'); }}
                  style={styles.auth_btn}
                  underlayColor='gray'
                  activeOpacity={0.8}
                // disabled={this.state.disableBtn}
                >
                  <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Schedule</Text>
                </TouchableOpacity>

              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    color: Colors.text_color,
    marginTop: 10,

  },
  auth_btn: {
    marginTop: 16,
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#f5c946',
    borderRadius: 10,
    width: '35%',
    height: 50,
    justifyContent: 'center',
    margin: 5
  },
})