import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';
import Colors from '../../Constants/Colors';
import CtaButton from '../Components/CtaButton';

const CompleteProfile = ({navigation}) => {
  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <View style={styles.header}>
          <View  style={{borderColor:'white', borderWidth:4, padding:25, borderRadius:15}}>
          <Image style={{width:50, height:50, tintColor:'white'}} source={require('../../Assets/icon/camera.png')}/>
          </View>
         
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Phone Number</Text>
        <Text style={styles.text}>Prefered Method Of Contact</Text>
        <Text style={styles.text}>Complete Address</Text>
        <Text style={styles.text}>City</Text>
        <Text style={styles.text}>State</Text>
        <Text style={styles.text}>Country</Text>
        <Text style={styles.text}>Hourly Rate</Text>
        <CtaButton primary title="Continue" onPress={()=>navigation.navigate('UPDATE DOCUMENT')} style={{width: '100%', marginTop: 8}} />
      </View>
    </ImageBackground>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  text: {
    fontWeight: 'bold',
    padding: 18,
    fontSize: 16,
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 8,
  },
  header: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_color,
  },
});
