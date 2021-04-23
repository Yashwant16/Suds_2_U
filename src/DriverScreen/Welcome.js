import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import MapView from 'react-native-maps';
import NewJobModal from '../Components/NewJobModal';
import OnJob from './OnJob';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <View>
        <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/home.png')} />
      </View>
    ),
  };

  render() {
    return (
      <View style={{flex:1}}>
        {/* <CustomHeader title="WELCOME" onLeftButtonPress={() => this.props.navigation.openDrawer()} leftIconSource={require('../../Assets/menu.png')} /> */}
        <WelcomContainer />
      </View>
    );
  }
}

class WelcomeScreen extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({tintColor}) => (
  //     <View>
  //       <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/home.png')} />
  //     </View>
  //   ),
  // };

  constructor(props) {
    super(props);
    this.state = {modalVisible: true};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{width: '100%', flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style={{backgroundColor: '#efefef', padding: 10}}>
          <Text style={{fontSize: 18, paddingBottom: 5}}>TODAY'S TRIP</Text>
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
        <NewJobModal accept={() => this.props.navigation.navigate('OnJob')} modalVisible={this.state.modalVisible} hide={() => this.setState({modalVisible: false})} />
      </View>
    );
  }
}
const Welcome = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnJob: {
    screen: OnJob,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const WelcomContainer = createAppContainer(Welcome);
// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });
