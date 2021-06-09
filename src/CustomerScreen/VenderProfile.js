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
  

    renderItem = ({ item, index }) => (
      <View style={{ padding:5,}}>


  <View style={{flex:1,}}>
      <View style={{alignItems:'center',justifyContent:'center'}}> 
  <Image style={{ width:100, height:100, borderRadius:5 }} source={require('../../Assets/washcar.jpeg')} />
  </View>
  
  </View>

      </View>
    )
    render() {
      const { navigation } = this.props;
      return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                   <SafeAreaView/>
                <View style={{ padding: 10,flex:1,marginTop:10,marginHorizontal:15, backgroundColor:'#fff',borderRadius:5,paddingVertical:10,shadowOpacity:0.3,shadowOffset: { width: 1, height: 1 },}}> 
                {/* <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Upgrade your packages with the following add-ons</Text>
                </View> */}
       <FlatList
      numColumns={3}
            style={{flex:1, width:'100%',marginBottom:20}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}
          />
          
          <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-evenly',}}>
    <Text style={{marginHorizontal:5,fontSize:16,color:'#000',fontWeight:'bold'}}>Vendor Name Here</Text>
   <View style={{flexDirection:'row'}}> 
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    <Image style={{ width: 25, height: 25,  marginLeft: 5 ,tintColor:Colors.dark_orange}} source={require('../../Assets/star.png')} />
    </View>
    </View>
       </View>


      
                <View style={{marginBottom:15,alignItems:'center',marginTop:15}}>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { navigation.navigate('Select Package'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Schedule with (Vendor Name Here)</Text>
                         
                        </TouchableOpacity>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Read Reviews</Text>
                         
                        </TouchableOpacity>
                      
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
        borderBottomWidth: 1,
        height: 40,
        color: Colors.text_color,
        marginTop: 10,

    },
    auth_btn: {
       marginTop:10,
       marginBottom:10,
        
        backgroundColor: Colors.buttom_color,
    
        width: '90%',
        height: 50,borderRadius:25,
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