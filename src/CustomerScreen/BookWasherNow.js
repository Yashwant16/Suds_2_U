import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput,Button,FlatList ,ImageBackground,SafeAreaView} from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';
import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements'

export default class MyNotificationsScreen extends React.Component {
    // static navigationOptions = {
      
    //   drawerLabel: 'Book Washer Now',
    //   drawerIcon: ({ tintColor }) => (
    //     <View>
        
    // <Image  style={{width:25,height:25,tintColor:'#FFF'}} source={require('../../Assets/car-steering-wheel.png')}/> 
    // </View>
    //   ),
    // };
  

    constructor(props) {
      super(props);
      this.state = {
        isChecked:'',
        Data: [
        
          {
            name: 'Dodge Ram 3500 Truck',
            date: '22 Jan',
            dueAmount: '500 Rs',
            content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
            image: 'https://images.app.goo.gl/Y2UimVUej9emH5zV6',
            like: '25',
            comment: '50',
          },
          {
            name: 'Acure CL',
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
      <View style={{ padding: 5 ,flex:1,margin:10,backgroundColor:'#fff',borderRadius:5,paddingVertical:10}}>
  <View style={{flexDirection:'row',}}>
        <Image style={{ height: 60, width: 60, padding: 5, borderRadius: 10,}} source={require('../../Assets/car1.jpeg') } />
  <View style={{flex:1}}>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
    <Text style={{marginHorizontal:5,fontSize:16}}>{item.name}</Text>

    <CheckBox
            style={{ padding: 5}}
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
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{marginHorizontal:5}}>(No Duallys)</Text>
    {/* <Text style={{marginHorizontal:5,color:'#ccc'}}>Today at 3:26 pm</Text> */}
  </View>
  
  </View>
        </View>

      </View>
    )
    render() {
      const { navigation } = this.props;

      return (
        <View style={{flex:1}}>
                          <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
                          {/* <Header
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
                    <Text style={{ width: '100%', color: '#fff', fontWeight:'bold', fontSize:18,textAlign:'center',marginTop:5,marginLeft:0,height:30}}>SELECT VEHICLE</Text>
                }
                /> */}
                   <ImageBackground style={{width:'100%',height:'100%',flex:1, }} source={require('../../Assets/bg_img.png')}>
                {/* <SafeAreaView/> */}
                <View style={{alignItems:'center',width:'100%',}}> 

       <FlatList
      
            style={{ width:'100%'}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}
          />
          
       
       </View>
       <View style={{justifyContent:'flex-end',flex:1,alignItems:'center'}}>
       <TouchableOpacity
                            elevation={5}
                            onPress={() => {navigation.navigate('Add New Vehicle'); }}
                            style={styles.add_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 15, textAlign: 'center', color: Colors.buton_label,  }}>+ Add New Vehicle</Text>
                         
                        </TouchableOpacity>
         <Text style={{color:'#fff',fontSize:17,textAlign:'center',marginHorizontal:20,marginVertical:5}}>Pricing based on loacation </Text>
         <Text style={{color:'#fff',fontSize:17,textAlign:'center',marginHorizontal:20,marginVertical:5}}>and vehicle make/model</Text>
                        <TouchableOpacity
                            elevation={5}
                            onPress={() => {navigation.navigate('Select Package'); }}
                            style={styles.auth_btn}
                            underlayColor='gray'
                            activeOpacity={0.8}
                        // disabled={this.state.disableBtn}
                        >
                            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label,fontWeight:'bold'}}>Next</Text>
                         
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
        marginTop: 16,
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