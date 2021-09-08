import React, { useContext, useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Colors from '../../Constants/Colors';
import { partialProfileUrl } from '../Providers';
import { AuthContext } from '../Providers/AuthProvider';

export default NewJobModal = ({ modalVisible, hide, accept, booking, setModalVisible }) => {
  const { userData } = useContext(AuthContext)
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={{
              backgroundColor: Colors.blue_color,
              padding: 18,
              fontSize: 22,
              textAlign: 'center',
              width: '100%',
              color: '#fff',
              fontWeight: 'bold',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            New Job Request
          </Text>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', width: '50%' }}>
              <Image style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#e5e5e5' }} source={(booking?.userdetails[0]?.image || booking?.userdetails?.image) ? { uri: partialProfileUrl + (booking.userdetails[0]?.image || booking.userdetails?.image) } : require('../../Assets/icon/user.png')} />
              <Text>{(booking?.userdetails[0]?.name || booking?.userdetails?.name)?.split(' ')[0]}</Text>
            </View>

            <View style={{ width: 1, height: '100%', backgroundColor: '#ddd' }} />

            <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', width: '50%' }}>
              <Image defaultSource={require('../../Assets/icon/user.png')} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#e5e5e5' }} source={userData?.image ? { uri: partialProfileUrl + userData.image } : require('../../Assets/icon/user.png')} />
              <Text>{userData?.name}</Text>
            </View>

          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ color: Colors.dark_orange, fontWeight: 'bold' }}>Package: </Text>
            <Text style={{ color: '#999', fontWeight: 'bold' }}>{booking?.vehicledetails[0]?.model || booking?.vehicle_type}</Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ color: Colors.dark_orange, fontWeight: 'bold' }}>Address: </Text>
            <Text numberOfLines={1} style={{ color: '#999', fontWeight: 'bold', width : '70%' }}>{booking?.wash_location}</Text>
          </View>
          {booking?.extra_add_ons && <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />}
          {booking?.extra_add_ons && <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center' }}>
            <Text style={{ color: Colors.dark_orange, fontWeight: 'bold', marginLeft: 15 }}>Add-on: </Text>
            <Text numberOfLines={1} style={{ color: '#999', fontWeight: 'bold', marginRight: 15,width : '70%'  }}>
              {booking?.extraaddonsdetails?.length > 1
                ? booking?.extraaddonsdetails?.map(addon => addon.add_ons_name).reduce((p, c) => `${p}, ${c}`)
                : booking?.extraaddonsdetails[0]?.add_ons_name}
            </Text>
          </View>}
          <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />
          <View style={{ height: 130, zIndex: 50, backgroundColor: 'red', width: '100%' }}>
            {booking?.wash_lat_lng && <MapView
              style={{ width: '100%', flex: 1 }}
              scrollEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              camera={{
                zoom: 15,
                pitch: 2,
                heading: 2,
                altitude: 2,
                center: { latitude: parseFloat(booking.wash_lat_lng.latitude), longitude: parseFloat(booking.wash_lat_lng.longitude) },
              }}
            />}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <BottomButton title="Reject Job" onPress={hide} style={{ backgroundColor: Colors.red, borderBottomLeftRadius: 5 }} />
            <BottomButton title="Accept Job" onPress={accept} style={{ backgroundColor: Colors.green, borderBottomRightRadius: 5 }} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const BottomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[{ width: '50%', padding: 12 }, style]} onPress={onPress}>
      <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00002070',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});