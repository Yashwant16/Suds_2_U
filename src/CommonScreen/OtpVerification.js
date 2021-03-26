import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput,SafeAreaView,StatusBar,ImageBackground,Image,TouchableOpacity} from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {MoreHeader} from '../../Components/CustomeHeader';
import OTPTextView from 'react-native-otp-textinput';
import { ScrollView } from 'react-native';


export default class App extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };

 

  render() {
    return (
      <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={78}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                      <TouchableOpacity      onPress={() => this.props.navigation.goBack()}>
                      <Image style={{width:25,height:25,tintColor:'#fff',marginLeft:10}} source={require('../../Assets/back_arrow.png')}/>

                 </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>ENTER OTP</Text>
                }
                />
                  <View style={{flex:1,}}> 
                  <ScrollView>
                <ImageBackground style={{width:'100%',height:'67%',flex:1, }} source={require('../../Assets/imageBG.png')}>
                <SafeAreaView/>
                <Image  style={{width:'100%',height:95,resizeMode:'contain',marginTop:30}} source={require('../../Assets/logo_icon.png')}></Image>
                <Image  style={{width:'100%',height:65,resizeMode:'contain',marginTop:5}} source={require('../../Assets/logo2.png')}></Image>
                <View style={{ flex: 1, justifyContent:'flex-end', padding: 21,alignItems:'center' }}>

            <View  style={{width:'95%',height:320,backgroundColor:'#fff',justifyContent:'flex-end',alignItems:'center',shadowColor:'#000',shadowOpacity:0.5,borderRadius:15}}>
            <Text style={{fontWeight:'bold',marginTop:5,color:'#000',fontSize:16,marginBottom:8}}>Enter OTP</Text>
            <Text style={{marginTop:5,color:'#000',fontSize:16,marginBottom:8,textAlign:'center'}}>Enter 4 digits OTP Code that you have received on phone.</Text>
        <OTPTextView
          handleTextChange={(e) => {}}
          containerStyle={styles.textInputContainer}
          textInputStyle={[styles.roundedTextInput, {borderRadius: 10}]}
          tintColor={Colors.blue_color}
        />
                    <Text style={{marginTop:5,color:'#000',fontSize:16,marginBottom:8}}>Dont's have the OTP? <Text style={{fontWeight:'bold',marginTop:5,color:'red',fontSize:16,marginBottom:8}}>RESENT OTP</Text></Text>
                  
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('TermsConditions'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:Colors.buton_label ,fontWeight:'bold'}}>Confirm OTP </Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold',marginTop:10,color:Colors.blue_color,fontSize:16,marginBottom:8}}>Login with Password</Text>
        </View>
        <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('SignUp'); }}
                        style={{marginTop:15,marginBottom:15}}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 16, textAlign: 'center', color:'#000' ,}}>Don't have an account- <Text style={{color:'#4193F7',fontWeight:'bold',fontSize:16}}>Sign Up</Text></Text>
                    </TouchableOpacity>
        </View>
        </ImageBackground>
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
   
    textInputContainer: {
      marginBottom: 20,marginTop:5
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 4,
    },
    auth_btn: {
        marginTop: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.buttom_color,
        borderRadius: 25,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
  });