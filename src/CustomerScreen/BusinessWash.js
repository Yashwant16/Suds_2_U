import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../../Constants/Colors';
export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: '', area: '', length: '', width: ''
    }
  }




  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <SafeAreaView />
        <View style={{ alignItems: 'center', width: '100%', padding: 18, flex: 1 }}>


          <Text style={{ fontSize: 18, textAlign: 'center' }}>For surface cleaning at your home or business our services are $ 0.15 cents per square foot</Text>
          <Text style={{ fontSize: 18, marginTop: 30 }}>AREA = LENGTH X WIDTH</Text>
          <View style={{ marginTop: 30, padding: 10, flex: 1, width: '100%' }}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>Area surface in square feet</Text>
            <TextInput
              style={styles.auth_textInput}
              onChangeText={(length) => this.setState({ length })}
              value={this.state.length}
              keyboardType={'numeric'}
              placeholder="Length"
              autoCapitalize='none' />

            <TextInput
              style={styles.auth_textInput}
              onChangeText={(width) => this.setState({ width })}
              value={this.state.width}
              keyboardType={'numeric'}
              placeholder="Width"
              autoCapitalize='none' />
          </View>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              elevation={5}
              onPress={() => { navigation.navigate(' Business wash '); }}
              style={styles.auth_btn}
              underlayColor='gray'
              activeOpacity={0.8} >
              <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Continue</Text>

            </TouchableOpacity>
            <TouchableOpacity
              elevation={5}
              onPress={() => { }}
              style={styles.auth_btn}
              underlayColor='gray'
              activeOpacity={0.8} >
              <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Cancel</Text>

            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 20,
    padding: 15,
    borderBottomWidth: 0,
    backgroundColor: '#f5f5f5',
    height: 45,
    color: Colors.text_color,
    marginTop: 10,
  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.buttom_color,

    width: '50%',
    height: 65,
    justifyContent: 'center',
  },
  add_btn: {

    backgroundColor: '#e28c39',
    alignItems: 'center',
    width: '45%',
    height: 40,
    justifyContent: 'center', borderRadius: 20
  },
})