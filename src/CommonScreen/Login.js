import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, Modal } from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import { MoreHeader } from '../../Components/CustomeHeader';
import { ScrollView } from 'react-native';
import { BASE_URL } from '../../Constants/Base_Url';
import Loader from '../../Components/loader/index'

export default class SignUpUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: "",
            password: "", isLoading: false
        }
    }

    validation = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (this.state.email === '' && this.state.password === '' ) {
            // this.setState({ isLoading: false })
            alert('Please Enter all field')
        }
        else if (this.state.email === '') {
            alert('Please Enter your Email Id')
        }
       
        else if (this.state.password === '') {
            alert('Please Enter your Email Id')
        }
      
        else if (reg.test(this.state.email) === false) {
            alert('Please Enter Correct Email Id')
        }
 
        else {
            // this.loginUpApi();
            this.props.navigation.navigate('CustomerApp');
        }
    }


    loginUpApi = async () => {
        this.setState({ isLoading: true })

        let params = {
            email: this.state.email, password: this.state.password,
          device_token: 'sfsdfdsfsdf', 
        };
        return fetch(BASE_URL + 'login', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'App-Key': 'ABCDEFGHIJK',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ isLoading: false })
                console.log("responseJson onLoginPressHandle", responseJson)
                if (responseJson.response === true) {
                    this.props.navigation.navigate('CustomerApp');
                    // let user_info = responseJson.data
                    // let user_token = responseJson.data.token
                    // console.log("Token",user_token)
                    // AsyncStorage.setItem('user_token', user_token)
                    // AsyncStorage.setItem('user_info', JSON.stringify(user_info))
                    alert(responseJson.message)
                    // this.props.navigation.navigate('Main')
                }
                else if(responseJson.response === false) {
                    alert(responseJson.message)
                }
            })
            .catch((error) => {
                this.setState({ isLoading: false })
                console.error(error);
            });

    };

    render() {
        return (

            <View style={{
                flex: 1,
              
            }}>
                <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={78}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />

                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>LOGIN</Text>
                    }
                />
                 
                <View style={{ flex: 1,backgroundColor:'#FFF' }}>
                 
                    <ImageBackground style={{ width: '100%',flex:1,height:'100%' , }} source={require('../../Assets/imageBG.png')}>
                        <SafeAreaView />
<ScrollView>
                        <Image style={{ width: '100%', height: 95, resizeMode: 'contain', marginTop: 30 }} source={require('../../Assets/logo_icon.png')}></Image>
                        <Image style={{ width: '100%', height: 65, resizeMode: 'contain', marginTop: 5 }} source={require('../../Assets/logo2.png')}></Image>
                        <View style={{   padding: 21,justifyContent:'flex-end' ,flex:1}}>
                        <View  style={{width:'96%',height:280,backgroundColor:'#fff',alignItems:'center',shadowColor: '#000',justifyContent:'flex-end',marginTop:30,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5, borderRadius:15, 
    elevation: 5}}>

                                <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Hello</Text>
                                <Text style={{}}>Sign into your ccount</Text>
                                <View style={{ width: '95%', flexDirection: 'row' }}>
                                    <TextInput
                                        style={[styles.auth_textInput,]}
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                        placeholder="Username or Email"
                                        placeholderTextColor={Colors.text_color}
                                        autoCapitalize='none' />
                                    <Image
                                        source={require('../../Assets/icon/email.png')}
                                        style={{ width: 21, height: 21, marginTop: 15, marginLeft: -22, tintColor: '#aaa' }}
                                    />
                                </View>
                                <View style={{ width: '95%', flexDirection: 'row' }}>
                                    <TextInput
                                        style={[styles.auth_textInput,]}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        placeholder="Password"
                                        // secureTextEntry='true'
                                        placeholderTextColor={Colors.text_color}
                                        autoCapitalize='none' />
                                    <Image
                                        source={require('../../Assets/icon/password.png')}
                                        style={{ width: 21, height: 21, marginTop: 15, marginLeft: -22, tintColor: '#aaa' }}
                                    />
                                </View>
                                <TouchableOpacity
                                    elevation={5}
                                    onPress={() => { 
                                        this.validation(); 
                                    }}
                                    style={styles.auth_btn}
                                    underlayColor='gray'
                                    activeOpacity={0.8}
                                // disabled={this.state.disableBtn}
                                >
                                    <Text style={{ fontSize: 15, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>Sign In </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ForgotPassword'); }}
                                    style={{ marginTop: 10, marginBottom: 10 }}
                                    underlayColor='gray'
                                    activeOpacity={0.8}
                                // disabled={this.state.disableBtn}
                                >
                                    <Text style={{ fontSize: 15, textAlign: 'center', color: '#4193F7', fontWeight: 'bold' }}>Forgot Your Password</Text>
                                </TouchableOpacity>


                            </View>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('SignUp'); }}
                                style={{ marginTop: 10, marginBottom: 5 }}
                                underlayColor='gray'
                                activeOpacity={0.8}
                            // disabled={this.state.disableBtn}
                            >
                                <Text style={{ fontSize: 14, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Don't have an account <Text style={{ color: '#4193F7', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text></Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </ImageBackground>
                 
                </View>
                {this.state.isLoading ? <Modal transparent={true}><Loader /></Modal> : null}
            </View>
        )
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
        backgroundColor: Colors.buttom_color,
        borderRadius: 25,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
})