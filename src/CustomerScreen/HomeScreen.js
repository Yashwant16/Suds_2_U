import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';
import { ImageBackground } from 'react-native';
import { bookingType, ON_DEMAND, SCHEDULED } from '../Navigation/NavigationService';
import { AuthContext } from '../Providers/AuthProvider';
import { getCurrentAddress } from '../Services/LocationServices';
import { launchImageLibrary } from 'react-native-image-picker';
import { partialProfileUrl } from '../Providers';
import { AppContext } from '../Providers/AppProvider';
import LoadingView from '../Components/LoadingView';
export const nav = React.createRef(null);
export default HomeScreen = ({ navigation }) => {

  const { userData, updateUserLocation,changeImage } = useContext(AuthContext)
  const {setLoading} = useContext(AppContext)
  const [currentAddress, setCurrentAddress] = useState('Getting address...')

  useEffect(() => {
    nav.current = navigation
    updateUserLocation()
    getCurrentAddress().then(address => setCurrentAddress(address))
  }, [])

  const imageCallBack = async (res)=>{
    console.log(res)
    if(res.didCancel) return
    setLoading(true)
    await changeImage(res.assets[0])
    setLoading(false)
  }

  return (
    <View style={{ flex: 1, }}>
      <LoadingView/>
      <View style={{ width: '100%', height: 40, backgroundColor: '#e28c39', flexDirection: 'row' }}>
        <Text style={{ color: '#fff', margin: 6, marginTop: 10, fontSize: 16, fontWeight: '600' }}>Rewards</Text>

        <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
        <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
        <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
        <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
      </View>
      <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={{ uri: userData.image ? partialProfileUrl + userData.image : 'https://cdn2.vectorstock.com/i/1000x1000/34/76/default-placeholder-fitness-trainer-in-a-t-shirt-vector-20773476.jpg' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 21 }}>
          {/* <TouchableOpacity onPress={() => launchImageLibrary({}, imageCallBack)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#e23a53', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginTop: 5, margin: 2 }} source={require('../../Assets/pencil.png')} />
          </TouchableOpacity> */}
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', }}>
          <ImageBackground style={{ width: '100%', height: 170, alignItems: 'center', marginBottom: -1 }} source={require('../../Assets/shape.png')} >

            <Text style={{ color: '#fff', marginTop: 20, fontWeight: '900' }}> <Text style={{ textAlign: 'center', color: '#fff', marginTop: 10, fontSize: 16 }}>Wellcome, </Text><Text style={{ fontSize: 20, fontWeight: 'bold' }}>{userData.name}</Text></Text>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Image style={{ width: 17, height: 17, tintColor: '#fff', }} source={require('../../Assets/location.png')} />
              <Text numberOfLines={1} style={{ color: '#fff', fontWeight: 'bold', width: '70%' }}>{currentAddress}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', width: '100%', }}>
              <TouchableOpacity
                elevation={5}
                onPress={() => {
                  navigation.navigate('OnDemand', { bookingType: ON_DEMAND, headerTitle: 'On Demand Services' })
                  console.log(bookingType)
                }}
                style={styles.auth_btn}
                underlayColor='gray'
                activeOpacity={0.8}>
                <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>On-Demand</Text>
              </TouchableOpacity>

              <TouchableOpacity
                elevation={5}
                onPress={() => {
                  navigation.navigate('OnDemand', { bookingType: SCHEDULED, headerTitle: 'Schedule a booking' })
                  console.log(bookingType)
                }}
                style={styles.auth_btn}
                underlayColor='gray'
                activeOpacity={0.8} >
                <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Schedule</Text>
              </TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
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