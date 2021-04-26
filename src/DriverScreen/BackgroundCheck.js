import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Colors from '../../Constants/Colors';
import {ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
const BackgroundCheck = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <ScrollView style={{}}>
          <View style={{padding: 21, flex: 1, marginBottom: 30}}>
            <Text style={{fontSize: 16, marginBottom: 50}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>

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
            width:"100%",
            borderTopColor:'#ddd',
            borderTopWidth:1
          }}>
          <CheckBox title="Recieve a free copy of my background report." containerStyle={{flex:1}} checked={isSelected}   onPress={() => setSelection(curr=>!curr)}/>
          {/* <CheckBox
            center
            title="Click Here to Remove This Item"
            iconRight
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            checkedColor="red"
            checked={false}
          /> */}
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <TouchableOpacity
            elevation={5}
            onPress={() => navigation.navigate('TERMS & CONDITIONS')}
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
