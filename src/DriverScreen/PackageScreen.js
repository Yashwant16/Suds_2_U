import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import Colors from '../../Constants/Colors';

const PackgeScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    useEffect(()=>navigation.setOptions({ headerTitle: 'EDIT '+route.params.packageType?.toUpperCase()+' PACKAGE'}), [])
  return (
    <View style={{flex: 1, padding: 16}}>
      <SafeAreaView />
      <Text style={{color: Colors.blue_color, fontSize: 24, fontWeight: 'bold', paddingVertical: 24}}>{route.params.packageType} Package</Text>
      <View style={{flexDirection: 'row'}}>
        <InputComponent label="Edit Price" />
        <View style={{width: 50}} />
        <InputComponent label="Edit Time" />
      </View>
      <View style={{height: 300}}>
        <InputComponent label="Package Details" textInputStyle={{flex: 1}} />
      </View>
      <View style={styles.btnsContainer}>
        <Btn title="Cancel" />
        <Btn title="Submit" />
      </View>
    </View>
  );
};

export default PackgeScreen;

const InputComponent = ({label, textInputStyle}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{paddingVertical: 10}}>{label}</Text>
      <TextInput style={[{borderWidth: 2, borderColor: '#555', borderRadius: 25}, textInputStyle]} />
    </View>
  );
};

const Btn = ({title}) => (
  <TouchableOpacity activeOpacity={0.8} style={{flex: 1, alignItems: 'center', backgroundColor: Colors.blue_color, padding: 20}}>
    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
