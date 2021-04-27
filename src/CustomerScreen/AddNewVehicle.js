import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, ImageBackground,Picker ,SafeAreaView} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
// import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native';

export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      card_no: "",
      card_name: '',
      expire_month: '',
      expire_year: '',
      cvv_no: '',
      password: "",choosenIndex: 0 
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
        {/* <Header
          statusBarProps={{ barStyle: 'light-content' }}
          height={82}
          containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
          backgroundColor={Colors.blue_color}
          placement={"left"}
          leftComponent={
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('BookWasher_Now') }}>
              <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />

            </TouchableOpacity>
          }
          centerComponent={
            <Text style={{ width: '100%', color: '#fff', fontWeight: '600', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>Add New Vehicle</Text>
          }
        /> */}

        <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
          <SafeAreaView />
          <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
          {/* <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                     <Picker.Item label="Select" value="" /> 
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>  */}

<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(cvv_no) => this.setState({ cvv_no })}
              value={this.state.cvv_no}
              placeholder="Make"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(cvv_no) => this.setState({ cvv_no })}
              value={this.state.cvv_no}
              placeholder="Year"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
                 <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(cvv_no) => this.setState({ cvv_no })}
              value={this.state.cvv_no}
              placeholder="Model"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(cvv_no) => this.setState({ cvv_no })}
              value={this.state.cvv_no}
              placeholder="Engine"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

              <View style={[styles.camera_textInput]}>
<TouchableOpacity style={{alignItems:'center'}}>
  <View style={{backgroundColor:Colors.blue_color,width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:5}}>
<Image style={{ width: 35, height:35, tintColor: '#000', alignItems:'center' ,backgroundColor:Colors.blue_color, }} source={require('../../Assets/icon/camera.png')} />
</View>
<Text style={{fontSize:16,color:'#ccc'}}>Upload Car Photo</Text>
</TouchableOpacity>
              </View>
            <TouchableOpacity
              elevation={5}
              onPress={() => { navigation.navigate('Select Package'); }}
              style={styles.auth_btn}
              underlayColor='gray'
              activeOpacity={0.8}
            // disabled={this.state.disableBtn}
            >
              <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Continue </Text>
            </TouchableOpacity>
            
          </View>
          </ScrollView>
          <SafeAreaView />
        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  auth_textInput: {

    alignSelf: 'center',
    width: '93%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    height: 50,
    color: '#000',
    borderRadius: 25, paddingLeft: 15,
    marginTop: 10,

  },
  camera_textInput: {

    alignItems: 'center',
    justifyContent:'center',
    width: '93%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    height: 110,
    color: '#000',
    borderRadius: 50, paddingLeft: 15,
    marginTop: 10,

  },
  short_textInput: {

    alignSelf: 'center',
    width: '46%',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    height: 50,
    color: '#000',
    borderRadius: 25, paddingLeft: 15,
    marginTop: 10,

  },
  auth_btn: {
    marginTop: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.blue_color,
    borderRadius: 5,
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  container: {  
    flex: 1,  
   
},  
textStyle:{  
   margin: 24,  
   fontSize: 16,  
   
  
},  
pickerStyle:{  
   height: 50,  
   width: "93%",  
 fontSize:11, 
   backgroundColor:'#fff',
   borderRadius:25,
   justifyContent: 'center', 

}  
})

