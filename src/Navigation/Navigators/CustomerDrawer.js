import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import EditProfile from '../../CustomerScreen/EditProfile'
import HomeScreen from '../../CustomerScreen/HomeScreen'
const Drawer = createDrawerNavigator();

const CustomerDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        contentContainerStyle: {paddingTop: 0},
        inactiveTintColor: 'white',
        activeTintColor: 'white',
        labelStyle: styles.drawerLable,
        itemStyle: styles.drawerItem,
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="DASHBOARD"
      drawerStyle={{backgroundColor: '#469'}}>
      <Drawer.Screen
        name="DASHBOARD"
        component={HomeScreen}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/home.png')} />}}
      />
      <Drawer.Screen
        name="CUSTOMER SIGNUP"
        component={SignUP}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/list.png')} />}}
      />
    </Drawer.Navigator>
  );
};

const Icon = ({color, size, focused, iconSource}) => <Image style={{height: 28, width: 28, tintColor: color}} source={iconSource} />;

export default CustomerDrawer;

const Login = ({navigation}) => (
  <View>
    <Text>Login</Text>
    <Button title="Go to register" onPress={() => navigation.openDrawer()} />
    <Button title="Go to register" onPress={() => navigation.navigate('signup')} />
  </View>
);

const SignUP = () => (
  <View>
    <Text>Edit Details</Text>
  </View>
);

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerProfile />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerProfile = () => (
  <View style={{width: '100%', backgroundColor: 'orange', marginTop: 0, flexDirection: 'row', padding: 16, alignItems: 'center'}}>
    <Image
      style={{height: 75, width: 75, borderRadius: 200, marginRight: 16}}
      source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
    />
    <View>
      <Text style={{color: 'white', fontSize: 18, paddingBottom: 6}}>Dynamu Frayne</Text>
      <Text style={{fontWeight: 'bold'}}>Edit profile</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  drawerItem: {
    borderTopColor: '#ffffff40',
    borderTopWidth: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 0,
  },

  drawerLable: {
    fontSize: 16,
  },
});
