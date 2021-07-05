import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, FlatList, ImageBackground } from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BookingContext, calculateTotalPrice } from '../Providers/BookingProvider';
import { Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
// import { CheckBox } from 'react-native-elements'

const BookingReview = () => {
    const navigation = useNavigation()
    const [couponCode, setCouponCode] = useState('')
    const { currentBooking, applyCoupon, customer_id, setCustomerId,getPaymentIntent } = useContext(BookingContext)
    const [loading, setLoading] = useState(false)
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [clientSecret, setClientSecret] = useState()

    const fetchPaymentSheetParams = async () => {
        setLoading(true)
        let json = await getPaymentIntent(calculateTotalPrice(currentBooking)*100)
        setLoading(false)
        if(json) return json
    };

    const initializePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
        } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
        });
        console.log(customer)
        setClientSecret(paymentIntent)
        if (!error) {
            console.log(paymentIntent)
            setLoading(true);
        }
    };
    
    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet({ clientSecret });

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            navigation.navigate('Booking Confirm'); 
        }
    };

    useEffect(() => {
        initializePaymentSheet();
      }, []);

    const onApplyCoupon = async () => {
        if (couponCode.length == 0) return Alert.alert('Error', 'Please insert a coupon code first.')
        setLoading(true)
        let json = await applyCoupon(couponCode)
        setLoading(false)
    }

    return (
        <SafeAreaView style={{ flex: 1,   backgroundColor: '#e28c39', }}>
            <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
           
                <ScrollView style={{ marginBottom: 31 }}>
                    <View style={{ alignItems: 'center', width: '100%', padding: 21 }}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Wash Location</Text>
                            <Text onPress={() => navigation.navigate('OnDemandChangeLocation', { changeLocation: true })} style={{ alignItems: 'flex-end', color: '#e28c39', fontWeight: '500', fontSize: 16 }}>Change</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 7 }}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>{currentBooking?.wash_location}</Text>
                        </View>
                        <Divider />
                        <Detail name={currentBooking.vehicle + (currentBooking.packageDetails?.name ? ' | ' + currentBooking.packageDetails?.name : 0)} detail={'$' + parseFloat(currentBooking.packageDetails?.price).toFixed(2)} />
                        {currentBooking.selectedAddOns?.map(addOn => <Detail name={addOn.add_ons_name} key={addOn.id} detail={'$' + parseFloat(addOn.add_ons_price).toFixed(2)} />)}
                        <Detail name="Service Fee" detail="$10.00" />
                        <Detail name="Distance Fee" detail="$10.00" />
                        <Detail name="Extra Minutes" detail="$10.00" />
                        <Divider />
                        <Detail name="Total" detail={'$' + calculateTotalPrice(currentBooking).toFixed(2)} />
                        <Divider />
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 7 }}>
                            <TextInput
                                style={[styles.auth_textInput,]}
                                onChangeText={setCouponCode}
                                value={couponCode}
                                placeholder="Enter Coupon Code"
                                placeholderTextColor={Colors.text_color}
                                autoCapitalize='none' />
                            <TouchableOpacity onPress={onApplyCoupon} style={styles.add_btn}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: 0.5, backgroundColor: '#aaa', marginVertical: 10 }} />
                        <TouchableOpacity style={styles.payment_btn}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: 35, height: 35, tintColor: Colors.blue_color, marginLeft: 15 }} source={require('../../Assets/icon/paypal-logo.png')} />
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5, marginLeft: 5, fontSize: 16 }}>Pay via PayPal</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.payment_btn}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: 35, height: 35, tintColor: Colors.blue_color, marginLeft: 15 }} source={require('../../Assets/icon/credit-card.png')} />
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5, marginLeft: 5, fontSize: 16 }}>Credit/Debit Card</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 }}>

                    <TouchableOpacity
                        elevation={5}
                        onPress={openPaymentSheet}
                        // onPress={() => { navigation.navigate('Booking Confirm'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    >
                        <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>REVIEW & CONFIRM</Text>

                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </SafeAreaView>
    );
}

export default BookingReview

const Divider = () => <View style={{ width: '100%', height: 0.5, backgroundColor: '#aaa', marginVertical: 7 }} />

const Detail = ({ name, detail, higlightDetail }) => (
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 7 }}>
        <Text numberOfLines={1} style={{ color: '#fff', fontSize: 16, flex: 1 }}>{name}</Text>
        <Text style={{ alignItems: 'flex-end', color: higlightDetail ? Colors.blue_color : '#fff' }}>{detail}</Text>
    </View>
)


const styles = StyleSheet.create({
    auth_textInput: {

        alignSelf: 'center',
        width: '60%',
        // borderWidth: 1,
        borderBottomWidth: 0,
        height: 40, fontSize: 16,
        color: Colors.text_color,
        marginTop: 5,
        backgroundColor: '#fff', padding: 5, borderRadius: 5

    },
    auth_btn: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#e28c39',

        width: '100%',
        height: 60,
        justifyContent: 'center',
    },
    payment_btn: {
        marginTop: 7,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    add_btn: {

        backgroundColor: Colors.blue_color,
        alignItems: 'center',
        width: '33%',
        height: 40, marginTop: 5,
        justifyContent: 'center', borderRadius: 5
    },
})