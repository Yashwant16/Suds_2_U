import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';
import CustomInput from '../Components/CustomInput';

const UploadDriverLicense = ({navigation,route }) => {
    const [number, setNumber] = useState('');
    const [licenseClass, setClass] = useState('');
    const [issuedDate, setIssuedDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
  
  return (
    <View style={{flex: 1}}>
      <View style={{height: 250, width: '100%', backgroundColor: '#eee'}}>
        <Image
          style={{tintColor: '#ccc', height: 210, width: '100%', resizeMode: 'center'}}
          source={{uri: 'https://image.flaticon.com/icons/png/512/1655/1655290.png'}}
        />
        <Text style={{color: '#ccc', textAlign: 'center', fontSize: 20}}>TAKE A PHOTO</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#FFF',alignItems:'center', paddingTop:16}}>
        <CustomInput
          label="LICENCE NUMBER"
          iconSource={require(`../../Assets/icon/password.png`)}
          setState={({text}) => setNumber(text)}
          state={number}
          noIcon
        />
        <CustomInput
          label="LICENSE CLASSIFICATION"
          iconSource={require(`../../Assets/icon/password.png`)}
          setState={({text}) => setClass(text)}
          state={licenseClass}
          noIcon
        />
        <CustomInput
          label="ISSUED ON"
          iconSource={require(`../../Assets/icon/password.png`)}
          setState={({text}) => setIssuedDate(text)}
          state={issuedDate}
          noIcon
        />
        <CustomInput
          label="EXPIRY DATE"
          iconSource={require(`../../Assets/icon/password.png`)}
          setState={({text}) => setExpiryDate(text)}
          state={expiryDate}
          noIcon
        />
        <CardBtn isFromAuthStack= {route.params.authStack} navigation={navigation}/>
      </View>
    </View>
  );
};

export default UploadDriverLicense;
const CardBtn = ({navigation, isFromAuthStack}) => (
    <TouchableOpacity onPress={()=>isFromAuthStack ? navigation.navigate('BACKGROUND CHECK'):navigation.goBack()} style={[styles.card, {backgroundColor:Colors.blue_color, padding: 16}]}>
      <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{isFromAuthStack?'CONTINUE':'DONE'}</Text>
    </TouchableOpacity>
  );

  

const styles = StyleSheet.create({
    card: {
    
      width: '90%',
      backgroundColor: '#fff',
      alignItems: 'center',
      shadowColor: '#999',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 3.5,
      borderRadius: 3,
      elevation: 5,
      marginTop: 40,
      marginBottom: 12,
      // padding: 16,
    },
  });
  