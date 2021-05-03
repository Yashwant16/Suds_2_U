import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Colors from '../../Constants/Colors';
import Divider from '../Components/Divider';

const UpdateDocument = ({navigation, route}) => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <Card title="Step 1 : Driver License">
        <View style={{width: '100%'}}>
          <Divider color="#00000020" />
          <CardSub checked text="Please upload your driving license" />
          <Divider color="#00000020" />
          <CardSub text="Please upload your vehicle's documents" />
        </View>
      </Card>
      <Card title="Step 2 : Background Check"></Card>
      <Card title="Step 3 : Vehicle Insurance"></Card>
      <Card title="Step 4 : Vehicle Permit"></Card>
      <Card title="Step 5 : Vehicle Registration"></Card>
      <CardBtn isFromAuthStack={route.params?.authStack} navigation={navigation} />
    </View>
  );
};

export default UpdateDocument;

const Card = ({children, title}) => {
  // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const [show, setShow] = useState(true);
  return (
    <View style={styles.card}>
      <CardHead show={show} title={title} onPress={() => setShow(currValue => !currValue)} />
      {show && children}
    </View>
  );
};
const CardBtn = ({navigation, isFromAuthStack}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('UPLOAD DRIVING LICENSE')}
    style={[styles.card, {backgroundColor: Colors.blue_color, padding: 20}]}>
    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{isFromAuthStack ? 'CONTINUE' : 'UPDATE DRIVING LICENSE'}</Text>
  </TouchableOpacity>
);

const CardHead = ({title, onPress, show}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', padding: 16, alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
      <Text style={{color: '#777', fontSize: 22}}>{title}</Text>
      <Icon style={{transform: [{rotate:show? '180deg':'0deg'}]}} color="#777" name="keyboard-arrow-down"/>
    </TouchableOpacity>
  );
};

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
  },
});
