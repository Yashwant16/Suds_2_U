import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';
import { bookingType, changeStack, ON_DEMAND } from '../Navigation/NavigationService';

const BookingConfirmed = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', width: '100%', padding: 21, flex: 1 }}>
                <Image style={{ width: 85, height: 85, tintColor: '#0AFF06', marginTop: 30 }} source={require('../../Assets/checkmark.png')} />
                <Text style={{ fontSize: 22, marginVertical: 10, fontWeight: 'bold', color: 'gray', marginTop: 30 }}>Booking Confirmed!</Text>
                <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', color: 'gray' }}>Your request has been Confirmed</Text>
                <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', color: 'gray', marginTop: 15 }}>Please find the trainer info. below</Text>
                <Text style={{ fontSize: 18, marginVertical: 1, fontWeight: 'bold', color: '#3743FE', marginTop: 25 }}>Total Payment: $200.45</Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignSelf: 'center' }}>
                <Image style={{ width: 25, height: 25, tintColor: '#24AE88', }} source={require('../../Assets/checkdark.png')} />
                <Text style={{ fontSize: 16, marginVertical: 1, fontWeight: 'bold', textAlign: 'center', marginLeft: 5 }}>Booking Confirmed</Text>
            </View>
            <View style={{ backgroundColor: '#fff', alignSelf: 'stretch', margin: 25, marginTop: 'auto', shadowOpacity: 0.8, elevation: 3, shadowColor: '#aaa', justifyContent: 'center', borderRadius: 5, borderColor: '#ccc', borderWidth: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <Text>Booking Date/Time : </Text>
                    <Text style={{ color: Colors.dark_orange, backgroundColor: '#000', padding: 4, paddingHorizontal: 8, borderRadius: 3 }}>Jan 29 2021 | 9:30 AM</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 20 }} source={require('../../Assets/images.jpeg')} />
                    <Text style={{ padding: 4, marginLeft: 5, fontWeight: 'bold' }}>Donnie McC.</Text>
                </View>

                <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />
                <View style={{ flexDirection: 'row' }}>
                    {bookingType.current == ON_DEMAND && <View style={{ padding: 10, flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, tintColor: '#0EFF74', }} source={require('../../Assets/call.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 12 }}>CALL TRAINER</Text>
                    </View>}
                    {bookingType.current == ON_DEMAND && <View style={{ width: 1, height: 'auto', backgroundColor: '#ddd' }} />}
                    <View style={{ padding: 10, flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 25, height: 25, tintColor: 'red', }} source={require('../../Assets/error.png')} />
                        <Text style={{ marginLeft: 5, fontSize: 12 }}>CANCEL REQUEST</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: 'red', justifyContent: 'flex-end', flexDirection: 'row' }}>
                <TouchableOpacity
                    elevation={5}
                    onPress={() => changeStack('CustomerHomeStack')}
                    style={styles.auth_btn}
                    underlayColor='gray'
                    activeOpacity={0.8}>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Go to Home Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BookingConfirmed

const styles = StyleSheet.create({
    auth_btn: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'orange',
        width: '100%',
        height: 65,
        justifyContent: 'center',
    },
})