import React, {useContext} from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BookingHistory from '../../DriverScreen/BookingHistory';
import WelcomeScreen, {nav} from '../../DriverScreen/Welcome';
import Earning from '../../DriverScreen/Earning';
import ReviewRating from '../../DriverScreen/ReviewRating';
import DriverChangePassword from '../../DriverScreen/DriverChangePaasword';
import DriverHelp from '../../DriverScreen/DriverHelp';
import BankInfo from '../../DriverScreen/BankInfo';
import UpdateDocument from '../../DriverScreen/UpdateDocument';
import TripSwitch from '../../Components/TirpSwitch';
import {changeStack, navigate} from '../NavigationService';
import {AuthContext} from '../../Providers/AuthProvider';
const Drawer = createDrawerNavigator();

const DriverDrawer = () => {
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
      initialRouteName="WELCOME"
      drawerStyle={{backgroundColor: '#469'}}>
      <Drawer.Screen
        name="WELCOME"
        component={WelcomeScreen}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/home.png')} />}}
      />
      <Drawer.Screen
        name="BOOKING HISTORY"
        component={BookingHistory}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/list.png')} />}}
      />
      <Drawer.Screen
        name="EARNING"
        component={Earning}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/money.png')} />, headerRight: TripSwitch}}
      />
      <Drawer.Screen
        name="REVIEW & RATING"
        component={ReviewRating}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/review.png')} />}}
      />
      <Drawer.Screen
        name="BANK INFO"
        component={BankInfo}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/dollar-symbol.png')} />}}
      />
      <Drawer.Screen
        name="EDIT DETAILS"
        component={SignUP}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/document.png')} />}}
      />
      <Drawer.Screen
        name="UPDATE DOCUMENT"
        component={UpdateDocument}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/uploaddocument.png')} />}}
      />
      <Drawer.Screen
        name="CHANGE PASSWORD"
        component={DriverChangePassword}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/padlock.png')} />}}
      />
      <Drawer.Screen
        name="HELP"
        component={DriverHelp}
        options={{drawerIcon: ({color}) => <Icon color={color} iconSource={require('../../../Assets/help.png')} />}}
      />
    </Drawer.Navigator>
  );
};

const Icon = ({color, size, focused, iconSource}) => <Image style={{height: 28, width: 28, tintColor: color}} source={iconSource} />;

export default DriverDrawer;

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
      <DrawerProfile  />
      <DrawerItemList {...props} />
      <Logout />
    </DrawerContentScrollView>
  );
};

const Logout = () => {
  const {logout} = useContext(AuthContext);
  return (
    <DrawerItem
      label="LOG OUT"
      labelStyle={[styles.drawerLable, {color: 'white'}]}
      style={styles.drawerItem}
      icon={() => <Icon color={'white'} iconSource={require('../../../Assets/logout.png')} />}
      onPress={logout}
    />
  );
};

const DrawerProfile = () => {
  const {userData} = useContext(AuthContext);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate('EDIT PROFILE');
        nav.current.toggleDrawer();
      }}>
      <View style={{width: '100%', backgroundColor: 'orange', marginTop: 0, flexDirection: 'row', padding: 16, alignItems: 'center'}}>
        <Image
          style={{height: 75, width: 75, borderRadius: 200, marginRight: 16}}
          source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        />
        <View>
          <Text style={{color: 'white', fontSize: 18, paddingBottom: 6}}>{userData.name}</Text>
          <Text style={{fontWeight: 'bold'}}>Edit profile</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
