import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Colors from '../../Constants/Colors';
import {ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {AuthContext} from '../Providers/AuthProvider';
import LoadingView from '../Components/LoadingView';
const BackgroundCheck = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [text, setText] = useState('');
  const {getBackgroundCheckContent, saveAgreement} = useContext(AuthContext);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFetching(true);
    getBackgroundCheckContent().then(json => {
      if (json) setText(json.data.description);
      setFetching(false);
    });
  },[]);
  const onPress = async () => {
    setLoading(true);
    let json = await saveAgreement();
    setLoading(false);
    if (json) navigation.navigate('TERMS & CONDITIONS');
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <LoadingView fetching={fetching}>
          <View style={{padding: 21, flex: 1, marginBottom: 30}}>
            <Text style={{fontSize: 16, marginBottom: 50}}>{text}</Text>
          </View>
        </LoadingView>

        <View
          style={{
            padding: 10,
            position: 'absolute',
            bottom: 60,
            textAlign: 'center',
            left: 0,
            right: 0,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '100%',
            borderTopColor: '#ddd',
            borderTopWidth: 1,
          }}>
          <CheckBox
            title="Recieve a free copy of my background report."
            containerStyle={{flex: 1}}
            checked={isSelected}
            onPress={() => setSelection(curr => !curr)}
          />
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <TouchableOpacity
            elevation={5}
            onPress={onPress}
            style={styles.auth_btn}
            underlayColor="gray"
            activeOpacity={0.8}>
            <Text style={{fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold'}}>AGREE & CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BackgroundCheck;
const styles = StyleSheet.create({
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.dark_orange,
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
});
