import React from 'react';
import {Image, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import CtaButton from '../Components/CtaButton';

const JobFinished = () => (
  <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
    <Text style={styles.headerText}>Upload carwash images to share with our customer</Text>
    <View style={styles.imageContainer}>
      <Image style={{width: 85, height: 85, tintColor: 'white'}} source={require('../../Assets/icon/camera.png')} />
    </View>
    <Text style={{fontSize: 28, paddingBottom: 20, color: '#666'}}>Upload car images</Text>
    <Text style={{textAlign: 'center', fontSize: 17, width: '65%', lineHeight: 32, color: '#666'}}>
      Please upload 4 images of the car wash related to service.
    </Text>
    <View style={{flexDirection: 'row', width: '100%', padding: 16}}>
      <CustomButton title="Camera" color={Colors.blue_color} />
      <View style={{width: 16}} />
      <CustomButton title="Gallery" color={Colors.dark_orange} />
    </View>
    <View style={{flex: 1, width: '100%', paddingHorizontal: 16}}>
      <TextInput placeholder="Add comment" placeholderTextColor="#999" style={styles.textArea} />
    </View>
    <TouchableOpacity style={{padding: 20, backgroundColor: Colors.dark_orange, width: '100%', alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>JOB FINISHED</Text>
    </TouchableOpacity>
  </View>
);

export default JobFinished;

const CustomButton = ({title, color}) => (
  <TouchableOpacity style={{padding: 16, backgroundColor: color, flex: 1, borderRadius: 10, alignItems: 'center'}}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerText: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    lineHeight: 24,
    color: 'white',
    backgroundColor: Colors.dark_orange,
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 15,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 75,
    marginBottom: 25,
    borderRadius: 100,
    width: 130,
    height: 130,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textArea: {
    flex: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlignVertical: 'top',
    paddingHorizontal: 16,
    fontSize: 16,
  },
});
