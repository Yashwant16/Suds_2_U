import React from 'react';
import {Text, View, Image, StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import MapView from 'react-native-maps';
import CtaButton from '../Components/CtaButton';
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
    this.state = {arrived: false};
  }

  render() {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        {/* <CustomHeader title="ON JOB" onLeftButtonPress={() => this.props.navigation.goBack()} /> */}
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
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>CAR WHASHER IS ON THE WAY</Text>
                    }
                />
        <MapView
          style={{width: '100%', flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
       >

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
        </MapView>
        <View style={{backgroundColor: '#efefef', padding: 10,paddingBottom:0}}>
        <View style={{flexDirection:'row',marginBottom:10,alignSelf:'center'}}>
<Image style={{ width: 25, height: 25, tintColor: '#24AE88',  }} source={require('../../Assets/checkdark.png')} />
<Text style={{fontSize:16,marginVertical:1,fontWeight:'bold',textAlign:'center',marginLeft:5}}>Booking Confirm</Text>
</View>
        <View style={{width:'90%',height:240,backgroundColor:'#fff',alignSelf:'center',
        marginBottom:30,shadowOpacity:0.8,shadowColor:'#aaa',justifyContent:'center',borderRadius:15}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text>NY16FT 8206 (White Swift) </Text>
        <Text style={{color:'yellow',backgroundColor:'#000',padding:4,fontWeight:'bold'}}> 0.5 min </Text>
    </View>
    <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',padding:10}}>
    <Image style={{ width: 40, height: 40, borderRadius:20 }} source={require('../../Assets/images.jpeg')} />
        <Text style={{padding:4,marginLeft:5,fontWeight:'bold',fontSize:18,alignSelf:'center'}}>Donnie McC.</Text>
        <Image style={{ width: 20, height: 20, tintColor:Colors.dark_orange,alignSelf:'center' ,marginLeft:15 }} source={require('../../Assets/star.png')} />
        <Image style={{ width: 20, height: 20, tintColor:Colors.dark_orange,alignSelf:'center' ,marginLeft:3 }} source={require('../../Assets/star.png')} />
        <Image style={{ width: 20, height: 20, tintColor:Colors.dark_orange,alignSelf:'center' ,marginLeft:3 }} source={require('../../Assets/star.png')} />
        <Image style={{ width: 20, height: 20, tintColor:'gray',alignSelf:'center' ,marginLeft:3 }} source={require('../../Assets/star.png')} />
       <Text style={{padding:4,marginLeft:5,fontWeight:'bold',fontSize:14,alignSelf:'center'}}>4.5</Text>
   
    </View>
 
    <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',justifyContent:'center',}}>
    <View style={{flexDirection:'row',padding:10,width:'50%'}}>
    <Image style={{ width: 20, height: 20, tintColor: '#0EFF74',  }} source={require('../../Assets/call.png')} />
        <Text style={{padding:4,marginLeft:5,fontSize:12}}>CALL DRIVER </Text>
    </View>
    <View style={{width:1,height:45,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',padding:10,width:'50%'}}>
    <Image style={{ width: 20, height: 20, tintColor: 'red',  }} source={require('../../Assets/error.png')} />
        <Text style={{padding:4,marginLeft:5,fontSize:12}}>CANCEL RIDE </Text>
    </View>
    </View>
    <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',padding:5,marginLeft:10,alignItems:'center'}}>
      <View style={{backgroundColor:'#445F98',width:45,height:50,borderRadius:5,justifyContent:'center',alignItems:'center',margin:5}}>
    <Image style={{ width: 40, height: 40, tintColor: '#FFF',  }} source={require('../../Assets/smartphone.png')} />
    </View>
    
    <TextInput
                                        style={[styles.auth_textInput,]}
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                        placeholder="Type your message"
                                        placeholderTextColor={Colors.text_color}
                                        autoCapitalize='none' />

                                        <Text style={{color:'#445F98',fontSize:16,fontWeight:'bold',textAlign:'center'}}>SEND</Text>

    </View>
</View>

 </View>
        <SafeAreaView/>
      </View>
    );
  }
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
    padding: 10,
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
});
