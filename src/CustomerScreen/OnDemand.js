
import {

  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';

//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';


import React from 'react';
import {Text, View, Image, StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Colors from '../../Constants/Colors';
import { Header, Icon, Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
export default class OnJob extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
          <View>
            <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/home.png')} />
          </View>
        ),
      };
    
      constructor(props) {
        super(props);
        this.state = {arrived: false,
            currentLongitude:'-122.406417',
            currentLatitude:'37.785834',
            locationStatus:''

        };
      }
    componentWillMount =()=>{
        this.getOneTimeLocation()
    }

      useEffect =() => {
        requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
           this.getOneTimeLocation();
          this.subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                }
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
               this. getOneTimeLocation();
               this. subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }
    
       getOneTimeLocation = () => {
        // setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
          //Will give you the current location
          (position) => {
            // setLocationStatus('You are Here');
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
             this.setState({ currentLongitude:currentLongitude
            })
            console.log('longitude:',currentLongitude)
            //Setting state Longitude to re re-render the Longitude Text
             this.setState({  currentLatitude:currentLatitude})
             console.log('latitude:',currentLatitude)
            //Setting state Latitude to re re-render the Longitude Text
          },
          (error) => {
            // setLocationStatus(error.message);
          },
          { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
        );
      };
    
       subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            // setLocationStatus('You are Here');
            //Will give you the location on location change
            console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            this.setState({ currentLongitude:currentLongitude
            })
            console.log('latitude:',currentLongitude)
            //Setting state Longitude to re re-render the Longitude Text
             this.setState({  currentLatitude:currentLatitude})
             console.log('latitude:',currentLatitude)
            //Setting state Latitude to re re-render the Longitude Text
          },
          (error) => {
            // setLocationStatus(error.message);
          },
          { enableHighAccuracy: false, maximumAge: 1000 }
        );
      };
    

      
    render(){
  return (
  <View style={{flex:1}}>
          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectAddOns') }}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>ON-DEMAND SERVICES</Text>
                    }
                />
      <MapView
        style={{flex: 1}}
        initialRegion={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
                <View style={styles.jobDestination}>
        <View style={{flex: 1, flexDirection: 'row', }}>
          <Image style={{height: 25, width: 25, marginRight: 15, padding: 0, alignSelf: 'center', tintColor: '#999',marginLeft:10}} source={require('../../Assets/search.png')} />
        
            <View style={{alignItems: 'center', paddingTop:15,}}>
              <Text style={{marginHorizontal: 5, fontSize: 14, color: Colors.dark_orange,fontWeight:'bold',marginLeft:20}}>PLEASE ENTER YOUR SERVICE ADDRESS</Text>
              <Text style={{marginHorizontal: 5, fontSize: 14, color: '#444'}}>994 Colin Gateway Suite 981</Text>
            </View>
            {/* <Image style={{height: 25, width: 25, marginRight: 10, padding: 10, alignSelf: 'center', tintColor: '#444'}} source={require('../../Assets/location.png')} /> */}
          </View>
        </View>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Your Live Location"
          
        //   description="this is a marker example"
        >
                      <Image style={{height: 40, width: 38, marginRight: 15, padding: 0, alignSelf: 'center', tintColor: Colors.blue_color,marginLeft:10}} source={require('../../Assets/livelocation.png')} />
        </Marker>

        <TouchableOpacity 
   onPress={() => {this.getOneTimeLocation();}}
        activeOpacity={0.7}
        style={{justifyContent:'flex-end',alignSelf:'flex-end',flex:1,padding:10,}}>
            <View style={{width:45,height:45,borderRadius:22,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',shadowOpacity:0.5}}>
        <Image style={{ width: 25, height: 25, tintColor: '#000',  }} source={require('../../Assets/getlive.png')} />
        </View>
        </TouchableOpacity>
      </MapView>
      <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate(''); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>CONFIRM LOCATION</Text>

                        </TouchableOpacity>
      </View>
  );
};

}

const styles = StyleSheet.create({
    customerDetails: {
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#777',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
    },
  
    jobDestination: {
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',padding:5,
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 4,
    //   padding: 10,
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
    },
    auth_textInput: {
  
      alignSelf: 'center',
      width: '55%',
      // borderWidth: 1,
      marginLeft:5,
      marginRight:15,
      borderBottomWidth: 0,
      height: 40,
      color: Colors.text_color,
      marginTop: 5,
  
  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:Colors.blue_color,

    width: '100%',
    height: 65,
    justifyContent: 'center',
},
  });
  