import React, {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {View, ImageBackground, StyleSheet, Image, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CtaButton from '../Components/CtaButton';
import CustomPicker from '../Components/CustomPicker';
import LoadingView from '../Components/LoadingView';
import {AuthContext} from '../Providers/AuthProvider';

const CompleteProfile = ({navigation, route}) => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: {errors},
  } = useForm();
  const {completeProfile, getCountries, getStates, getCities, getUserDetails} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    getUserDetails()
      .then(json => {
        const {data} = json;
        if (json) {
          reset({
            ...data,
            country: {name: data.country_name, id: data.country},
            state: {name: data.state_name, id: data.state},
            city: {name: data.city_name, id: data.city},
            phone_number: data.mobile,
          });
        }
      })
      .finally(() => setFetching(false));
  }, []);

  const getStateList = async () => {
    const selectedCountryId = getValues('country')?.id;
    if (selectedCountryId) return await getStates(selectedCountryId);
    else Alert.alert('Select country', 'Please select a country first');
  };

  const getCityList = async () => {
    const selectedStateId = getValues('state')?.id;
    if (selectedStateId) return await getCities(selectedStateId);
    else Alert.alert('Select state', 'Please select a state first');
  };

  const onSubmit = async data => {
    setLoading(true);
    let success = await completeProfile({...data, country: data.country.id, state: data.state.id, city: data.city.id}, route.params?.authStack);
    setLoading(false);
    if (success) route.params?.authStack ? navigation.navigate('UPDATE DOCUMENT') : navigation.goBack();
  };

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <ScrollView>
        <LoadingView loading={loading} fetching={fetching}>
          <View style={styles.header}>
            <View style={{borderColor: 'white', borderWidth: 4, padding: 25, borderRadius: 15}}>
              <Image style={{width: 50, height: 50, tintColor: 'white'}} source={require('../../Assets/icon/camera.png')} />
            </View>
          </View>
          <View style={styles.container}>
            <ControllerInput
              control={control}
              errors={errors}
              rules={{required: true, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/}}
              fieldName="phone_number"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              curved
            />
            <ControllerInput
              control={control}
              errors={errors}
              rules={{required: true}}
              fieldName="preferred_method_of_contact"
              placeholder="Preferred Method Of Contact"
              curved
            />
            <ControllerInput
              control={control}
              errors={errors}
              rules={{required: true}}
              fieldName="complete_address"
              placeholder="Complete Address"
              curved
            />

            <CustomPicker
              asynFunction={getCountries}
              fieldName="country"
              rules={{required: true}}
              control={control}
              errors={errors}
              label="Country"
            />
            <CustomPicker asynFunction={getStateList} fieldName="state" rules={{required: true}} control={control} errors={errors} label="State" />
            <CustomPicker asynFunction={getCityList} fieldName="city" rules={{required: true}} control={control} errors={errors} label="City" />

            <ControllerInput control={control} errors={errors} rules={{required: true}} fieldName="hourly_rate" placeholder="Hourly Rate" curved />
            <CtaButton
              primary
              title={route.params?.authStack ? 'Continue' : 'Save'}
              onPress={handleSubmit(onSubmit)}
              style={{width: '100%', marginTop: 8}}
            />
          </View>
          <View style={{height: 32}} />
        </LoadingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default CompleteProfile;

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
  header: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue_color,
  },
});
