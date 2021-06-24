import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';
import { bookingType, ON_DEMAND } from '../Navigation/NavigationService';
const ConfirmBusniesswash = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <SafeAreaView />
            <View style={{ width: '100%', padding: 21, alignItems: 'center' }}>

                <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Business wash</Text>
                <Text style={{ fontSize: 21, padding: 10, textAlign : "center" }}>Area surface to be cleaned and washed</Text>
                <Text style={{ fontSize: 21 }}>Area : 800 SQ feet</Text>
                <Text style={{ fontSize: 21 }}>Price : $0.15 per foot</Text>
                <View style={styles.card}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: Colors.blue_color }}>$120.00</Text>
                </View>

            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        elevation={5}
                        onPress={() => { navigation.navigate(bookingType.current==ON_DEMAND?'Select Add Ons' : 'Select a Vendor') }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8} >
                        <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        elevation={5}
                        onPress={() => { }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ConfirmBusniesswash

const styles = StyleSheet.create({
    auth_btn: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.buttom_color,
        width: '50%',
        height: 65,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        shadowColor: '#555',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        borderRadius: 10,
        elevation: 5,
        margin: 30,
        padding: 8,
        justifyContent: 'space-between',
    },
})