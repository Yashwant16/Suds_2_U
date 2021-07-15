import React, { useContext, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Image, Text } from 'react-native';
import Colors from '../../Constants/Colors';
import { Overlay, Icon } from 'react-native-elements';
import { BookingContext } from '../Providers/BookingProvider';
import LoadingView from '../Components/LoadingView';

const WorkInProgress = ({ navigation, route }) => {
  const [deadline, setDeadline] = useState(route.params?.booking.totaltime * 1000);
  const [timeRemaining, setTimeRemaining] = useState(deadline - Date.now())
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addMoreMinutes } = useContext(BookingContext)
  const booking = useMemo(() => route.params?.booking, [route])

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const onAddMoreMinutes = async (seconds) => {
    setVisible(false)
    setLoading(true)
    let success = await addMoreMinutes(booking?.booking_id, seconds)
    setLoading(false)
    if (success) setDeadline(cv => cv + (seconds * 1000))
  }

  useEffect(() => {
    console.log(JSON.stringify(booking, null, 2))
    const interval = setInterval(() => setTimeRemaining(deadline - Date.now()), 1000);
    return () => clearInterval(interval);
  }, [deadline]);
  return (
    <View style={styles.container}>
      <LoadingView containerStyle={{ height: '100%' }} loading={loading}>
        <View style={styles.detailContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 28 }}>$99.00</Text>
          <View style={styles.rankContainer}>
            <Text style={{ color: 'white', paddingLeft: 6 }}>Gold</Text>
            <Image style={{ tintColor: 'white', height: 22, width: 22 }} source={require('../../Assets/help.png')}></Image>
          </View>
          <Text style={{ fontWeight: 'bold' }}>Estimates wash duration 1.5hrs</Text>
        </View>
        <View style={{ marginVertical: -8 }} />
        {booking.extraaddonsdetails &&
          booking.extraaddonsdetails.map((addOn, i) => {
            return (<View key={i} style={[styles.detailContainer, { flexDirection: 'row' }]}>
              <Text style={{ fontWeight: 'bold',  }}>{addOn.add_ons_name}</Text>
              <Text style={{ fontWeight: 'bold',marginLeft : 16, color: Colors.dark_orange }}>${parseFloat(addOn?.add_ons_price).toFixed(2)}</Text>
              <Image style={{ height: 24, width: 24, tintColor: 'black', marginLeft: 'auto' }} source={require('../../Assets/icon/checked.png')}></Image>
            </View>)
          })
        }
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 110 }}>{parseMilllisecond(timeRemaining)}</Text>
          <View style={{ flexDirection: 'row', width: '55%', justifyContent: 'space-between' }}>
            <Text style={{ color: '#999' }}>Hours</Text>
            <Text style={{ color: '#999' }}>Minutes</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 'auto' }}>
          <TouchableOpacity onPress={() => navigation.navigate('JOB FINISHED', { booking })} style={[styles.btns, { backgroundColor: Colors.blue_color }]}>
            <Text style={styles.btnText}>Job Finished</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay} style={[styles.btns, { backgroundColor: Colors.dark_orange }]}>
            <Text style={styles.btnText}>Add More Minutes</Text>
          </TouchableOpacity>
        </View>
      </LoadingView>
      <Overlay overlayStyle={{ borderRadius: 10, alignSelf: 'stretch', margin: 50 }} animationType="fade" isVisible={visible} onBackdropPress={toggleOverlay}>
        <AddMoreMinutesOverlay onAdd={onAddMoreMinutes} />
      </Overlay>
    </View>
  );
};
export default WorkInProgress;

const parseMilllisecond = ms => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');
  let hour = Math.floor(ms / 3600000);
  let minute = Math.floor((ms % 3600000) / 60000);
  return `${zeroPad(hour, 2)}:${zeroPad(minute, 2)}`;
};

const AddMoreMinutesOverlay = ({ onAdd }) => {
  const [minutes, setMinutes] = useState(10)
  return (<View>
    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, paddingBottom: 5 }}>Add More Minutes</Text>
    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly' }}>
      <TouchableOpacity onPress={() => setMinutes(cv => cv + 5)} style={[styles.detailContainer, { flex: 1, marginHorizontal: 0, backgroundColor: '#f4f4f4' }]}>
        <Icon name="add" color='black' size={40} />
      </TouchableOpacity>
      <Text style={{ fontSize: 40, fontWeight: 'bold', paddingHorizontal: 30 }}>{minutes}</Text>
      <TouchableOpacity disabled={minutes == 5} onPress={() => setMinutes(cv => cv - 5)} style={[styles.detailContainer, { flex: 1, marginHorizontal: 0, backgroundColor: '#f4f4f4', opacity: minutes == 5 ? .25 : 1 }]}>
        <Icon name="remove" color='black' size={40} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => onAdd(minutes * 60)} style={{ padding: 15, marginTop: 5, backgroundColor: Colors.blue_color, alignItems: 'center', borderRadius: 5 }}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Add</Text>
    </TouchableOpacity>
  </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 8,
    // paddingTop: 8,
    position: 'relative',
  },
  detailContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 15,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankContainer: {
    padding: 8,
    backgroundColor: Colors.blue_color,
    width: '40%',
    flexDirection: 'row',
    borderRadius: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },

  btns: {
    padding: 20,
    width: '50%',
    textAlign: 'center',
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
