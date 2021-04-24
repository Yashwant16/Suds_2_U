import React, {useState} from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import CtaButton from '../Components/CtaButton';
import Divider from '../Components/Divider';
import Rating from '../Components/Rating';

const BookingDetails = () => {
  const [tips] = useState(['$10', '$15', '$20', 'Custom']);
  const [selectedTip, setSelectedTip] = useState('$15');

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <View style={styles.container}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Wash Location</Text>
        <Text style={[styles.text]}>321 Main street, Aloma</Text>
        <Text style={[styles.text]}>CA-94507</Text>
        <Divider style={{marginTop: 10, marginBottom: 10}} />
        <Detail bold title="Donge Ram 350 Truck" detail="$39.00" />
        <Detail title="Liquid Hand Wax" detail="$12.00" />
        <Detail title="Extra Cleaning Fee" detail="$10.00" />
        <Detail title="Service Fee" detail="$+1.00" />
        <Detail title="Distance Fee" detail="$10.00" />
        <Detail title="Extra Minutes" detail="$10.00" />
        <Divider style={{marginTop: 10, marginBottom: 10}} />
        <Detail bold detailColored title="Total :" detail="$200.99" />
        <Divider style={{marginTop: 10, marginBottom: 10}} />
        <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', color: Colors.dark_orange, paddingVertical: 0}]}>
          JANUARY 29,2021 AT 4:00 PM
        </Text>
        <Divider style={{marginTop: 10, marginBottom: 10}} />
        <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', paddingVertical: 0}]}>TIP</Text>
        <View style={{flexDirection: 'row'}}>
          {tips.map((v, i) => (
            <TipItem amount={v} key={i} onPress={() => setSelectedTip(v)} selected={v == selectedTip} />
          ))}
        </View>
        <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', paddingVertical: 10}]}>Your rating on this job</Text>
        <View style={{padding:24, backgroundColor:'white', borderRadius:10, alignItems:'center', }}>
            <Rating rating={3} size={30}/>
            <Text style={{color:'#777', paddingTop:30}}>Lorem ipsum dolor lit</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BookingDetails;

const Detail = ({title, detail, bold, detailColored}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={[styles.text, {fontWeight: bold ? 'bold' : 'normal'}]}>{title}</Text>
    <Text style={[styles.text, {fontWeight: bold ? 'bold' : 'normal', color: detailColored ? Colors.blue_color : 'white'}]}>{detail}</Text>
  </View>
);

const TipItem = ({amount, selected, onPress}) => (
  <TouchableOpacity
    onPressIn={onPress}
    activeOpacity={1}
    style={{padding: 16, backgroundColor: selected ? Colors.blue_color : 'white', borderRadius: 10, flex: 1, alignItems: 'center', margin: 5}}>
    <Text style={{color: selected ? 'white' : 'black', fontWeight: 'bold'}}>{amount}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 7,
  },
});
