import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button,FlatList ,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';
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
            name: 'Extra Trash - ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Pet Hair - ',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Lifted Vehicle - ',
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
      <View style={{ padding: 21,flex:1,margin:10,marginHorizontal:18, backgroundColor:'#fff',borderRadius:5,paddingVertical:10,}}>


  <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-evenly',flex:1}}>
    <View style={{flexDirection:'row'}}>
    <Text style={{marginHorizontal:5,fontSize:16,color:'#000',fontWeight:'bold'}}>{item.name}</Text>
    <Text style={{marginHorizontal:5,fontSize:16,color:'#e28c39',fontWeight:'bold'}}>$25.00</Text>
    </View>
    <CheckBox
            style={{ padding: 0,alignItems:'flex-end',flex:1,marginRight:15}}
            onClick={()=>{
                 this.setState({
                     isChecked:!this.state.isChecked
                 })
               }}
            isChecked={this.state.isChecked}
            checkedImage={<Image source={require('../../Assets/icon/checked.png')} style={{width:22,height:22}}/>}
            unCheckedImage={<Image source={require('../../Assets/icon/unchecked.png')} style={{width:22,height:22}}/>}
        />
  </View>

      </View>
    )
    render() {
      return (
        <View style={{flex:1}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          <Header
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
                />
                   <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                <SafeAreaView/>
                <View style={{alignItems:'center',width:'100%',}}> 
                <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Upgrade your packages with the following add-ons</Text>
                </View>
       <FlatList
      
            style={{ width:'100%',marginBottom:20}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}
          />
          
       
       </View>
       <View style={{justifyContent:'flex-end',flex:1,alignItems:'center',marginTop:10}}>
       <View style={{backgroundColor:'#e28c39',height:60,width:'100%',justifyContent:'center',paddingHorizontal:20}}>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Estimates Wash Duration 30 Mins</Text>
                    <Text style={{fontSize:17,color:'#fff',fontWeight:'700',textAlign:'center'}}>Sub-Total: $99.00</Text>
                </View>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => { this.props.navigation.navigate('BookingDetails'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>CONFIRM ADD-ONS</Text>
                         
                        </TouchableOpacity>
                       
                        </View>
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
        borderBottomWidth: 1,
        height: 40,
        color: Colors.text_color,
        marginTop: 10,

    },
    auth_btn: {
       
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.buttom_color,
    
        width: '100%',
        height: 60,
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