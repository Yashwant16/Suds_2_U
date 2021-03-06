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
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>REVIEW ORDER</Text>
                    }
                />
                <ImageBackground style={{ width: '100%', height: '100%', flex: 1, }} source={require('../../Assets/bg_img.png')}>
                    <SafeAreaView />
                    <ScrollView style={{marginBottom:31}}>
                    <View style={{ alignItems: 'center', width: '100%',padding:21 }}>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',}}>
<Text style={{color:'#fff',fontSize:16}}>Wash Location</Text>
<Text style={{alignItems:'flex-end',color:'#e28c39',fontWeight:'500',fontSize:16}}>Change</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>321 Main Street, Alama</Text>

</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>CA-94507</Text>

</View>
<View style={{width:'100%',height:0.5,backgroundColor:'#aaa',marginVertical:7}}/>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Donge Ram 3500 Truck Deluxe</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$39.00</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Liquid Hand Wax</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$12.00</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Extra Cleaning Free</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$10.00</Text>
</View>

<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Service Free</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$10.00</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Distance Free</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$10.00</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:16}}>Extra Minutes</Text>
<Text style={{alignItems:'flex-end',color:'#fff'}}>$10.00</Text>
</View>
<View style={{width:'100%',height:0.5,backgroundColor:'#aaa',marginVertical:7}}/>

<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<Text style={{color:'#fff',fontSize:17,fontWeight:'500'}}>Total:</Text>
<Text style={{alignItems:'flex-end',color:Colors.blue_color}}>$200.00</Text>
</View>

<View style={{width:'100%',height:0.5,backgroundColor:'#aaa',marginVertical:7}}/>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:7}}>
<TextInput
              style={[styles.auth_textInput,]}
              onChangeText={(coupnecode) => this.setState({ coupnecode })}
              value={this.state.coupnecode}
              placeholder="Enter Coupon Code"

              placeholderTextColor={Colors.text_color}
              autoCapitalize='none' />
              <TouchableOpacity style={styles.add_btn}>
<Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>APPLY</Text>
              </TouchableOpacity>
</View>
<View style={{width:'100%',height:0.5,backgroundColor:'#aaa',marginVertical:10}}/>
<TouchableOpacity style={styles.payment_btn}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
    <View style={{flexDirection:'row',}}>
<Image style={{width:35,height:35,tintColor:Colors.blue_color,marginLeft:15}} source={require('../../Assets/icon/paypal-logo.png')}/>
<Text style={{textAlign:'center',fontWeight:'bold',marginTop:5,marginLeft:5,fontSize:16}}>Pay via PayPal</Text>
</View>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.payment_btn}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
    <View style={{flexDirection:'row',}}>
<Image style={{width:35,height:35,tintColor:Colors.blue_color,marginLeft:15}} source={require('../../Assets/icon/credit-card.png')}/>
<Text style={{textAlign:'center',fontWeight:'bold',marginTop:5,marginLeft:5,fontSize:16}}>Credit/Debit Card</Text>
</View>
</View>
</TouchableOpacity>
                    </View>
                    </ScrollView>
                    <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 }}>

                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate('ScheduleBook'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>REVIEW & CONFIRM</Text>

                        </TouchableOpacity>

                    </View>
                   
                </ImageBackground>
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
        height: 60,
        justifyContent: 'center',
    },
    payment_btn: {
marginTop:7,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
borderRadius:5,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    add_btn: {

        backgroundColor: Colors.blue_color,
        alignItems: 'center',
        width: '33%',
        height: 40,marginTop:5,
        justifyContent: 'center', borderRadius: 5
    },
})