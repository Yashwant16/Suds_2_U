import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, TextInput, Button, FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Header, Icon, Avatar} from 'react-native-elements';
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
          vehicleType:'Dodge Ram 3500 Truck',
          id: 1,
        },
        {
          name: 'Simmy Riana',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 2,
        },
        {
          name: 'David',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 3,
        },
        {
          name: 'Natasha',
          date: '24 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 4,
        },
        {
          name: 'Simmy Rianabbb',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 5,
        },
        {
          name: 'Simmy Riana',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 6,
        },
        {
          name: 'David',
          date: '22 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 7,
        },
        {
          name: 'Natasha',
          date: '24 Jan',
          dueAmount: '500 Rs',
          content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          like: '25',
          comment: '50',
          vehicleType:'Dodge Ram 3500 Truck',
          id: 8,
        },
      ],
    };
  }

  static navigationOptions = {
    drawerLabel: 'BOOKING HISTORY',
    drawerIcon: ({tintColor}) => (
      <View>
        <Image style={{width: 25, height: 25, tintColor: '#FFF'}} source={require('../../Assets/list.png')} />
      </View>
    ),
  };

  renderItem = ({item, index}) => (
    <View style={{padding: 5, flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Image style={{height: 40, width: 40, padding: 5, borderRadius: 20}} source={{uri: item.image}} />
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginHorizontal: 5}}>{item.name}</Text>
            <Text style={{marginHorizontal: 5, color: 'green', fontWeight: 'bold'}}>Success</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginHorizontal: 5}}>{item.name}</Text>
            <Text style={{marginHorizontal: 5, color: '#ccc'}}>Today at 3:26 pm</Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: '#000', marginHorizontal: 5}} />
    </View>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

        <Header
          statusBarProps={{barStyle: 'light-content'}}
          height={82}
          containerStyle={{elevation: 0, justifyContent: 'center', borderBottomWidth: 0}}
          backgroundColor={Colors.blue_color}
          placement={'left'}
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Image style={{width: 25, height: 25, tintColor: '#fff'}} source={require('../../Assets/menu.png')} />
            </TouchableOpacity>
          }
          centerComponent={<Text style={{width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30}}>BOOKING HISTORY</Text>}
        />
        {/* <SafeAreaView /> */}
        <View style={{padding:15, backgroundColor:'#ffae00', flexDirection:"row", alignItems:'center'}}>
          <Text style={{fontWeight: 'bold',color:Colors.text_white, fontSize:18}}>Rewards:</Text>
          
          {[...Array(10)].map((v,i)=><Image style={{width: 22, height: 22, tintColor: i<4?Colors.blue_color:'#777', marginTop:2, marginLeft:5}} source={require('../../Assets/drop.png')} />)}
        </View>
          <FlatList
            keyExtractor={item => item.id}
            style={{width: '100%', height:200}}
            showsVerticalScrollIndicator={false}
            data={this.state.Data}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ddd'}} />}
            // ListEmptyComponent={this.ListEmpty}
          />
      </View>
    );
  }
}

const renderItem = ({item, index}) => (
  <View style={{padding: 16, flex: 1}}>
    <View style={{flexDirection: 'row'}}>
      <Image style={{height: 70, width: 70,marginRight:10,padding: 10, borderRadius: 35}} source={{uri: item.image}} />
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{}}>
          <Text style={{marginHorizontal: 5, fontSize: 16, marginBottom:2}}>{item.name}</Text>
          <Text style={{marginHorizontal: 5, fontWeight:'bold', color:Colors.blue_color}}>{item.vehicleType}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 16, height: 16, tintColor: '#777'}} source={require('../../Assets/location.png')} />
            <Text style={{marginHorizontal: 3, color: '#999'}}>{item.name}</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{marginHorizontal: 5, color: 'green', fontWeight: 'bold', textAlign:'right'}}>Success</Text>
          <Text style={{marginHorizontal: 5, color: '#aaa', textAlign:'right'}}>Today at 3:26 pm</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
