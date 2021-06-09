import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, StatusBar, TouchableOpacity, TextInput, Button ,FlatList} from 'react-native';

import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          name: 'Simmy Rianabbb',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'Simmy Riana',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'David',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'Natasha',
          date: '24 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'Simmy Rianabbb',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'Simmy Riana',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'David',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
        {
          name: 'Natasha',
          date: '24 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
        },
      ],
    }
  }



  static navigationOptions = {

    drawerLabel: 'Rewards & History',
    drawerIcon: ({ tintColor }) => (
      <View>

        <Image style={{ width: 25, height: 25, tintColor: '#FFF' }} source={require('../../Assets/coupon.png')} />
      </View>
    ),
  };

  renderItem = ({ item, index, }) => (
    
    <View style={{ padding: 5 ,flex:1}}>
      <TouchableOpacity      onPress={() => {  }} >
<View style={{flexDirection:'row',padding:5}}>
      <Image style={{ height: 60, width: 60, padding: 5, borderRadius: 30,marginRight:10}} source={{ uri: item.image }} />
<View style={{flex:1}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
  <Text style={{marginHorizontal:5,fontSize:15}}>{item.name}</Text>
  <Text style={{marginHorizontal:5,color:'green',fontWeight:'bold'}}>Success</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
  <Text style={{marginHorizontal:5,color:Colors.blue_color,fontWeight:'bold'}}>{item.name}</Text>
  <Text style={{marginHorizontal:5,color:'#aaa'}}>Today at 3:26 pm</Text>
</View>
<View style={{flexDirection:'row',marginBottom:5}}>
<Image style={{ width: 17, height: 17, tintColor: '#000' }} source={require('../../Assets/location.png')} />
<Text style={{color:'#aaa'}}> 8753  Maurico Walks</Text>
</View>
</View>
      </View>
      </TouchableOpacity>
      <View style={{width:'100%',height:0.5,backgroundColor:'#ccc',marginHorizontal:5}}/>
    </View>
  )
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
{/* 
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          height={82}
          containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
          backgroundColor={Colors.blue_color}
          placement={"left"}
          leftComponent={
            <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
              <Image style={{ width: 25, height: 25, tintColor: '#fff' }} source={require('../../Assets/menu.png')} />

            </TouchableOpacity>
          }
          centerComponent={
            <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>REWARDS HISTORY</Text>
          }
        /> */}
        <View style={{ width: '100%', height: 40, backgroundColor: '#e28c39', flexDirection: 'row' }}>
          <Text style={{ color: '#fff', margin: 6, marginTop: 10,fontSize:16 ,fontWeight:'600' }}>Rewards</Text>

          <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: Colors.blue_color, marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
          <Image style={{ width: 25, height: 25, tintColor: '#916832', marginTop: 5, }} source={require('../../Assets/drop.png')} />
        </View>
        <View style={{alignItems:'center',width:'100%',}}> 
       <FlatList
      
            style={{ width:'100%'}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={this.renderItem}
          // ListEmptyComponent={this.ListEmpty}
          />
          
       
       </View>
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