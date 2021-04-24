import React, { useState } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import MapView from 'react-native-maps';
import CtaButton from '../Components/CtaButton';
import Colors from '../../Constants/Colors';

const OnJob = ({navigation})=> {
  const [arrived, setArrived] = useState(false)

  const onPress = () => {
    if (arrived)navigation.navigate('WORK IN PROGRESS');
    else setArrived(true);
  };

    return (
      <View style={{flex: 1, position: 'relative'}}>

        <MapView
          style={{width: '100%', flex: 1}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style={styles.jobDestination}>
          <Image
            style={{height: 25, width: 25, marginRight: 10, padding: 10, alignSelf: 'center', tintColor: '#999'}}
            source={require('../../Assets/help.png')}
          />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{marginHorizontal: 5, fontSize: 16, color: Colors.dark_orange}}>JOB DESTINATION</Text>
              <Text style={{marginHorizontal: 5, fontSize: 16, color: '#444'}}>994 Colin Gateway Suite 981</Text>
            </View>
            <Image
              style={{height: 25, width: 25, marginRight: 10, padding: 10, alignSelf: 'center', tintColor: '#444'}}
              source={require('../../Assets/location.png')}
            />
          </View>
        </View>

        <View style={{backgroundColor: '#efefef', padding: 10}}>
          <Text style={{fontSize: 18, paddingBottom: 5}}>CUSTOMER INFORMATION</Text>
          <View style={styles.customerDetails}>
            <Image
              style={{height: 48, width: 48, marginRight: 10, padding: 10, borderRadius: 35}}
              source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
            />
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{}}>
                <Text style={{marginHorizontal: 5, fontSize: 16}}>James</Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                  <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/coupon.png')} />
                  <Text style={{marginHorizontal: 3, color: '#999'}}>5:30 pm</Text>
                </View>
              </View>
              <View style={{}}>
                <Text style={{marginHorizontal: 5, fontWeight: 'bold', textAlign: 'right'}}>1.5 km</Text>
                <Text style={{marginHorizontal: 5, color: '#aaa', textAlign: 'right', marginTop: 5}}>Distance</Text>
              </View>
            </View>
          </View>
          <CtaButton
            onPress={onPress}
            primary
            title={arrived ? 'ARRIVED & START JOB' : 'ON MY WAY'}
            style={{borderRadius: 5, backgroundColor: arrived ? Colors.green : '#226', padding: 16, width: '100%'}}
          />
        </View>
      </View>
    );
  
}

export default OnJob

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
    shadowColor: '#333',
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
});
