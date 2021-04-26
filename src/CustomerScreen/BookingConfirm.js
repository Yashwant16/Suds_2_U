import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import { ScrollView } from 'react-native';
// import { CheckBox } from 'react-native-elements'

export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: '',
            coupnecode:''

        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectAddOns') }}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>BOOKING CONFIRM</Text>
                    }
                />
    
                    <View style={{ alignItems: 'center', width: '100%',padding:21,flex:1 }}>

                    <Image style={{ width: 85, height: 85, tintColor: '#0AFF06', marginTop:30 }} source={require('../../Assets/checkmark.png')} />
                       
<Text style={{fontSize:22,marginVertical:10,fontWeight:'bold',color:'gray',marginTop:30}}>Booking Confirmed!</Text>
               
                                      
<Text style={{fontSize:16,marginVertical:1,fontWeight:'bold',color:'gray'}}>Your request has been Confirmed</Text>
<Text style={{fontSize:16,marginVertical:1,fontWeight:'bold',color:'gray',marginTop:15}}>Please find the trainer info. below</Text>
<Text style={{fontSize:18,marginVertical:1,fontWeight:'bold',color:'#3743FE',marginTop:25}}>Total Payment: $200.45</Text>
              
         
</View>
<View style={{flexDirection:'row',marginBottom:10,alignSelf:'center'}}>
<Image style={{ width: 25, height: 25, tintColor: '#24AE88',  }} source={require('../../Assets/checkdark.png')} />
<Text style={{fontSize:16,marginVertical:1,fontWeight:'bold',textAlign:'center',marginLeft:5}}>Booking Confirm</Text>
</View>
<View style={{width:'90%',height:'18%',backgroundColor:'#fff',alignSelf:'center',marginBottom:30,shadowOpacity:0.8,shadowColor:'#aaa',justifyContent:'center'}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text>Booking Date/Time : </Text>
        <Text style={{color:Colors.dark_orange,backgroundColor:'#000',padding:4}}>Jan 29 2021 | 9:30 AM</Text>
    </View>
    <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',padding:10}}>
    <Image style={{ width: 25, height: 25,  }} source={require('../../Assets/images.jpeg')} />
        <Text style={{padding:4,marginLeft:5,fontWeight:'bold'}}>Donnie McC.</Text>
    </View>
 
    <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',justifyContent:'center',}}>
    <View style={{flexDirection:'row',padding:10,width:'50%'}}>
    <Image style={{ width: 25, height: 25, tintColor: '#0EFF74',  }} source={require('../../Assets/call.png')} />
        <Text style={{padding:4,marginLeft:5,fontSize:12}}>CALL TRAINNER </Text>
    </View>
    <View style={{width:1,height:50,backgroundColor:'#aaa'}}/>
    <View style={{flexDirection:'row',padding:10,width:'50%'}}>
    <Image style={{ width: 25, height: 25, tintColor: 'red',  }} source={require('../../Assets/error.png')} />
        <Text style={{padding:4,marginLeft:5,fontSize:12}}>CANCEL REQUEST </Text>
    </View>
    </View>
    {/* <View style={{width:'100%',height:1,backgroundColor:'#aaa'}}/> */}
</View>
                    
                    <View style={{backgroundColor:'red', justifyContent: 'flex-end' ,flexDirection:'row'}}>



                  
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate('BookingDetail'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Go to Home Screen</Text>

                        </TouchableOpacity>

                    </View>
                   
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    auth_textInput: {

        alignSelf: 'center',
        width: '60%',
        // borderWidth: 1,
        borderBottomWidth: 0,
        height: 40,fontSize:16,
        color: Colors.text_color,
        marginTop: 5,
        backgroundColor:'#fff',padding:5,borderRadius:5

    },
    auth_btn: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#e28c39',

        width: '100%',
        height: 65,
        justifyContent: 'center',
    },
    auth_btn1: {

        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.blue_color,

        width: '50%',
        height: 65,
        justifyContent: 'center',
    },
})