import React from 'react';
import {StyleSheet, Button, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native';

import {Header, Icon, Avatar} from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {ScrollView} from 'react-native';
import CustomHeader from '../Components/CustomHeader';
export default class SignUpUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <CustomHeader title="DISCLAIMER & TERMS" onLeftButtonPress={() => this.props.navigation.goBack()} />
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <ScrollView style={{}}>
            <View style={{padding: 21, flex: 1, marginBottom: 30}}>
              <Text style={{fontSize: 16, marginBottom: 20}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
              </Text>
            </View>
          </ScrollView>
          <View style={{justifyContent: 'flex-end', flex: 1}}>
              <TouchableOpacity
                elevation={5}
                onPress={() => this.props.navigation.getParam('type') == 'Washer' ?
                  this.props.navigation.navigate('DriverApp') :this.props.navigation.navigate('CustomerApp')}
                style={styles.auth_btn}
                underlayColor="gray"
                activeOpacity={0.8}
                // disabled={this.state.disableBtn}
              >
                <Text style={{fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold'}}>AGREE & CONTINUE</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
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
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.dark_orange,

    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
});
