import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <View>
        
    <Image  style={{width:25,height:25,tintColor:'#FFF'}} source={require('../../Assets/home.png')}/> 
    </View>
      ),
    };
  
    render() {
      return (
        <View style={{flex:1}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
  
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
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>Home</Text>
                }
                />
                <SafeAreaView/>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Text>DBDFGBFDGB</Text>
        </View>
      );
    }
  }
  
  // const styles = StyleSheet.create({
  //   icon: {
  //     width: 24,
  //     height: 24,
  //   },
  // });