import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'react-native';
import Colors from '../../Constants/Colors';

const WorkInProgress = ({navigation, route}) => {
  const [timeRemaining, setTimeRemaining] = useState(3600000);
  const booking = useMemo(()=>route.params?.booking, [route])

  useEffect(() => {
    const interval = setInterval(() => setTimeRemaining(currTime => currTime - 1000), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 28}}>$99.00</Text>
        <View style={styles.rankContainer}>
          <Text style={{color: 'white', paddingLeft: 6}}>Gold</Text>
          <Image style={{tintColor: 'white', height: 22, width: 22}} source={require('../../Assets/help.png')}></Image>
        </View>
        <Text style={{fontWeight: 'bold'}}>Estimates wash duration 1.5hrs</Text>
      </View>
      <View style={[styles.detailContainer, {flexDirection: 'row'}]}>
        <Text style={{fontWeight: 'bold'}}>Extra Trash - </Text>
        <Text style={{fontWeight: 'bold', color: Colors.dark_orange}}>$15.00</Text>
        <Image style={{height: 24, width: 24, tintColor: 'black', marginLeft: 'auto'}} source={require('../../Assets/icon/checked.png')}></Image>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 110}}>{parseMilllisecond(timeRemaining)}</Text>
        <View style={{flexDirection: 'row', width: '55%', justifyContent: 'space-between'}}>
          <Text style={{color: '#999'}}>Hours</Text>
          <Text style={{color: '#999'}}>Minutes</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <TouchableOpacity onPress={()=>navigation.navigate('JOB FINISHED', {booking})} style={[styles.btns, {backgroundColor: Colors.blue_color}]}>
          <Text style={styles.btnText}>Job Finished</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btns, {backgroundColor: Colors.dark_orange}]}>
          <Text style={styles.btnText}>Add More Minutes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WorkInProgress;

const parseMilllisecond = ms => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');
  let minute = Math.floor(ms / 60000);
  let second = Math.floor((ms % 60000) / 1000);
  return `${zeroPad(minute, 2)}:${zeroPad(second, 2)}`;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 100,
    position: 'relative',
  },
  detailContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 15,
    margin: 8,
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
