import React from 'react';
import {StatusBar} from 'react-native';
import {Alert, Modal, StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../../Constants/Colors';

export default NewJobModal = ({modalVisible, hide, accept}) => {
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{backgroundColor: Colors.blue_color, padding: 18, fontSize: 22, textAlign: 'center', width: '100%', color: '#fff', fontWeight: 'bold', borderTopLeftRadius: 5,borderTopRightRadius:5}}>New Job Request</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 20, justifyContent: 'center', alignItems: 'center', width: '50%'}}>
                <View style={{width: 60, height: 60, borderRadius: 30, backgroundColor: '#e62'}}></View>
                <Text>Ford eco sport</Text>
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
              <Text style={{color: '#999', fontWeight: 'bold'}}>Ford - Eco sport - 2019</Text>
            </View>
            <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
            <View style={{flexDirection: 'row', padding: 10}}>
              <Text style={{color: Colors.dark_orange, fontWeight: 'bold'}}>Address: </Text>
              <Text style={{color: '#999', fontWeight: 'bold'}}>77 Cole extension, 948578 apt.</Text>
            </View>
            <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
            <View style={{flexDirection: 'row', padding: 10}}>
              <Text style={{color: Colors.dark_orange, fontWeight: 'bold'}}>Add-on: </Text>
              <Text style={{color: '#999', fontWeight: 'bold'}}>Extra cash</Text>
            </View>
            <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
            <Image source={{uri:'https://sandiegohistory.org/wp-content/uploads/2010/06/Serra-Google-Map-Snip.jpg'}} style={{height:130, width: '100%'}}/>
            <View style={{flexDirection:'row'}}>
                <Text onPress={hide} style={{borderBottomLeftRadius:5, textAlign: 'center', width: '50%', color:'#fff', backgroundColor:Colors.red, fontWeight:'bold', fontSize:18, padding:12}}>Reject Job</Text>
                <Text onPress={accept} style={{borderBottomRightRadius:5,textAlign: 'center',width: '50%',color:'#fff',backgroundColor:Colors.green, fontWeight:'bold', fontSize:18, padding:12}}>Accept Job</Text>
            </View>
          </View>
        </View>
      </Modal>
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
    // margin: 20,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    // padding: 10,
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
