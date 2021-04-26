import React, {useState,useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import MapView from 'react-native-maps';
import NewJobModal from '../Components/NewJobModal';

export const nav = React.createRef(null);
export const routeRef = React.createRef(null);

const WelcomeScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisibility] = useState(false);


  const accept = () => {
    navigation.navigate('ON JOB');
    hide();
  };

  useEffect(()=>{
    nav.current = navigation;
    routeRef.current = route;
    const timeout = setTimeout(()=>setModalVisibility(true), 3000)
    return ()=> clearTimeout(timeout)
  }, [])

  const hide = () => setModalVisibility(false);

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
          <Image
            style={{height: 48, width: 48, marginRight: 10, padding: 10, borderRadius: 35}}
            source={require('../../Assets/car-steering-wheel.png')}
          />
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
      <NewJobModal accept={accept} modalVisible={modalVisible} hide={hide} />
    </View>
  );
};

export default WelcomeScreen