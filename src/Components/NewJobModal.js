import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import Colors from '../../Constants/Colors';
import LoadingView from './LoadingView';

export default NewJobModal = ({modalVisible, hide, accept, booking}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
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
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 20, justifyContent: 'center', alignItems: 'center', width: '50%'}}>
              <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#e62'}}></View>
              <Text>{booking?.vehicledetails[0].model}</Text>
            </View>
            <View style={{width: 1, height: '100%', backgroundColor: '#ddd'}} />
            <View style={{padding: 20, justifyContent: 'center', alignItems: 'center', width: '50%'}}>
              <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#e62'}}></View>
              <Text>Job type : Gold</Text>
            </View>
          </View>
          <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={{color: Colors.dark_orange, fontWeight: 'bold'}}>Vehicle Type: </Text>
            <Text style={{color: '#999', fontWeight: 'bold'}}>{booking?.vehicledetails[0].model}</Text>
          </View>
          <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={{color: Colors.dark_orange, fontWeight: 'bold'}}>Address: </Text>
            <Text style={{color: '#999', fontWeight: 'bold'}}>{booking?.wash_location}</Text>
          </View>
          <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={{color: Colors.dark_orange, fontWeight: 'bold'}}>Add-on: </Text>
            <Text style={{color: '#999', fontWeight: 'bold'}}>
              {booking?.extraaddonsdetails?.length > 1
                ? booking?.extraaddonsdetails?.reduce((p, c) => `${p.add_ons_name}, ${c.add_ons_name}`)
                : booking?.extraaddonsdetails[0]?.add_ons_name}
            </Text>
          </View>
          <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
          <View style={{height: 130, zIndex: 50, backgroundColor: 'red', width: '100%'}}>
            <MapView
              style={{width: '100%', flex: 1}}
              scrollEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              camera={{
                zoom: 15,
                pitch: 2,
                heading: 2,
                altitude: 2,
                center: {latitude: 37.78825, longitude: -122.4324},
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <BottomButton title="Reject Job" onPress={hide} style={{backgroundColor: Colors.red, borderBottomLeftRadius: 5}} />
            <BottomButton title="Accept Job" onPress={accept} style={{backgroundColor: Colors.green, borderBottomRightRadius: 5}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const BottomButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[{width: '50%', padding: 12}, style]} onPress={onPress}>
      <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 56,
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