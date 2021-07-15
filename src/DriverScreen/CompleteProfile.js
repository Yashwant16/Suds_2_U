import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CtaButton from '../Components/CtaButton';
import CustomPicker from '../Components/CustomPicker';
import LoadingView from '../Components/LoadingView';
import { AuthContext } from '../Providers/AuthProvider';
import { launchImageLibrary } from 'react-native-image-picker';
import { partialProfileUrl } from '../Providers';
import { ActivityIndicator } from 'react-native';

const CompleteProfile = ({ navigation, route }) => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const { completeProfile, getStates, getCities, getUserDetails } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [selectedImage, setSelectedImage] = useState()

  useEffect(() => {
    setFetching(true);
    setLoading(false)
    getUserDetails()
      .then(json => {
        const { data } = json;
        if (data.image) setSelectedImage({ uri: partialProfileUrl + data.image })
        if (json) {
          reset({
            ...data,
            // country: {name: data.country_name, id: data.country},
            state: { name: data.state_name, id: data.state },
            city: { name: data.city_name, id: data.city },
            phone_number: data.mobile,
          });
        }
      })
      .finally(() => setFetching(false));
  }, []);

  const getStateList = async () => {
    return await getStates(231);
  };

  const getCityList = async () => {
    const selectedStateId = getValues('state')?.id;
    if (selectedStateId) return await getCities(selectedStateId);
    else Alert.alert('Select state', 'Please select a state first');
  };

  const onSubmit = async data => {
    console.log(data)
    if (!selectedImage) Alert.alert('Picture', 'Please insert a profile picture.')
    setLoading(true);
    let success = await completeProfile({ ...data, country: 231, state: data.state.id, city: data.city.id, phone_number: data.mobile, image: selectedImage }, route.params?.authStack);
    setLoading(false);
    if (success) route.params?.authStack ? navigation.navigate('UPDATE DOCUMENT') : navigation.goBack();
  };

  const imageSelectCallBack = (res) => {
    if (res.didCancel) return
    console.log(res?.assets);
    setSelectedImage(res?.assets[0])
  }

  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <ScrollView>
        <LoadingView loading={loading} fetching={fetching}>
          <View style={styles.header}>
            <TouchableOpacity onPressIn={() => launchImageLibrary({}, imageSelectCallBack)} style={{ borderColor: 'white', borderWidth: 4, padding: selectedImage ? 0 : 25, borderRadius: 15 }}>
              <ActivityIndicator color="white" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
              <Image style={{ width: selectedImage ? 100 : 50, height: selectedImage ? 100 : 50, borderRadius: selectedImage ? 11 : 0, resizeMode: 'cover' }} source={selectedImage ? selectedImage : require('../../Assets/icon/camera.png')} />
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
            <CustomPicker asynFunction={getStateList} fieldName="state" rules={{ required: true }} control={control} errors={errors} label="State" />
            <CustomPicker asynFunction={getCityList} fieldName="city" rules={{ required: true }} control={control} errors={errors} label="City" />

            <ControllerInput control={control} errors={errors} rules={{ required: true }} fieldName="hourly_rate" placeholder="Hourly Rate" curved />
            <CtaButton
              primary
              title={route.params?.authStack ? 'Continue' : 'Save'}
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
