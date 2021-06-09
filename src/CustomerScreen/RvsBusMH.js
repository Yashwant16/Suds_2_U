import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar,SafeAreaView, TouchableOpacity, TextInput,Button,FlatList ,ImageBackground} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isChecked:'',
        
      }
    }
  


    render() {
      const { navigation } = this.props;
      return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
               <SafeAreaView/>
                <View style={{width:'100%',padding:21}}> 
         
        <Text style={{fontSize:21,fontWeight:'bold'}}>RV's, Bus, M.V.</Text>

        <Text style={{marginTop:10}}>Pricing for all RV's, Buses, Mottorhomes are price at $6.00 per foot and are calculated below</Text>
        <Text style={{fontSize:18,marginTop:15}}>How many feet is your assets?</Text>
        <View style ={{width:'98%', padding:13,marginTop:25, height:50,flexDirection:'row',justifyContent:'space-between',borderRadius:25,borderWidth:1}}>
<Text style={{marginLeft:5,fontSize:16}}>Selects Feet</Text>
<Image style={{ width: 22, height: 22, tintColor: '#aaa', marginLeft: 10 }} source={require('../../Assets/down.png')} />
        </View>
       </View>
       <View style={{justifyContent:'flex-end',flex:1,alignItems:'center',marginTop:10}}>
       {/* <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Estimates Wash Duration 30 Mins</Text>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Sub-Total: $99.00</Text>
                </View> */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { navigation.navigate('Select Package'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Continue</Text>
                         
                        </TouchableOpacity>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => {  }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Cancel</Text>
                         
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
        width: '93%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        height: 40,
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
      
      backgroundColor:'#e28c39',
  alignItems:'center',
      width: '45%',
      height: 40,
      justifyContent: 'center',borderRadius:20
  },
})