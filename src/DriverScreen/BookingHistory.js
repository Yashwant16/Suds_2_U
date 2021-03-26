import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-navigation';
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

    drawerLabel: 'BOOKING HISTORY',
    drawerIcon: ({ tintColor }) => (
      <View>

        <Image style={{ width: 25, height: 25, tintColor: '#FFF' }} source={require('../../Assets/home.png')} />
      </View>
    ),
  };

  renderItem = ({ item, index }) => (
    <View style={{ padding: 5 ,flex:1}}>
<View style={{flexDirection:'row',}}>
      <Image style={{ height: 40, width: 40, padding: 5, borderRadius: 20,}} source={{ uri: item.image }} />
<View style={{flex:1}}>
<View style={{flexDirection:'row',justifyContent:'space-between',}}>
  <Text style={{marginHorizontal:5}}>{item.name}</Text>
  <Text style={{marginHorizontal:5,color:'green',fontWeight:'bold'}}>Success</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{marginHorizontal:5}}>{item.name}</Text>
  <Text style={{marginHorizontal:5,color:'#ccc'}}>Today at 3:26 pm</Text>
</View>

</View>
      </View>
      <View style={{width:'100%',height:1,backgroundColor:'#000',marginHorizontal:5}}/>
    </View>
  )
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />

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
            <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>BOOKING HISTORY</Text>
          }
        />
        <SafeAreaView />
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