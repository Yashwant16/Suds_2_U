import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import CtaButton from '../Components/CtaButton';

const BankInfo = () => {
  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <View style={styles.container}>
        <Text style={styles.text}>Full Name</Text>
        <Text style={styles.text}>Account Number</Text>
        <Text style={styles.text}>Confirm Account Number</Text>
        <Text style={styles.text}>Routing Number</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {flex: 1}]}>Routing Number</Text>
          <View style={{width: 10, height: 10}} />
          <Text style={[styles.text, {flex: 1}]}>Routing Number</Text>
        </View>
        <CtaButton primary title="Save" style={{width: '100%', marginTop: 8}} />
      </View>
    </ImageBackground>
  );
};

export default BankInfo;

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
});
