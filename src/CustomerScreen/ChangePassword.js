import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button ,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      
      drawerLabel: 'Change Password',
      drawerIcon: ({ tintColor }) => (
        <View>
        
    <Image  style={{width:25,height:25,tintColor:'#FFF'}} source={require('../../Assets/padlock.png')}/> 
    </View>
      ),
    };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
      return (
        <View style={{flex:1}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={82}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity  onPress={() => {this.props.navigation.openDrawer();}}>
                        <Image style={{width:25,height:25,tintColor:'#fff'}} source={require('../../Assets/menu.png')}/>

                   </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>Change Password</Text>
                }
                />
                <SafeAreaView/>
                <View style={{flex:1,}}> 
                <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                <SafeAreaView/>
         
                <View style={{ flex: 1, justifyContent:'flex-end', padding: 21,alignItems:'center' }}>
            <View   style={{width:'90%',height:280,backgroundColor:'#fff',justifyContent:'flex-end',alignItems:'center',shadowColor:'#ccc',shadowOpacity:0.7,borderRadius:15}}>
                   
            <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Old Password</Text>
                   <View style={{width:'95%',flexDirection:'row'}}>
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        
                        secureTextEntry='true'
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                   <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
          <Text  style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>New Password</Text>
<View style={{width:'95%',flexDirection:'row'}}>
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        
                        secureTextEntry='true'
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                   <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View>
          <Text style={{color:'#bbb',textAlign:'left',width:'100%',marginLeft:17,marginTop:4,marginBottom:-8}}>Confirm Password</Text>
          <View style={{width:'95%',flexDirection:'row'}}>
                    <TextInput
                        style={[styles.auth_textInput,]}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        
                        secureTextEntry='true'
                        placeholderTextColor={Colors.text_color}
                        autoCapitalize='none' />
                                   <Image
            source={ require('../../Assets/icon/password.png')}
            style={{width:21,height:21,marginTop:15,marginLeft:-22,tintColor:'#aaa'}}
          />
          </View >
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('CustomerApp'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:Colors.buton_label ,fontWeight:'bold'}}>Submit</Text>
                    </TouchableOpacity>
                 

                  
                </View>
             
                </View>
                </ImageBackground>
                </View>
        </View>
      );
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
        marginBottom:10
    },
})