import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity, TextInput, Button, FlatList, ImageBackground } from 'react-native';

import { Header, Icon, Avatar, Rating } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import CtaButton from '../Components/CtaButton';
// import { CheckBox } from 'react-native-elements'
const fakeWashImages = [
  'https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
  'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/01/carwash-1068x715.jpg',
  'https://closelocation.com/assets/img/car-wash.jpg',
  'https://www.thoughtco.com/thmb/blpiljxTk2RMiXXEYqfOQCVL5rw=/1885x1414/smart/filters:no_upscale()/family-washing-car-together-140873888-5c8baa6d46e0fb0001f8d008.jpg',
  'https://www.yorkshirepost.co.uk/images-i.jpimedia.uk/imagefetch/https://jpgreatcontent.co.uk/wp-content/uploads/2021/02/shutterstock_793083208.jpg?width=640&enable=upscale',
  'https://thumbs.dreamstime.com/b/young-african-man-casual-wear-washing-wheels-his-luxury-car-self-car-wash-station-outdoors-using-high-pressure-young-191802551.jpg',
  'https://media.smallbiztrends.com/2018/05/shutterstock_682966966.jpg',
  'https://www.ncswash.com/wp-content/uploads/2020/05/Waves-Atmore-AL-11-775x320-1.jpg',
  'https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
  'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/01/carwash-1068x715.jpg',
  'https://closelocation.com/assets/img/car-wash.jpg',
  'https://www.thoughtco.com/thmb/blpiljxTk2RMiXXEYqfOQCVL5rw=/1885x1414/smart/filters:no_upscale()/family-washing-car-together-140873888-5c8baa6d46e0fb0001f8d008.jpg',
  'https://www.yorkshirepost.co.uk/images-i.jpimedia.uk/imagefetch/https://jpgreatcontent.co.uk/wp-content/uploads/2021/02/shutterstock_793083208.jpg?width=640&enable=upscale',
  'https://thumbs.dreamstime.com/b/young-african-man-casual-wear-washing-wheels-his-luxury-car-self-car-wash-station-outdoors-using-high-pressure-young-191802551.jpg',
  'https://media.smallbiztrends.com/2018/05/shutterstock_682966966.jpg',
  'https://www.ncswash.com/wp-content/uploads/2020/05/Waves-Atmore-AL-11-775x320-1.jpg',
  'https://images.theconversation.com/files/76578/original/image-20150331-1231-1ttwii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
  'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/01/carwash-1068x715.jpg',
  'https://closelocation.com/assets/img/car-wash.jpg',
  'https://www.thoughtco.com/thmb/blpiljxTk2RMiXXEYqfOQCVL5rw=/1885x1414/smart/filters:no_upscale()/family-washing-car-together-140873888-5c8baa6d46e0fb0001f8d008.jpg',
  'https://www.yorkshirepost.co.uk/images-i.jpimedia.uk/imagefetch/https://jpgreatcontent.co.uk/wp-content/uploads/2021/02/shutterstock_793083208.jpg?width=640&enable=upscale',
  'https://thumbs.dreamstime.com/b/young-african-man-casual-wear-washing-wheels-his-luxury-car-self-car-wash-station-outdoors-using-high-pressure-young-191802551.jpg',
  'https://media.smallbiztrends.com/2018/05/shutterstock_682966966.jpg',
  'https://www.ncswash.com/wp-content/uploads/2020/05/Waves-Atmore-AL-11-775x320-1.jpg'
]
const VendorProfile = ({navigation, route}) => {
  const [state, setState] = useState([

    {
      name: 'Car or Truck ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Tractor Trailors',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Boats ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Motorcycles ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },

    {
      name: 'Rv s, Bus, M.H. ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Car or Truck ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Tractor Trailors',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Boats ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Motorcycles ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },

    {
      name: 'Rv s, Bus, M.H. ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Heavy Equipment ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
    {
      name: 'Business Wash ',
      date: '22 Jan',
      dueAmount: '500 Rs',
      content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
      image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
      like: '25',
      comment: '50',
    },
  ])

  const renderItem = ({ item, index }) => (
    <View style={{ marginVertical: 10, marginHorizontal: 5 }}>
      <View style={{ flex: 1, }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 100, height: 100, borderRadius: 5 }} source={{ uri: fakeWashImages[index] }} />
        </View>

      </View>

    </View>
  )
  
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <SafeAreaView />
        <View style={styles.card}>
          <View style={{ backgroundColor: '#f5f5f5', borderRadius: 5, flex: 1, paddingHorizontal: 2.5, borderWidth: 1, borderColor: '#e5e5e5' }}>
            <FlatList
              numColumns={3}
              keyExtractor={(item, index) => index}
              style={{ width: '100%' }}
              showsVerticalScrollIndicator={false}
              data={state}
              ItemSeparatorComponent={() => <View style={{ margin: -5 }} />}
              renderItem={renderItem} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-evenly', alignSelf: 'flex-start', alignItems: 'center' }}>
            <Text style={{ marginRight: 15, fontSize: 18, color: '#555', fontWeight: 'bold' }}>Vendor's name</Text>
            <Rating readonly startingValue={Math.random() * 5} imageSize={20} />
          </View>
        </View>

        <View style={{ marginBottom: 15, alignItems: 'center' }}>
          <CtaButton onPress={() => { navigation.navigate('Schedule Book', route.params); }} title="Select time and date" primary />
          <CtaButton onPress={() => { }} title="Read Reviews" primary />
        </View>

      </View>
    );
  
}

export default VendorProfile

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
    marginTop: 10,
    marginBottom: 10,

    backgroundColor: Colors.buttom_color,

    width: '90%',
    height: 50, borderRadius: 25,
    justifyContent: 'center',
  },
  add_btn: {

    backgroundColor: '#e28c39',
    alignItems: 'center',
    width: '45%',
    height: 40,
    justifyContent: 'center', borderRadius: 20
  },
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
    alignItems: 'center',
    flex: 1
  },

})