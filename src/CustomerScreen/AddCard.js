import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, ImageBackground, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
  const { getCardDetails, addCard, updateCard } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [id, setId] = useState() //card_id : it will be undefined if there are no previous cards
  const { control, handleSubmit, reset, formState } = useForm();

  const onSubmit = async data => {
    console.log({ ...data, id });
    setLoading(true);
    id ? await updateCard({ ...data, id }) : await addCard(data) // if id is not undefined that means user is going to edit the card details.
    setLoading(false);
  };

  useEffect(() => getUserCardDetails(), []);

  const getUserCardDetails = async () => {
    setFetching(true);
    let json = await getCardDetails();
    console.log(json);
    setFetching(false);
    if (json?.response && json?.data?.length > 0) {
      reset({ ...json.data[0], })
      setId(json.data[0]?.id)
    }
  };

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <LoadingView fetching={fetching} loading={loading}>
        <ScrollView style={styles.container}>
          <ControllerInput
            control={control}
            errors={formState.errors}
            rules={{ required: true }}
            fieldName="card_number"
            placeholder="Card Number"
            keyboardType="numeric"
            curved
          />
          <ControllerInput
            control={control}
            errors={formState.errors}
            rules={{ required: true }}
            fieldName="holder_name"
            placeholder="Name on Card"
            keyboardType="numeric"
            curved
          />
          <View style={{ flexDirection: 'row' }}>
            <ControllerInput
              containerStyle={{ width: '48%' }}
              control={control}
              errors={formState.errors}
              rules={{ required: true }}
              fieldName="expiry_month"
              placeholder="Expire Month"
              keyboardType="numeric"
              curved
            />
            <View style={{ width: 10, height: 10 }} />
            <ControllerInput
              containerStyle={{ width: '48%' }}
              control={control}
              errors={formState.errors}
              rules={{ required: true }}
              fieldName="expiry_year"
              placeholder="Expire Year"
              keyboardType="numeric"
              curved
            />
          </View>
          <ControllerInput
            control={control}
            errors={formState.errors}
            fieldName="cvv_no"
            placeholder="CVV Number"
            keyboardType="numeric"
            curved
            rules={{ required: true }}
          />
          <CtaButton onPress={handleSubmit(onSubmit)} primary title="Save" style={{ width: '100%', marginTop: 8 }} />
        </ScrollView>
      </LoadingView>
    </ImageBackground>
  );
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
