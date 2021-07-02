import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Rating } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import LoadingView from '../Components/LoadingView';
import { navigate } from '../Navigation/NavigationService';
import { LOADING } from '../Providers';
import { BookingContext } from '../Providers/BookingProvider';

const SelectVendor = ({ route }) => {

  const { getVendor, setCurrentBooking } = useContext(BookingContext)
  const [fetching, setFetching] = useState(true)
  const [vendors, setVendors] = useState([])

  useEffect(() => getVendorList(), [])

  const getVendorList = async () => {
    setFetching(true)
    let json = await getVendor()
    setFetching(false)
    if (json?.data) setVendors(json.data)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <LoadingView fetching={fetching} fetchingColor={Colors.blue_color}>
        <FlatList
          keyExtractor={(item, i) => i}
          data={vendors}
          renderItem={({ item, index }) => <RenderItem item={item} index={index} route={route} onSelect={()=>setCurrentBooking(cv=>({...cv, washer_id : item.id}))} />}
          ItemSeparatorComponent={() => <View style={{ margin: -7.5 }} />} />
      </LoadingView>
    </View>
  );

}

export default SelectVendor

const RenderItem = ({ item, index, route }) => (
  <TouchableOpacity style={[styles.card]} onPress={() => { navigate('Vender Profile', route.params) }} >
    <Image style={{ width: '100%', height: 180, borderRadius: 5, opacity:0.5 }} source={{ uri: "https://i.pinimg.com/474x/cb/b4/15/cbb4158c9b17117a2b58fbbcdc99ab14.jpg" }} />
    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly', alignSelf: 'flex-start', alignItems: 'center' }}>
      <Text style={{ marginRight: 15, fontSize: 18, color: '#555', fontWeight: 'bold' }}>{item.name}</Text>
      <Rating readonly startingValue={parseFloat(item.rating)} imageSize={20} />
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#555',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    borderRadius: 10,
    elevation: 5,
    margin: 15,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})