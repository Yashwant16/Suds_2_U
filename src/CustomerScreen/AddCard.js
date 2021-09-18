import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { View, ImageBackground, StyleSheet, Alert,ScrollView } from 'react-native';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CtaButton from '../Components/CtaButton';
import CustomPicker from '../Components/CustomPicker';
import LoadingView from '../Components/LoadingView';
import { AuthContext } from '../Providers/AuthProvider';

const routingNumbers = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
  { name: '3', id: 3 },
  { name: '4', id: 4 },
];

const asynFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: routingNumbers });
    }, 2000);
  });
};

const AddCard = () => {


  const Card = ()=>(
    <View style={{ borderRadius: 20, margin: 20, marginBottom: 0, padding: 20, backgroundColor: Colors.blue_color, elevation: 15, shadowColor: '#000', overflow : 'hidden' }}>
    <View style={{backgroundColor : 'black', position : 'absolute', top : 0, right : 0, height : 60, width : 100, borderBottomLeftRadius : 30, opacity : .15}} />
    <View style={{backgroundColor : '#00000010', position : 'absolute', bottom : 0, right : 0,left : 0, height : 80, opacity : 1, borderTopWidth : 1, borderTopColor : '#ffffff50'}} />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>**** **** **** 4242</Text>
      <Image resizeMode="contain" style={{ height: 20, width: 50 }} source={{ uri: 'https://pngpress.com/wp-content/uploads/2020/03/Visa-Logo-PNG-Image.png' }} />
    </View>
  
  
    <View style={{ flexDirection: 'row', justifyContent : 'space-between' }}>
      <View style={{ paddingTop: 65 }}>
        <Text style={{ color: 'white', fontSize: 16, opacity: .7 }}>EXPIRATION DATE</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>09/01/21</Text>
      </View>
      <View style={{ paddingTop: 65 }}>
        <Text style={{ color: 'white', fontSize: 16, opacity: .7 }}>CVC</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>854</Text>
      </View>
      <View style={{ paddingTop: 65 }}>
        <Text style={{ color: 'white', fontSize: 16, opacity: .7 }}>POSTAL CODE</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>2000</Text>
      </View>
    </View>
  
  </View>
  )

  return (
    <ScrollView contentContainerStyle={{flexGrow :1}}>
      <Card/>
      <Card/>
    </ScrollView>
  )










  // const { getCardDetails, addCard, updateCard } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  // const [fetching, setFetching] = useState(true);
  // const [id, setId] = useState() //card_id : it will be undefined if there are no previous cards
  // const { control, handleSubmit, reset, formState } = useForm();

  // const onSubmit = async data => {
  //   console.log({ ...data, id });
  //   setLoading(true);
  //   id ? await updateCard({ ...data, id }) : await addCard(data) // if id is not undefined that means user is going to edit the card details.
  //   setLoading(false);
  // };

  // useEffect(() => getUserCardDetails(), []);

  // const getUserCardDetails = async () => {
  //   setFetching(true);
  //   let json = await getCardDetails();
  //   console.log(json);
  //   setFetching(false);
  //   if (json?.response && json?.data?.length > 0) {
  //     reset({ ...json.data[0], })
  //     setId(json.data[0]?.id)
  //   }
  // };

  // return (
  //   <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
  //     <LoadingView fetching={fetching} loading={loading}>
  //       <ScrollView style={styles.container}>
  //         <ControllerInput
  //           control={control}
  //           errors={formState.errors}
  //           rules={{ required: true }}
  //           fieldName="card_number"
  //           placeholder="Card Number"
  //           keyboardType="numeric"
  //           curved
  //         />
  //         <ControllerInput
  //           control={control}
  //           errors={formState.errors}
  //           rules={{ required: true }}
  //           fieldName="holder_name"
  //           placeholder="Name on Card"
  //           keyboardType="numeric"
  //           curved
  //         />
  //         <View style={{ flexDirection: 'row' }}>
  //           <ControllerInput
  //             containerStyle={{ width: '48%' }}
  //             control={control}
  //             errors={formState.errors}
  //             rules={{ required: true }}
  //             fieldName="expiry_month"
  //             placeholder="Expire Month"
  //             keyboardType="numeric"
  //             curved
  //           />
  //           <View style={{ width: 10, height: 10 }} />
  //           <ControllerInput
  //             containerStyle={{ width: '48%' }}
  //             control={control}
  //             errors={formState.errors}
  //             rules={{ required: true }}
  //             fieldName="expiry_year"
  //             placeholder="Expire Year"
  //             keyboardType="numeric"
  //             curved
  //           />
  //         </View>
  //         <ControllerInput
  //           control={control}
  //           errors={formState.errors}
  //           fieldName="cvv_no"
  //           placeholder="CVV Number"
  //           keyboardType="numeric"
  //           curved
  //           rules={{ required: true }}
  //         />
  //         <CtaButton onPress={handleSubmit(onSubmit)} primary title="Save" style={{ width: '100%', marginTop: 8 }} />
  //       </ScrollView>
  //     </LoadingView>
  //   </ImageBackground>
  // );
};

export default AddCard;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  text: {
    fontWeight: 'bold',
    padding: 18,
    fontSize: 16,
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 8,
  },
});
