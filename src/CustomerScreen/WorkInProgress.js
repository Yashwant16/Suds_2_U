import React, { useContext, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Image, Text } from 'react-native';
import Colors from '../../Constants/Colors';
import { Overlay, Icon } from 'react-native-elements';
import { BookingContext } from '../Providers/BookingProvider';
import LoadingView from '../Components/LoadingView';

const WorkInProgress = ({ navigation, route }) => {
    const [deadline, setDeadline] = useState(Date.now()+3800000);
    const [timeRemaining, setTimeRemaining] = useState(deadline - Date.now())
    const [loading, setLoading] = useState(false);
    const booking = useMemo(() => route.params?.booking, [route])

    useEffect(() => {
        const interval = setInterval(() => setTimeRemaining(deadline- Date.now()), 1000);
        return () => clearInterval(interval);
    }, [deadline]);
    return (
        <View style={styles.container}>
            <LoadingView containerStyle={{ height: '100%' }} loading={loading}>

                <View style={{ alignItems: 'center', width: '100%', padding: 21 }}>
                    <Image style={{ width: 85, height: 85, tintColor: '#0AFF06', marginTop: 30 }} source={require('../../Assets/checkmark.png')} />
                    <Text style={{ fontSize: 22, marginVertical: 10, fontWeight: 'bold', color: 'gray', marginTop: 30 }}>Congratulation!</Text>
                    <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', color: 'gray' }}>Your service has started now!</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 110 }}>{parseMilllisecond(timeRemaining)}</Text>
                    <View style={{ flexDirection: 'row', width: '55%', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#999' }}>Hours</Text>
                        <Text style={{ color: '#999' }}>Minutes</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 'auto' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('JOB FINISHED', { booking })} style={[styles.btns, { backgroundColor: Colors.blue_color }]}>
                        <Text style={styles.btnText}>Need Help?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Select Add Ons')} style={[styles.btns, { backgroundColor: Colors.dark_orange }]}>
                        <Text style={styles.btnText}>+ Add Add-on</Text>
                    </TouchableOpacity>
                </View>

            </LoadingView>
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
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
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
