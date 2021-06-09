import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar,SafeAreaView, TouchableOpacity, TextInput,Button,FlatList ,ImageBackground} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CheckBox } from 'react-native-elements'

export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isChecked:'',
        Data: [
        
          {
            vehicle_name: 'Car or Truck ',
           id:1
          },
          {
            vehicle_name: 'Tractor Trailors',
           id:2
          },
          {
            vehicle_name: 'Boats ',
           id:3
          },
          {
            vehicle_name: 'Motorcycles ',
           id:4
          },
       
          {
            vehicle_name: 'Rv s, Bus, M.H. ',
         id:5
          },
          {
            vehicle_name: 'Heavy Equipment ',
           id:6
          },
          {
            vehicle_name: 'Business Wash ',
           id:7
          },
        ],
      }
    }
    componentDidMount = async () => {
      this.userdetails();
      alert('dvd')
      }
      userdetails = async () => {
        let savedUserData = JSON.parse(await AsyncStorage.getItem('userData'));
        console.log(savedUserData.api_token);
    
        return fetch('http://suds-2-u.com/sudsadmin/api/vehicleType', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'App-Key':savedUserData.api_token,
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify(params)
        })
          .then((response) => response.json())
          .then((responseJson) => {
            // this.setState({ isLoading: false })
            console.log("responseJson onLoginPressHandle", responseJson)
            if (responseJson.response === true) {
              
    this.setState({userData:responseJson.data})
              // this.props.navigation.navigate('Main')
            }
            else if (responseJson.response === false) {
              // alert(responseJson.message)
            }
          })
          .catch((error) => {
            // this.setState({ isLoading: false })
            console.error(error);
          });
    
      };

    renderItem = ({ item, index }) => {
      const { navigation } = this.props;
      return(
      <View style={{ padding: 21,flex:1,margin:10,marginHorizontal:18, backgroundColor:'#fff',borderRadius:5,paddingVertical:10,shadowOpacity:0.3,shadowOffset: { width: 1, height: 1 },}}>
<TouchableOpacity onPress={()=>{}}> 

  <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-evenly',flex:1}}>
    <View style={{flexDirection:'row'}}>
    <Text style={{marginHorizontal:5,fontSize:16,color:'#000',fontWeight:'bold'}}>{item.name}</Text>
    {/* <Text style={{marginHorizontal:5,fontSize:16,color:'#e28c39',fontWeight:'bold'}}>$25.00</Text> */}
    </View>
    <CheckBox
            style={{ padding: 0,alignItems:'flex-end',flex:1,marginRight:8}}
            onClick={()=>{
                 this.setState({
                     isChecked:!this.state.isChecked
                 })
               }}
            isChecked={this.state.isChecked}
            checkedImage={<Image source={require('../../Assets/icon/checked.png')} style={{width:22,height:22,tintColor:Colors.blue_color}}/>}
            unCheckedImage={<Image source={require('../../Assets/icon/unchecked.png')} style={{width:22,height:22,tintColor:Colors.blue_color}}/>}
        />
  </View>
  </TouchableOpacity>
      </View>
      )
    }

    render() {
      const { navigation } = this.props;
      return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          {/* <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                  height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectPackage') }}>
                        <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />
                 </TouchableOpacity> 
                    }
                  centerComponent={
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>SELECT ADD-ONS</Text>
                }
                /> */}
                   {/* <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}> */}
                <SafeAreaView/>
                <View style={{alignItems:'center',width:'100%',}}> 
                {/* <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Upgrade your packages with the following add-ons</Text>
                </View> */}
       <FlatList
      
            style={{ width:'100%',marginBottom:20}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}
          />
          
       
       </View>
       <View style={{justifyContent:'flex-end',flex:1,alignItems:'center',marginTop:10}}>
       {/* <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Estimates Wash Duration 30 Mins</Text>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Sub-Total: $99.00</Text>
                </View> */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { navigation.navigate('Select a Vender'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Continue</Text>
                         
                        </TouchableOpacity>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { navigation.navigate('Booking Review'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Cancel</Text>
                         
                        </TouchableOpacity>
                        </View>
                        </View>
       {/* </ImageBackground> */}
        </View>
      );
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
       
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.buttom_color,
    
        width: '50%',
        height: 65,
        justifyContent: 'center',
    },
    add_btn: {
      
      backgroundColor:'#e28c39',
  alignItems:'center',
      width: '45%',
      height: 40,
      justifyContent: 'center',borderRadius:20
  },
})