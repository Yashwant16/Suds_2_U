import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, SafeAreaView,ImageBackground} from 'react-native';
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
                 <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />

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
<Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>Register</Text>
}
/>
                  <View style={{flex:1,}}> 
                <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                <SafeAreaView/>
              
                <View style={{ flex: 1, justifyContent:'flex-end', padding: 21,alignItems:'center' }}>
            <View  style={{width:'90%',height:250,backgroundColor:'#fff',justifyContent:'flex-end',alignItems:'center', shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,  
    elevation: 5}}>
                   
                  <View style={{width:'100%',padding:7,alignItems:'center',justifyContent:'center',marginBottom:15}}> 
                   <Text style={{fontWeight:'bold',marginTop:5}}>Reset Your Password</Text>
                   <Text style={{}}>Please enter your username or email address you will receive a link to create a new password via email</Text>
                <View style={{flexDirection:'row',width:'95%'}}>
              
          
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="Username or Email"
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                             <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-20,tintColor:'#aaa'}}
          />
</View>
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('App'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:Colors.buton_label ,fontWeight:'bold'}}>Submit</Text>
                    </TouchableOpacity>
                    </View>

                  
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