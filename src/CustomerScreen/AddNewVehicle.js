import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, ImageBackground,Picker ,SafeAreaView} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
// import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Make: "",
      Model: '',
      Year: '',
      Engine: '',
      cvv_no: '',
      password: "",
      choosenIndex: 0 ,
    }
  }
  addVehicle = async () => {
    let user_token = await AsyncStorage.getItem('user_token');
    this.setState({ isLoading: true })

    let params = {
        user_id:this.state.user_id,
        make:this.state.Make,
        year:this.state.Year,
        model:this.state.Model,
        engine:this.state.Engine,
        vehicle_type:this.state.vehicle_type,
        category_id:this.state.category_id,
        image:this.state.image,
    };
    return fetch(BASE_URL + 'addVehicle', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + user_token,
            Accept: 'application/json',
            // 'App-Key': 'ABCDEFGHIJK',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ isLoading: false })
            console.log("responseJson onLoginPressHandle", responseJson)
            if (responseJson.success === true) {
                this.props.navigation.navigate('App')
              
                // this.props.navigation.navigate('Main')
            }
            else if (responseJson.success === false) {
                // alert(responseJson.message)
            }
        })
        .catch((error) => {
            this.setState({ isLoading: false })
            console.error(error);
        });

};
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
     
        <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
          <SafeAreaView />
          <ScrollView>
          <View style={{ alignItems: 'center', marginTop: 15,flex:1 }}>
          {/* <Picker style={styles.pickerStyle}  
                        // selectedValue={this.state.language}  
                        // onValueChange={(itemValue, itemPosition) =>  
                        //     this.setState({language: itemValue, choosenIndex: itemPosition})}  
                    >  
                     <Picker.Item label="Select" value="" /> 
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>  */}
                <View  style={{ flex:1,
    width: '93%',
    borderWidth: 0,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    // height: 50,
    color: '#000',
    borderRadius: 25, paddingLeft: 15,
    marginTop: 10,
    
    }}> 
              
<DropDownPicker

    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    dropDownStyle={{backgroundColor:'red',shadowOpacity:1}}
    defaultIndex={0}
    containerStyle={{height:50,width:'93%',borderRadius:30}}
   style={{borderRadius:60,height:60,width:'93%',borderColor:'#fff',}}
   
    onChangeItem={item => console.log(item.label, item.value)}
/>
</View> 
<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(Make) => this.setState({ Make })}
              value={this.state.Make}
              placeholder="Make"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(Year) => this.setState({ Year })}
              value={this.state.Year}
              placeholder="Year"
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
                 <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(Model) => this.setState({ Model })}
              value={this.state.Model}
              placeholder="Model"
              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />

            <TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(Engine) => this.setState({ Engine })}
              value={this.state.Engine}
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
              onPress={() => { navigation.navigate('Select a Vender'); }}
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

