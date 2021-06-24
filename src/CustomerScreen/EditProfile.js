import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, ImageBackground, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CtaButton from '../Components/CtaButton';
import CustomPicker from '../Components/CustomPicker';
import LoadingView from '../Components/LoadingView';
import { AuthContext } from '../Providers/AuthProvider';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfile = ({ navigation, route }) => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { completeProfile, getCountries, getStates, getCities, getUserDetails } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [selectedImage, setSelectedImage] = useState()

  useEffect(() => {
    setFetching(true);
    getUserDetails()
      .then(json => {
        const { data } = json;
        if (json) {
          reset({
            ...data,
            country: { name: data.country_name, id: data.country },
            state: { name: data.state_name, id: data.state },
            city: { name: data.city_name, id: data.city },
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
    let success = await completeProfile({ ...data, country: data.country.id, state: data.state.id, city: data.city.id, image : 'selectedImage' }, route.params?.authStack);
    setLoading(false);
    if (success) navigation.goBack();
  };

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <ScrollView>
        <LoadingView loading={loading} fetching={fetching}>
          <View style={styles.header}>
            <TouchableOpacity onPressIn={() => launchImageLibrary({}, (res) => {console.log(res?.assets[0]) ; setSelectedImage(res?.assets[0])})} style={{ borderColor: 'white', borderWidth: 4, padding: selectedImage ? 0 : 25 , borderRadius: 15 }}>
            <Image style={{ width: selectedImage ? 100 : 50, height: selectedImage ? 100 : 50, borderRadius : selectedImage ? 11 : 0, resizeMode: 'cover'}} source={selectedImage ? selectedImage : require('../../Assets/icon/camera.png') } />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <ControllerInput
              control={control}
              errors={errors}
              rules={{ required: true, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ }}
              fieldName="mobile"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              curved
            />
            <ControllerInput
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="preferred_method_of_contact"
              placeholder="Preferred Method Of Contact"
              curved
            />
            <ControllerInput
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="complete_address"
              placeholder="Complete Address"
              curved
            />

            <CustomPicker
              asynFunction={getCountries}
              fieldName="country"
              rules={{ required: true }}
              control={control}
              errors={errors}
              label="Country"
            />
            <CustomPicker asynFunction={getStateList} fieldName="state" rules={{ required: true }} control={control} errors={errors} label="State" />
            <CustomPicker asynFunction={getCityList} fieldName="city" rules={{ required: true }} control={control} errors={errors} label="City" />

            <CtaButton
              primary
              title={'Save'}
              onPress={handleSubmit(onSubmit)}
              style={{ width: '100%', marginTop: 8 }}
            />
          </View>
          <View style={{ height: 32 }} />
        </LoadingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default EditProfile;

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
