import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import {MoreHeader} from '../../Components/CustomeHeader';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
export default class SignUpUser2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OTP: "",
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
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>GET STARTED NOW</Text>
                }
                />
               
                <View style={{flex:1,}}> 
                <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                <SafeAreaView/>
              
                <View style={{ flex: 1, padding: 21, }}>
                   
                <Image  style={{width:'100%',height:95,resizeMode:'contain',marginTop:30}} source={require('../../Assets/logo_icon.png')}></Image>
                <Image  style={{width:'100%',height:65,resizeMode:'contain',marginTop:5}} source={require('../../Assets/logo2.png')}></Image>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 5, fontSize: 16 }}>Hello Well come to suds-2-U</Text>
                    <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 5, fontSize: 18,fontWeight:'bold'}}>Continue as a</Text>
                    <View style={{ alignItems: 'center', width: '100%', marginBottom: 5, marginTop: 5, padding: 5 }}>

                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Login'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                            elevation={5}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>




                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('SignUp'); }}
                            style={styles.auth_btn2}
                            underlayColor='gray'
                            activeOpacity={0.8}
                            elevation={5}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', color: '#000',  }}>Create an Account</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <SafeAreaView/>
                
                </ImageBackground>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    auth_textInput: {
        paddingLeft: 20,
        alignSelf: 'center',
        width: '93%',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        marginTop: 20,
        // backgroundColor: Colors.dark_gray,

    },
    auth_btn: {
        padding: 10,
        backgroundColor: '#4193F7',
        borderRadius: 25, marginTop: 5,
        width: '90%',
        height: 50,
        marginTop:10,
        justifyContent: 'center',
     
    },
    auth_btn2: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 25, marginTop: 5,
        width: '90%',
        height: 50,
       marginTop:10,
        justifyContent: 'center',
     
    },
})
