import React from 'react';
import { StyleSheet,Button, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView,ImageBackground} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import {MoreHeader} from '../../Components/CustomeHeader';
export default class SignUpUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                 <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={82}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                      <TouchableOpacity      onPress={() => this.props.navigation.goBack()}>
                      <Image style={{width:25,height:25,tintColor:'#fff',marginLeft:10}} source={require('../../Assets/back_arrow.png')}/>

                 </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>Login</Text>
                }
                />
                  <View style={{flex:1,}}> 
                <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                <SafeAreaView/>
                <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
                          <Image  style={{width:'100%',height:95,resizeMode:'contain',marginTop:30}} source={require('../../Assets/logo_icon.png')}></Image>
                <Image  style={{width:'100%',height:65,resizeMode:'contain',marginTop:5}} source={require('../../Assets/logo2.png')}></Image>
                <View style={{ flex: 1, justifyContent:'flex-end', padding: 21,alignItems:'center' }}>
            <View   style={{width:'90%',height:280,backgroundColor:'#fff',justifyContent:'flex-end',alignItems:'center',shadowColor:'#ccc',shadowOpacity:0.7,}}>
                   
                   <Text style={{fontWeight:'bold',marginTop:5}}>Hello</Text>
                   <Text style={{}}>Sign into your ccount</Text>
                   <View style={{width:'95%',flexDirection:'row'}}>
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="Username or Email"
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                            <Image
            source={ require('../../Assets/icon/email.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
<View style={{width:'95%',flexDirection:'row'}}>
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry='true'
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                   <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('CustomerApp'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:Colors.buton_label ,fontWeight:'bold'}}>Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('ForgotPassword'); }}
                        style={{marginTop:10,marginBottom:10}}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:'#4193F7' ,fontWeight:'bold'}}>Forgot Your Password</Text>
                    </TouchableOpacity>

                  
                </View>
                <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('SignUp'); }}
                        style={{marginTop:10,marginBottom:5}}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 14, textAlign: 'center', color:'#000' ,fontWeight:'bold'}}>Don't have an account <Text style={{color:'#4193F7',fontWeight:'bold',fontSize:16}}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
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
        marginTop: 10,
      
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