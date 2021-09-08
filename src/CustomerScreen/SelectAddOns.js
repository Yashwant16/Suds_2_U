import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Button, FlatList, ImageBackground } from 'react-native';

import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import { BookingContext } from '../Providers/BookingProvider';
import LoadingView from '../Components/LoadingView';
import { changeStack } from '../Navigation/NavigationService';

const SelectAddOns = ({ navigation }) => {

  const [addOns, setAddOns] = useState([])
  const [fetching, setFetching] = useState(true)
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const { getAddOns ,setCurrentBooking} = useContext(BookingContext)

  useEffect(() =>{ getAddOnList(); return ()=>setCurrentBooking(cv=>({...cv, extra_add_ons : undefined, selectedAddOns : undefined}))}, [])

  const getAddOnList = async () => {
    setFetching(true)
    let json = await getAddOns()
    setFetching(false)
    if (json?.data) setAddOns(json?.data)
  }

  const onSelect = (item) => {
    if (selectedAddOns.includes(item)) setSelectedAddOns(cv => cv.filter(v => v.id != item.id))
    else setSelectedAddOns(cv => [...cv, item])
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor : Colors.blue_color }}>

      <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
        <LoadingView fetching={fetching} containerStyle={{ height: '100%' }}>
     


          <View style={{ alignItems: 'center', width: '100%', }}>
            <View style={{ backgroundColor: '#e28c39', height: 60, width: '100%', justifyContent: 'center', paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 17, color: '#fff', fontWeight: '700', textAlign: 'center' }}>Upgrade your packages with the following add-ons</Text>
            </View>
            <FlatList
              style={{ width: '100%', marginBottom: 180 }}
              showsVerticalScrollIndicator={false}
              data={addOns}
              renderItem={({ item, index }) => <RenderItem item={item} index={index} onSelect={() => onSelect(item)} isSelected={selectedAddOns.includes(item)} />}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={() => <View style={{ margin: -5 }} />}
            />

          </View>

          <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0, alignItems: 'center', marginTop: 10 }}>
            <View style={{ backgroundColor: '#e28c39', height: 60, width: '100%', justifyContent: 'center', paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 17, color: '#fff', fontWeight: '700', textAlign: 'center' }}>Estimates Wash Duration 30 Mins</Text>
              <Text style={{ fontSize: 17, color: '#fff', fontWeight: '700', textAlign: 'center' }}>Sub-Total:  ${selectedAddOns.length == 0 ? 0 : selectedAddOns.map(addOn => parseFloat(addOn.add_ons_price)).reduce((p, c) => p + c)}</Text>
            </View>
            <View style={{flexDirection :'row', }} >
            <TouchableOpacity
              elevation={5}
              onPress={() => {
                if(selectedAddOns.length>0) setCurrentBooking(cv=>({...cv,selectedAddOns, extra_add_ons:selectedAddOns.map(addOn=>addOn.id).reduce((p,c)=>p+','+c)}))
                navigation.navigate('Booking Review');
              }}
              style={styles.auth_btn}
              underlayColor='gray'
              activeOpacity={0.8}>
              <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>CONFIRM ADD-ONS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeStack('CustomerHomeStack')}
              style={styles.auth_btn}
              activeOpacity={0.8}>
              <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>CANCEL</Text>
            </TouchableOpacity>
            </View>
         
          </View>
        </LoadingView>
      </ImageBackground>

    </SafeAreaView>
  );
}

export default SelectAddOns

const RenderItem = ({ item, index, onSelect, isSelected }) => (
  <TouchableOpacity onPress={onSelect} style={{ padding: 21, flex: 1, margin: 10, marginHorizontal: 18, backgroundColor: '#fff', borderRadius: 5, paddingVertical: 10, }}>
    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-evenly', flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginHorizontal: 5, fontSize: 16, color: '#000', fontWeight: 'bold' }}>{item.add_ons_name} - </Text>
        <Text style={{ marginHorizontal: 5, fontSize: 16, color: '#e28c39', fontWeight: 'bold' }}>${parseFloat(item.add_ons_price).toFixed(2)}</Text>
      </View>
      <CheckBox
        style={{ padding: 0, alignItems: 'flex-end', flex: 1, marginRight: 15 }}
        onClick={onSelect}
        isChecked={isSelected}
        checkedImage={<Image source={require('../../Assets/icon/checked.png')} style={{ width: 22, height: 22 }} />}
        unCheckedImage={<Image source={require('../../Assets/icon/unchecked.png')} style={{ width: 22, height: 22 }} />}
      />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    color: Colors.text_color,
    marginTop: 10,

  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.buttom_color,

    flex:1,
    height: 60,
    justifyContent: 'center',
  },
  add_btn: {

    backgroundColor: '#e28c39',
    alignItems: 'center',
    width: '45%',
    height: 40,
    justifyContent: 'center', borderRadius: 20
  },
})