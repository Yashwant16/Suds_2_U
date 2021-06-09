import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList,} from '@react-navigation/drawer';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
// import EditProfile from '../../CustomerScreen/EditProfile'
import HomeScreen from '../../CustomerScreen/HomeScreen'
// import HomeScreen from '../../CustomerScreen/HomeScreen'
import SelectVehicle from '../../CustomerScreen/BookWasherNow'
import ChangePassword from '../../CustomerScreen/ChangePassword'
import Promotions from '../../CustomerScreen/Promotions'
import Payments from '../../CustomerScreen/Payments'
import HelpScreen from '../../CustomerScreen/HelpScreen'
import EditProfile from '../../CustomerScreen/EditProfile'
import Rewairds_History from '../../CustomerScreen/Rewairds_History'
import Colors from '../../../Constants/Colors';
import { changeStack } from '../NavigationService';
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
      drawerStyle={{backgroundColor: '#182245'}}>
      <Drawer.Screen
        name="DASHBOARD"
        component={HomeScreen}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/home.png')} />}}
      />
         <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/pencil.png')} />}}
      />
         <Drawer.Screen
        name="SELECT VEHICLE"
        component={SelectVehicle}
        options={{title:"Book Washer Now", drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/car-steering-wheel.png')} />}}
      />
         <Drawer.Screen
        name="Rewards/History"
        component={Rewairds_History}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/document.png')} />}}
      />
        <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/dollar-symbol.png')} />}}
      />
         <Drawer.Screen
        name="Promotions"
        component={Promotions}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/coupon.png')} />}}
      />
         <Drawer.Screen
        name="Change Password"
        component={ChangePassword}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/padlock.png')} />}}
      />
        <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/help.png')} />}}
      />

    </Drawer.Navigator>
  );
};

const Icon = ({color, size, focused, iconSource}) => <Image style={{height: 28, width: 28, tintColor: color}} source={iconSource} />;

export default CustomerDrawer;


const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerProfile />
      <DrawerItemList {...props} />
      <Logout/>
    </DrawerContentScrollView>
  );
};


const Logout = () => {
  // const {logout} = useContext(AuthContext);
  return (
    <DrawerItem
      label="LOG OUT"
      labelStyle={[styles.drawerLable, {color: 'white'}]}
      style={styles.drawerItem}
      icon={() => <Icon color={'white'} iconSource={require('../../../Assets/logout.png')} />}
      onPress={()=>changeStack('AuthStack')}
    />
  );
};

const DrawerProfile = () => (
  <View style={{width: '100%',  marginTop: 0,  padding: 16, alignItems: 'center'}}>
    <View style={{marginTop: 10, width: 90, height: 90, borderColor: '#fff', borderRadius: 10, borderWidth: 3, alignItems: 'center', alignSelf: 'center'}}>
        <Image style={{width: 88, height: 85, alignItems: 'center', alignSelf: 'center', resizeMode: 'cover',borderRadius:10}} source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
      </View>
    <View>
      <Text style={{color:Colors.blue_color, fontSize: 18, paddingBottom: 6,marginTop:10,fontWeight:'bold'}}>Dynamu Frayne</Text>
      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
       <Image style={{width: 15, height: 15, alignItems: 'center', alignSelf: 'center', resizeMode: 'stretch',tintColor:'#F5BA05'}} source={require('../../../Assets/location.png')} />
      <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>san fracisco usa</Text>
      </View>
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
