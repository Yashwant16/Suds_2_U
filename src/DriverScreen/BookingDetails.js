import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Colors from '../../Constants/Colors';
import Divider from '../Components/Divider';
import LoadingView from '../Components/LoadingView';
import Rating from '../Components/Rating';
import { BookingContext, WASH_COMPLETED } from '../Providers/BookingProvider';

const images = [
  'https://a.nd-cdn.us/modules/custom-pages/client-specific/columbia-auto-service-advice-pic.PNG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2015_K%C5%82odzko%2C_ul._Dusznicka%2C_myjnia_samochodowa_02.jpg/1200px-2015_K%C5%82odzko%2C_ul._Dusznicka%2C_myjnia_samochodowa_02.jpg',
  'https://s25180.pcdn.co/wp-content/uploads/2019/07/July-cover.jpg',
  'https://st4.depositphotos.com/16677798/24523/i/1600/depositphotos_245239458-stock-photo-car-washing-cleaning-car-using.jpg'
]

const BookingDetails = ({ route }) => {
  const [booking, setBooking] = useState();
  const [tips] = useState(['$10', '$15', '$20', 'Custom']);
  const [selectedTip, setSelectedTip] = useState('$15');
  const [fetching, setFetching] = useState(true);
  const [emptyResponse, setEmptyResponse] = useState(false)
  const { getSingleBookingDetails } = useContext(BookingContext);

  const getBooking = async () => {
    setFetching(true);
    let json = await getSingleBookingDetails(route.params?.id);
    setFetching(false);
    json?.empty ? setEmptyResponse(true) : setBooking(json?.data);
    console.log(JSON.stringify(json?.data))
  };

  useEffect(() => getBooking(route.params?.id), []);

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <ScrollView style={styles.container}>
        <LoadingView empty={emptyResponse} fetching={fetching}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Wash Location</Text>
          <Text style={[styles.text]}>{booking?.wash_location}</Text>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <Detail bold title={booking?.vehicledetails[0]?.model || booking?.vehicle_type} detail={'$' + WashPrice(booking).toFixed(2)} />
          {booking?.extraaddonsdetails?.map(ext => (
            <Detail key={ext.id} title={ext.add_ons_name} detail={'$' + parseFloat(ext.add_ons_price).toFixed(2)} />
          ))}
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <Detail bold detailColored title="Total :" detail={'$' + parseFloat(booking?.total).toFixed(2)} />
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <Text style={[styles.text, { fontWeight: 'bold', textAlign: 'center', color: Colors.dark_orange, paddingVertical: 0 }]}>
            {booking?.booking_date}, {booking?.booking_time}
          </Text>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          {booking?.tip ? <Text style={[styles.text, { fontWeight: 'bold', textAlign: 'center', paddingVertical: 0 }]}>TIP</Text> : null}
          {booking?.tip ?
            (<View style={{ flexDirection: 'row' }}>
              {tips.map((v, i) => (
                <TipItem amount={v} key={i} onPress={() => setSelectedTip(v)} selected={v == selectedTip} />
              ))}
            </View>)
            : null}
          {booking?.rating && booking.rating != '0' && <Text style={[styles.text, { fontWeight: 'bold', textAlign: 'center', paddingVertical: 10 }]}>Your rating on this job</Text>}
          {booking?.rating && booking.rating != '0' && <View style={{ padding: 24, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
            <Rating rating={booking?.rating} size={30} />
            <Text style={{ color: '#777', paddingTop: 30 }}>{booking?.review}</Text>
          </View>}
          {booking?.booking_status==WASH_COMPLETED && <View style={{paddingBottom : 20}}>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>Wash Images</Text>
            {Object.values(booking.image[0]).map((v,i)=> <Image key={i} style={{borderRadius : 10, height : 200, marginBottom : 10}} source={{uri :v }} />)}
         
          </View>}
        
        </LoadingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default BookingDetails;

const Detail = ({ title, detail, bold, detailColored }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Text style={[styles.text, { fontWeight: bold ? 'bold' : 'normal' }]}>{title}</Text>
    <Text style={[styles.text, { fontWeight: bold ? 'bold' : 'normal', color: detailColored ? Colors.blue_color : 'white' }]}>{detail}</Text>
  </View>
);

const TipItem = ({ amount, selected, onPress }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={{ padding: 16, backgroundColor: selected ? Colors.blue_color : 'white', borderRadius: 10, flex: 1, alignItems: 'center', margin: 5 }}>
    <Text style={{ color: selected ? 'white' : 'black', fontWeight: 'bold' }}>{amount}</Text>
  </TouchableOpacity>
);

const WashPrice = (booking) => booking?.total - (booking?.extraaddonsdetails?.map(ext => ext.add_ons_price).reduce((p, c) => parseFloat(p) + parseFloat(c), []) || 0)

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
