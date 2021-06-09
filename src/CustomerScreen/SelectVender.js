import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar,SafeAreaView, TouchableOpacity, TextInput,Button,FlatList ,ImageBackground} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements'

export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isChecked:'',
        Data: [
        
          {
            name: 'Car or Truck ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Tractor Trailors',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Boats ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Motorcycles ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
       
          {
            name: 'Rv s, Bus, M.H. ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Heavy Equipment ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Business Wash ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
        ],
      }
    }
  

    renderItem = ({ item, index }) => {
        const { navigation } = this.props;
        return(
      <View style={{ padding: 21,flex:1,margin:10,marginHorizontal:18, backgroundColor:'#fff',borderRadius:5,paddingVertical:10,shadowOpacity:0.3,shadowOffset: { width: 1, height: 1 },}}>


  <TouchableOpacity onPress ={()=>{navigation.navigate('Vender Profile') }} > 
      <View style={{alignItems:'center'}}> 
  <Image style={{ width:'100%', height: 180, borderRadius:5 }} source={require('../../Assets/washcar.jpeg')} />
  </View>
    <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-evenly',}}>
    <Text style={{marginHorizontal:5,fontSize:16,color:'#000',fontWeight:'bold'}}>Vendor Name Here</Text>
   <View style={{flexDirection:'row'}}> 
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    </View>
    </View>
    </TouchableOpacity>

      </View>
    )
        }
    render() {
     
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
                            onPress={() => { navigation.navigate('Booking Review'); }}
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