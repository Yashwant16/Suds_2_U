import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import MapView from 'react-native-maps';
import CtaButton from '../Components/CtaButton';
import Colors from '../../Constants/Colors';
import { Header, Icon, Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
export default class OnJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrived: false };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <MapView
          style={{ width: '100%', flex: 1 }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        </MapView>

        <View style={styles.jobDestination}>
          <Text style={{fontWeight : 'bold', color : 'orange', fontSize : 18}} >JOB DESTINATION</Text>
          <Text>Formatted Address</Text>
        </View>

        <View style={{ backgroundColor: '#efefef', padding: 10, paddingBottom: 0 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10, alignSelf: 'center' }}>
            <Image style={{ width: 25, height: 25, tintColor: '#24AE88', }} source={require('../../Assets/checkdark.png')} />
            <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', textAlign: 'center', marginLeft: 5 }}>Booking Confirm</Text>
          </View>
          <View style={{
            borderWidth: 1, borderColor: '#ccc',
            width: '95%', backgroundColor: '#fff', alignSelf: 'center',
            marginBottom: 22, shadowOpacity: 0.8, shadowColor: '#aaa', justifyContent: 'center', borderRadius: 15
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,alignItems :'center' }}>
              <Text>NY16FT 8206 (White Swift) </Text>
              <Text style={{ color: 'yellow', backgroundColor: '#000', padding: 4, fontWeight: 'bold', borderRadius: 5 }}> 0.5 min </Text>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('../../Assets/images.jpeg')} />
              <Text style={{ padding: 4, marginLeft: 5, fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Donnie McC.</Text>

              <Text style={{ padding: 4, marginLeft: 5, fontWeight: 'bold', fontSize: 14, alignSelf: 'center' }}>4.5</Text>

            </View>

            <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <TouchableOpacity style={{ flexDirection: 'row', padding: 10, width: '50%' }}>
                <Image style={{ width: 20, height: 20, tintColor: '#0EFF74', }} source={require('../../Assets/call.png')} />
                <Text style={{ padding: 4, marginLeft: 5, fontSize: 12 }}>CALL WASHER </Text>
              </TouchableOpacity>
              <View style={{ width: 1, height: 45, backgroundColor: '#aaa' }} />
              <TouchableOpacity style={{ flexDirection: 'row', padding: 10, width: '50%' }}>
                <Image style={{ width: 20, height: 20, tintColor: 'red', }} source={require('../../Assets/error.png')} />
                <Text style={{ padding: 4, marginLeft: 5, fontSize: 12 }}>CANCEL RIDE </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: '#aaa' }} />
            <View style={{ flexDirection: 'row', padding: 5, marginLeft: 10, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#445F98', width: 45, height: 50, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginLeft: 0, margin: 7 }}>
                <Image style={{ width: 40, height: 40, tintColor: '#FFF', }} source={require('../../Assets/smartphone.png')} />
              </View>

              <TextInput
                style={[styles.auth_textInput,]}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                placeholder="Type your message"
                placeholderTextColor={Colors.text_color}
                autoCapitalize='none' />
              <TouchableOpacity
                onPress={() => { navigation.navigate('Work In Progress'); }}>

                <Text style={{ color: '#445F98', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customerDetails: {
    shadowOffset: { width: 1, height: 1 },
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
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  auth_textInput: {

    alignSelf: 'center',
    width: '55%',
    // borderWidth: 1,
    marginLeft: 5,
    marginRight: 15,
    borderBottomWidth: 0,
    height: 40,
    color: Colors.text_color,
    marginTop: 5,

  },
});
