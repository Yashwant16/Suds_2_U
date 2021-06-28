import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native';
import Colors from '../../Constants/Colors';
import { useNavigation } from '@react-navigation/core';
import { ImageBackground } from 'react-native';
import { bookingType, navigate, ON_DEMAND } from '../Navigation/NavigationService';
import CheckBox from 'react-native-check-box'
import { PackagesMethod } from '../Providers/PackageProvider';

const defaultPackages = [
    {
        name: "Bronze",
        description: "Truck Only",
        price: '$99.00'
    }, {
        name: "Silver",
        description: "Truck and Tractor",
        price: '$199.00'
    }, {
        name: "Gold",
        description: "Tractor and Trailor",
        price: '$249.00'
    }
]

const Packages = ({ route }) => {
    const navigation = useNavigation()
    const [selectedPackage, setSelectedPackage] = useState()
    const packageType = useMemo(() => route.params?.packageType ? route.params?.packageType : 'Heavy Equipments', [route])
    const packages = useMemo(() => route.params?.packages ? route.params.packages : defaultPackages, [route])

    const onNext = () => {
        if (selectedPackage == undefined) Alert.alert('Select Package', 'Please select a package to continue.')
        else navigate('Select Add Ons')
    }

    const getPackages = async () => {
        switch (PackagesMethod) {
            case 'WITH_VENDOR':
                
                break;
        
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
                {/* <View style={{ padding: 10, backgroundColor: Colors.dark_orange, }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>{packageType}</Text>
                </View> */}
                <FlatList
                    keyExtractor={(item) => item.name}
                    style={{ width: '100%' }}
                    data={packages}
                    renderItem={({ item, index }) => <RenderItem item={item} onCheck={() => setSelectedPackage(cv => cv == index ? undefined : index)} checked={selectedPackage == index} />}
                    ItemSeparatorComponent={() => <View style={{ marginTop: -15 }} />}
                />
                <View style={{ alignItems: 'center', marginTop: 'auto' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            elevation={5}
                            onPress={onNext}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}>
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const RenderItem = ({ item, onCheck, checked }) => {
    return (
        <TouchableOpacity onPress={onCheck} activeOpacity={0.8} style={{ padding: 5, margin: 10, backgroundColor: '#fff', borderRadius: 5, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ marginRight: 'auto', width: 30 }} />
            <View style={{ padding: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>{item.price}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: Colors.blue_color, width: 160, justifyContent: 'center', alignItems: 'center', height: 35, borderRadius: 30 }}>
                    <Text style={{ marginHorizontal: 5, fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{item.name}</Text>

                    <Image style={{ height: 20, width: 20, padding: 5, borderRadius: 10, tintColor: '#fff' }} source={require('../../Assets/help.png')} />

                </View>

                {item.description && <Text style={{ marginHorizontal: 5, textAlign: 'center', fontSize: 16, fontWeight: '500', marginTop: 5 }}>{item.description}</Text>}

            </View>
            <CheckBox
                style={{ padding: 5, marginLeft: 'auto' }}
                onClick={onCheck}
                isChecked={checked}
                checkedImage={<Image source={require('../../Assets/icon/checked.png')} style={{ width: 22, height: 22 }} />}
                unCheckedImage={<Image source={require('../../Assets/icon/unchecked.png')} style={{ width: 22, height: 22 }} />} />
        </TouchableOpacity>
    )
}

export default Packages
const styles = StyleSheet.create({
    auth_btn: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.buttom_color,
        width: '100%',
        height: 65,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#555',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        borderRadius: 10,
        elevation: 5,
        margin: 15,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})