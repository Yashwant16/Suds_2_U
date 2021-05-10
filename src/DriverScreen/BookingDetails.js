import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import CtaButton from '../Components/CtaButton';
import Divider from '../Components/Divider';
import LoadingView from '../Components/LoadingView';
import Rating from '../Components/Rating';
import {BookingContext} from '../Providers/BookingProvider';

const BookingDetails = ({route}) => {
  // const booking = useMemo(() => {
  //   console.log(route.params);
  //   if (route.params?.id){
  //     getBooking(route.params?.id).then(data => {
  //       if (data) return data;
  //     });
  //   }

  // }, [route]);
  const [booking, setBooking] = useState();
  const [tips] = useState(['$10', '$15', '$20', 'Custom']);
  const [selectedTip, setSelectedTip] = useState('$15');
  const [fetching, setFetching] = useState(false);
  const {getSingleBookingDetails} = useContext(BookingContext);

  const getBooking = async () => {
  
    setFetching(true);
    let json = await getSingleBookingDetails(route.params?.id);
    setFetching(false);
    console.log('...................',json?.data)
    setBooking(json?.data);

  
  };

  useEffect(() => console.log(booking?.extraaddonsdetails), [booking]);

  useEffect(() => {
    console.log(route.params);
    getBooking(route.params?.id);
  }, []);

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <View style={styles.container}>
          <LoadingView fetching={fetching}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Wash Location</Text>
            <Text style={[styles.text]}>{booking?.wash_location}</Text>
            <Text style={[styles.text]}>CA-94507</Text>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Detail bold title={booking?.vehicledetails[0]?.model} detail="$39.00" />
            {booking?.extraaddonsdetails?.map(ext => (
              <Detail key={ext.id} title={ext.add_ons_name} detail={'$' + parseFloat(ext.add_ons_price).toFixed(2)} />
            ))}
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Detail bold detailColored title="Total :" detail={'$' + parseFloat(booking?.total).toFixed(2)} />
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', color: Colors.dark_orange, paddingVertical: 0}]}>
              {booking?.booking_date}, {booking?.booking_time}
            </Text>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', paddingVertical: 0}]}>TIP</Text>
            <View style={{flexDirection: 'row'}}>
              {tips.map((v, i) => (
                <TipItem amount={v} key={i} onPress={() => setSelectedTip(v)} selected={v == selectedTip} />
              ))}
            </View>
            <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', paddingVertical: 10}]}>Your rating on this job</Text>
            <View style={{padding: 24, backgroundColor: 'white', borderRadius: 10, alignItems: 'center'}}>
              <Rating rating={booking?.rating} size={30} />
              <Text style={{color: '#777', paddingTop: 30}}>{booking?.review}</Text>
            </View>
          </LoadingView>
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
    // onPressIn={onPress}
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
