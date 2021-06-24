import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, ImageBackground, StyleSheet, Alert, TouchableOpacity, View, Text } from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CtaButton from '../Components/CtaButton';
import CustomPicker from '../Components/CustomPicker';
import LoadingView from '../Components/LoadingView';
import { BookingContext } from '../Providers/BookingProvider';
import { launchImageLibrary } from 'react-native-image-picker';

const AddNewVehicle = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState,
  } = useForm();
  const { getMake, getYear, getModel, addNewVehicle, getVehicles } = useContext(BookingContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0)


  const getYearList = async () => {
    const selectedMake = getValues('make')?.name;
    if (selectedMake) return await getYear(selectedMake);
    else Alert.alert('Select Make', 'Please select a make first');
  };

  const getModelList = async () => {
    const selectedYear = getValues('year')?.name;
    if (selectedYear) return await getModel(selectedYear);
    else Alert.alert('Select Year', 'Please select a year first');
  };

  const onSubmit = async data => {
    console.log(data)
    if (selectedImage == 0) {
      setSelectedImage(undefined)
      return
    }
    setLoading(true);
    let success = await addNewVehicle({ ...data, make: data.make.name, year: data.year.name, model: data.model.name, vehicle_type: 1, image: selectedImage });
    setLoading(false);
    if (success) {
      navigation.goBack()
      getVehicles()
    }
  };

  const imageSelectCallBack = (res) => {
    if (res.didCancel) return
    console.log(res?.assets);
    setSelectedImage(res?.assets[0])
  }


  return (
    <ImageBackground style={styles.imgBg} source={require('../../Assets/bg_img.png')}>
      <LoadingView fetching={fetching} loading={loading}>
        <ScrollView style={styles.container}>
          <CustomPicker
            asynFunction={getMake}
            fieldName="make"
            rules={{ required: true }}
            control={control}
            errors={formState?.errors}
            label="Make"
          />
          <CustomPicker
            asynFunction={getYearList}
            fieldName="year"
            rules={{ required: true }}
            control={control}
            errors={formState?.errors}
            label="Year"
          />
          <CustomPicker
            asynFunction={getModelList}
            fieldName="model"
            rules={{ required: true }}
            control={control}
            errors={formState?.errors}
            label="Model"
          />
          <ControllerInput
            control={control}
            errors={formState?.errors}
            rules={{ required: true }}
            fieldName="engine"
            placeholder="Engine"
            curved
          />
          <TouchableOpacity onPressIn={() => launchImageLibrary({}, imageSelectCallBack)} style={{ backgroundColor: 'white', borderRadius: 30, padding: 20, marginTop: 8, alignItems: 'center' }}>
            <View style={{ width: 50, height: 50, padding: 15, backgroundColor: Colors.blue_color, alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center' }}>
              <Image style={{ width: 35, height: 35, }} source={require('../../Assets/camera.png')} />
            </View>
            <Text style={{ color: '#999', paddingTop: 10 }}>Upload car photo</Text>
          </TouchableOpacity>
          <Error error={selectedImage == undefined ? { type: 'pattern' } : undefined} label='Image' />
          <CtaButton onPress={handleSubmit(onSubmit)} primary title="Continue" style={{ width: '100%', marginTop: 8 }} />
        </ScrollView>
      </LoadingView>
    </ImageBackground>
  );
};

export default AddNewVehicle;

const Error = ({ error, label }) => {
  if (!error) return null;
  const capitalizeFistLetter = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  const errorText = useMemo(() => {
    if (error.type == 'pattern') return `Please select an ${label.toLowerCase()}`;
    if (error.type == 'required') return `${capitalizeFistLetter(label)} is required`;
  }, [error]);
  return <Text style={{ color: 'red' }}>{errorText}</Text>;
};

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
