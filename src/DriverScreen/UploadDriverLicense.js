import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';
import ControllerInput from '../Components/ControllerInput';
import CustomInput from '../Components/CustomInput';
import LoadingView from '../Components/LoadingView';
import { AuthContext } from '../Providers/AuthProvider';
import { launchImageLibrary } from 'react-native-image-picker';

const partialImageUrl = "http://suds-2-u.com/sudsadmin/public/document/"

const UploadDriverLicense = ({ navigation, route }) => {
  const { updateDrivingLicense, getDrivingLicenseDetails, documentVerified } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true)
  const [selectedImage, setSelectedImage] = useState()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async data => {
    console.log(data)
    setLoading(true);
    let success = await updateDrivingLicense({ ...data, image: selectedImage });
    if (success) await documentVerified()
    if (success) route.params?.authStack ? navigation.navigate('BACKGROUND CHECK') : navigation.goBack();
    setLoading(false);
  };

  useEffect(() => {
    if (route.params?.authStack) { setFetching(false); return } // Dont try to get user license data if it is on the auth stack
    setFetching(true)
    getDrivingLicenseDetails().then(json => {
      setFetching(false)
      if (json?.data?.license_image) setSelectedImage({ uri: partialImageUrl + json.data.license_image })
      if (json) reset(json.data)
    }).catch(e => console.log("E", e))
  }, [])

  const imageSelectCallBack = (res) => {
    if (res.didCancel) return
    console.log(res?.assets);
    setSelectedImage(res?.assets[0])
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <LoadingView loading={loading} fetchingColor={Colors.blue_color} fetching={fetching}>

          <TouchableOpacity onPressIn={() => launchImageLibrary({}, imageSelectCallBack)} style={{ height: 250, width: '100%', backgroundColor: '#eee' }}>
            <Image
              style={{ height: 210, width: '100%', resizeMode: 'center' }}
              source={selectedImage ? selectedImage : { uri: 'https://image.flaticon.com/icons/png/512/1655/1655290.png' }}
            // source={{ uri: 'https://image.flaticon.com/icons/png/512/1655/1655290.png' }}
            />
            <Text style={{ color: '#ccc', textAlign: 'center', fontSize: 20 }}>TAKE A PHOTO</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', paddingTop: 16 }}>
            <ControllerInput
              label="LICENSE NUMBER"
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="license_number"
              keyboardType="numeric"
            />
            <ControllerInput
              label="LICENSE CLASSIFICATION"
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="license_classification"
            />
            <ControllerInput
              label="ISSUED ON"
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="issued_on"
              keyboardType="numeric"
            />
            <ControllerInput
              label="EXPIRY DATE"
              control={control}
              errors={errors}
              rules={{ required: true }}
              fieldName="expiry_date"
              keyboardType="numeric"
            />
            <CardBtn onPress={handleSubmit(onSubmit)} isFromAuthStack={route.params.authStack} navigation={navigation} />
          </View>

        </LoadingView>
      </ScrollView>
    </View>
  );
};

export default UploadDriverLicense;
const CardBtn = ({ isFromAuthStack, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor: Colors.blue_color, padding: 16 }]}>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{isFromAuthStack ? 'CONTINUE' : 'DONE'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#999',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    borderRadius: 3,
    elevation: 5,
    marginTop: 40,
    marginBottom: 12,
  },
});
