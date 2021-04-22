import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CustomHeader from '../Components/CustomHeader';
import {Platform} from 'react-native';
import MapView from 'react-native-maps';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Review & Ratings',
    drawerIcon: ({tintColor}) => (
      <View>
        <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/review.png')} />
      </View>
    ),
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <CustomHeader title="WELCOME" onLeftButtonPress={() => this.props.navigation.openDrawer()} leftIconSource={require('../../Assets/menu.png')} />
        <MapView
          style={{width: '100%', flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        {/* <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={82}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff' }} source={require('../../Assets/menu.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>Home</Text>
                    }
                /> */}
        {/* <SafeAreaView />
        <Button onPress={() => this.props.navigation.goBack()} title="Go back home" /> */}
        <View style={{backgroundColor: '#efefef', padding: 10}}>
          <Text style={{fontSize: 18, paddingBottom: 5}}>TODAY'S TRIP</Text>
          {/* <View style={{backgroundColor: '#fff', borderRadius: 2}}></View> */}
          <View style={{flexDirection: 'row', backgroundColor: '#fff', borderRadius: 4, padding: 10, marginBottom: 10}}>
            <Image style={{height: 48, width: 48, marginRight: 10, padding: 10, borderRadius: 35}} source={require('../../Assets/car-steering-wheel.png')} />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={{marginHorizontal: 5, fontSize: 16}}>8 Jobs Done</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                  <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/coupon.png')} />
                  <Text style={{marginHorizontal: 3, color: '#999'}}>8 hours online</Text>
                </View>
              </View>
              <View style={{}}>
                <Text style={{marginHorizontal: 5, fontWeight: 'bold', textAlign: 'right'}}>$8.5</Text>
                <Text style={{marginHorizontal: 5, color: '#aaa', textAlign: 'right', marginTop: 5}}>Earned</Text>
              </View>
            </View>
          </View>
        </View>
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
