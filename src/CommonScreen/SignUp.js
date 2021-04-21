import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView,ImageBackground} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {MoreHeader} from '../../Components/CustomeHeader';
import { ScrollView } from 'react-native';
export default class SignUpUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            mobile:'',
            email: "",
            password: "",
        }
    }
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />

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
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>REGISTER</Text>
                }
                />
                  <View style={{flex:1,}}> 
                  <ScrollView>
                <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/imageBG.png')}>
                <SafeAreaView/>
                <Image  style={{width:'100%',height:95,resizeMode:'contain',marginTop:30}} source={require('../../Assets/logo_icon.png')}></Image>
                <Image  style={{width:'100%',height:65,resizeMode:'contain',marginTop:5}} source={require('../../Assets/logo2.png')}></Image>
                <View style={{  padding: 21,alignItems:'center' ,justifyContent:'flex-end',flex:1}}>
                           
                <Text style={{fontWeight:'bold',marginTop:5,color:'#fff',fontSize:16,marginBottom:8}}>Create an Account</Text>
            <View  style={{width:'96%',height:350,backgroundColor:'#fff',justifyContent:'flex-end',alignItems:'center',shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5, borderRadius:15, 
    elevation: 5}}>
   

                   <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Full Name</Text>
                   
<View style={{width:'95%',flexDirection:'row'}}>
                    
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                      
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                       <Image
            source={ require('../../Assets/icon/user.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
                        <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Email Address</Text>
                        <View style={{width:'95%',flexDirection:'row'}}>
                    
    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                      
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                             <Image
            source={ require('../../Assets/icon/email.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
                        <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Mobile Number</Text>
                        <View style={{width:'95%',flexDirection:'row'}}>
                            <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(mobile) => this.setState({ mobile })}
                        value={this.state.mobile}
                      
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                        <Image
            source={ require('../../Assets/icon/cell-phone.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
                        <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Password</Text>
                        <View style={{width:'95%',flexDirection:'row'}}>
                      
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                      
                        // secureTextEntry='true'
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                        <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('OtpVerification',{type:this.props.navigation.getParam('type')}); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:Colors.buton_label ,fontWeight:'bold'}}>Sign Up </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate(''); }}
                        style={{marginTop:10,marginBottom:10}}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:'#4193F7' ,fontWeight:'bold'}}>Forgot Your Password</Text>
                    </TouchableOpacity>

                  
               
                </View>
                <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Login'); }}
                        style={{marginTop:10,marginBottom:5}}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 14, textAlign: 'center', color:'#000' ,fontWeight:'bold'}}>Already have an account <Text style={{color:'#4193F7',fontWeight:'bold',fontSize:16}}>Sign In</Text></Text>
                    </TouchableOpacity>
                
                </View>
            
                </ImageBackground>
                </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    auth_textInput: {
       
        alignSelf: 'center',
        width: '93%',
        // borderWidth: 1,
        borderBottomWidth:1,
        height:40,
        color: Colors.text_color,
        marginTop: 1,
      
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
})