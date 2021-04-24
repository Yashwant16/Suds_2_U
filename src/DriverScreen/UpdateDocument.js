import React from 'react';
import {Text, View, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import Divider from '../Components/Divider';

const UpdateDocument = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <Card>
        <CardHead title="Step 1 : Driver License" />
        <Divider color="#00000020" />
        <CardSub checked text="Please upload your driving license" />
        <Divider color="#00000020" />
        <CardSub text="Please upload your vehicle's documents" />
      </Card>
      <Card>
        <CardHead title="Step 2 : Background Check" />
      </Card>
      <Card>
        <CardHead title="Step 3 : Vehicle Insurance" />
      </Card>
      <Card>
        <CardHead title="Step 4 : Vehicle Permit" />
      </Card>
      <Card>
        <CardHead title="Step 4 : Vehicle Registration" />
      </Card>
      <CardBtn navigation={navigation}/>
    </View>
  );
};

export default UpdateDocument;

const Card = ({children}) => <View style={styles.card}>{children}</View>;
const CardBtn = ({navigation}) => (
  <TouchableOpacity onPress={()=>navigation.navigate('UPLOAD DRIVING LICENSE')} style={[styles.card, {backgroundColor:Colors.blue_color, padding: 20}]}>
    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>CONTINUE</Text>
  </TouchableOpacity>
);
const CardHead = ({title}) => (
  <View style={{flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
    <Text style={{color: '#777', fontSize: 22}}>{title}</Text>
    <Image
      style={{tintColor: '#777', width: 16, height: 16, transform: [{rotate: '180deg'}]}}
      source={{
        uri:
          'https://lh3.googleusercontent.com/proxy/L_ecjSgjvcHz4_nyi-xqZuBjlbRJ8Bl0PqVGVj3IJl-78UCKIjocQU70PvR-QRlTdKXW8uBRfXPBrEMrtbnUkc9-rL3L-NxV5QWJeFUV_GOoa0kLOjR-bQ',
      }}
    />
  </View>
);

const CardSub = ({text, checked}) => (
  <View style={{flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12, alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}>
    <Image style={{tintColor: checked ? Colors.dark_orange : '#fff', width: 16, height: 16}} source={require('../../Assets/icon/checked.png')} />
    <Text style={{color: '#777', fontSize: 14, paddingLeft: 8}}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    borderRadius: 3,
    elevation: 5,
    marginBottom: 12,
    // padding: 16,
  },
});
