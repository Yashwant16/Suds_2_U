import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      
      drawerLabel: 'Payments',
     
      drawerIcon: ({ tintColor }) => (
        <View>

    <Image  style={{width:25,height:25,tintColor:'#FFF'}} source={require('../../Assets/dollar-symbol.png')}/> 

    </View>
      ),
    };
  
    render() {
      return (
        <View style={{flex:1}} >
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                      <TouchableOpacity  onPress={() => {this.props.navigation.openDrawer();}}>
                      <Image style={{width:25,height:25,tintColor:'#fff',marginTop:5}} source={require('../../Assets/menu.png')}/>

                 </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>PAYMENTS</Text>
                }
                />
                 
                 <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                 <SafeAreaView style={{flex:1}} >  
                 <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('CustomerApp'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                      <View style={{flexDirection:'row'}}>
                        
                        <View style={{flexDirection:'row'}}> 
                        <Image style={{width:25,height:25,tintColor:Colors.blue_color ,marginHorizontal:10}} source={require('../../Assets/icon/paypal-logo.png')}/>
                        <Text style={{ fontSize: 15,  color:'#000' ,fontWeight:'bold',marginTop:5}}>PayPal</Text>
   
                        </View>
                        <View style={{alignItems:'flex-end',flex:1}}>
                        <Image style={{width:19,height:19,tintColor:'#aaa' ,marginHorizontal:10,marginTop:3}} source={require('../../Assets/icon/right_back.png')}/>
                        </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('CustomerApp'); }}
                        style={styles.auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                      <View style={{flexDirection:'row'}}>
                        
                        <View style={{flexDirection:'row'}}> 
                        <Image style={{width:25,height:25,tintColor:Colors.blue_color ,marginHorizontal:10}} source={require('../../Assets/icon/credit-card.png')}/>
                        <Text style={{ fontSize: 15,  color:'#000' ,fontWeight:'bold',marginTop:5}}>Creddit/Debit Card</Text>
   
                        </View>
                        <View style={{alignItems:'flex-end',flex:1}}>
                        <Image style={{width:19,height:19,tintColor:'#aaa' ,marginHorizontal:10,marginTop:3}} source={require('../../Assets/icon/right_back.png')}/>
                        </View>
                        </View>
                    </TouchableOpacity>
                    </View>

<View style={{alignItems:'center',justifyContent:'flex-end',flex:1,}}> 
                    <TouchableOpacity
                    elevation={5} 
                        onPress={() => { this.props.navigation.navigate('AddCard'); }}
                        style={styles.add_auth_btn}
                        underlayColor='gray'
                        activeOpacity={0.8}
                    // disabled={this.state.disableBtn}
                    >
                        <Text style={{ fontSize: 15, textAlign: 'center', color:'#fff' ,fontWeight:'bold'}}>Add New Credit/Debit Card </Text>
                    </TouchableOpacity>
                    </View>
                    </SafeAreaView>  
                    </ImageBackground>
                 
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
        backgroundColor: Colors.text_white,
        borderRadius: 5,
        width: '90%',
        height: 50,
        justifyContent: 'center',
    },
    add_auth_btn: {
      marginTop: 16,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: Colors.blue_color,
      borderRadius: 5,
      width: '100%',
      height: 70,
      justifyContent: 'center',
  },
})

