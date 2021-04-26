import React from 'react';
import {AsyncStorage, View, Image, Text, Animated, Easing, TouchableOpacity, SafeAreaView} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../src/CommonScreen/Splash';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Colors from '../Constants/Colors';
import Login from '../src/CommonScreen/Login';
import WasherLogin from '../src/CommonScreen/WasherLogin';
import SignUp from '../src/CommonScreen/SignUp';
import ForgotPassword from '../src/CommonScreen/ForgotPassword';
import ChooseScreen from '../src/CommonScreen/ChooseScreen';
import UserTypeScreen from '../src/CommonScreen/UserTypeScreen';
import OtpVerification from '../src/CommonScreen/OtpVerification';
import AddLicence from '../src/CommonScreen/AddLicence';
import TermsConditions from '../src/CommonScreen/TermsConditions';
//Drawer CUSTOMER

import HomeScreen from '../src/CustomerScreen/HomeScreen';
import EditProfile from '../src/CustomerScreen/EditProfile';
import BookWasher_Now from '../src/CustomerScreen/BookWasherNow';
import Payments from '../src/CustomerScreen/Payments';
import Promotions from '../src/CustomerScreen/Promotions';
import Rewairds_History from '../src/CustomerScreen/Rewairds_History';
import ChangePassword from '../src/CustomerScreen/ChangePassword';
import HelpScreen from '../src/CustomerScreen/HelpScreen';
import Logout from '../src/CustomerScreen/Logout';
//drawer under screen
import AddCard from '../src/CustomerScreen/AddCard';
import AddNewVehicle from '../src/CustomerScreen/AddNewVehicle';
import SelectPackage from '../src/CustomerScreen/SelectPackage';
import SelectAddOns from '../src/CustomerScreen/SelectAddOns';
import BookingReview from '../src/CustomerScreen/BookingReview';
import BookingDetail from '../src/CustomerScreen/BookingDetail';
import BookingConfirm from '../src/CustomerScreen/BookingConfirm';
import WorkInProgress from '../src/CustomerScreen/WorkInProgress';
import ScheduleBook from '../src/CustomerScreen/ScheduleBook';
import OnTheWay from '../src/CustomerScreen/OnTheWay';
import OnDemand from '../src/CustomerScreen/OnDemand';
//DRIVER SCREEN
import DashBoard from '../src/DriverScreen/DashBoard';
import Earning from '../src/DriverScreen/Earning';
import BookingHistory from '../src/DriverScreen/BookingHistory';
import ReviewRating from '../src/DriverScreen/ReviewRating';
import EditDetails from '../src/DriverScreen/EditDetails';
import DriverHelp from '../src/DriverScreen/DriverHelp';
import DriverChangePaasword from '../src/DriverScreen/DriverChangePaasword';
import UpdateDocument from '../src/DriverScreen/UpdateDocument';
import BankInfo from '../src/DriverScreen/BankInfo';
import {ScrollView} from 'react-native';
import Welcome from '../src/DriverScreen/Welcome';
const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Splash',
  },
);
// const AppStack = createStackNavigator({
//   DrawerNavigator: {
//     screen : DrawerNavigator,
//     navigationOptions:{
//       header:null,
//     }
//   },
// }
// )

const AuthStack = createStackNavigator({
  UserTypeScreen: {
    screen: UserTypeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ChooseScreen: {
    screen: ChooseScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  WasherLogin: {
    screen: WasherLogin,
    navigationOptions: () => ({
      header: null,
    }),
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OtpVerification: {
    screen: OtpVerification,
    navigationOptions: () => ({
      header: null,
    }),
  },
  AddLicence: {
    screen: AddLicence,
    navigationOptions: () => ({
      header: null,
    }),
  },
  TermsConditions: {
    screen: TermsConditions,
    navigationOptions: () => ({
      header: null,
    }),
  },
  initialRouteName: 'Login',
});

const drawerScreen = createStackNavigator({
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      header: null,
    }),
  },
  AddNewVehicle: {
    screen: AddNewVehicle,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SelectPackage: {
    screen: SelectPackage,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SelectAddOns: {
    screen: SelectAddOns,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BookingReview: {
    screen: BookingReview,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BookingDetail: {
    screen: BookingDetail,
    navigationOptions: () => ({
      header: null,
    }),
  },
  BookingConfirm: {
    screen: BookingConfirm,
    navigationOptions: () => ({
      header: null,
    }),
  },
  WorkInProgress: {
    screen: WorkInProgress,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ScheduleBook: {
    screen: ScheduleBook,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnTheWay: {
    screen: OnTheWay,
    navigationOptions: () => ({
      header: null,
    }),
  },
  OnDemand: {
    screen: OnDemand,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
const CustomDrawerContentComponent = props => (
  <View style={{flex: 1, backgroundColor: '#182245',}}>
    <ScrollView>
      <SafeAreaView />
      <View style={{marginTop: 22, width: 90, height: 90, borderColor: '#fff', borderRadius: 5, borderWidth: 3, alignItems: 'center', alignSelf: 'center'}}>
        <Image style={{width: 88, height: 85, alignItems: 'center', alignSelf: 'center', resizeMode: 'stretch'}} source={require('../Assets/images.jpeg')} />
      </View>
      <Text style={{color: Colors.blue_color, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10,marginBottom:5}}>Randy Orton</Text>
     <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
       <Image style={{width: 15, height: 15, alignItems: 'center', alignSelf: 'center', resizeMode: 'stretch',tintColor:'#F5BA05'}} source={require('../Assets/location.png')} />
      <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>san fracisco usa</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{width: 110, height: 30, backgroundColor: '#F5BA05', alignItems: 'center', borderRadius: 22, justifyContent: 'center', marginTop: 10,marginBottom:5}}>
          <Text style={{fontWeight: 'bold'}}>08 Drops</Text>
        </View>
      </View>
      <DrawerItems {...props}>
        <View style={{width: '100%', height: 1, backgroundColor: '#fff'}} />
      </DrawerItems>

      {/* <View style={{width:'100%',height:1,backgroundColor:'#fff'}}/> */}
      <SafeAreaView />
    </ScrollView>
  </View>
);

const MyApp = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    HomeScreen: {
      screen: HomeScreen,
    },
    EditProfile: {
      screen: EditProfile,
    },
    BookWasher_Now: {
      screen: BookWasher_Now,
    },
    Rewairds_History: {
      screen: Rewairds_History,
    },
    Payments: {
      screen: Payments,
    },
    Promotions: {
      screen: Promotions,
    },
    ChangePassword: {
      screen: ChangePassword,
    },
    HelpScreen: {
      screen: HelpScreen,
    },
    Logout: {
      screen: Logout,
    },
  },

  {
    initialRouteName: 'HomeScreen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#ccc',
      activeBackgroundColor: Colors.blue_color,
    },
    labelStyle: {fontSize: 16},
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const DriverDrawerContentComponent = props => (
  <View style={{flex: 1, backgroundColor: '#182245'}}>
    <SafeAreaView />
    <View style={{width: 90, height: 90, borderColor: '#fff', borderRadius: 5, borderWidth: 3, alignItems: 'center', alignSelf: 'center'}}>
      <Image style={{width: 88, height: 85, alignItems: 'center', alignSelf: 'center', resizeMode: 'stretch'}} source={require('../Assets/images.jpeg')} />
    </View>
    <Text style={{color: Colors.blue_color, fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>Randy Orton</Text>
    <Text style={{color: '#fff', textAlign: 'center', fontSize: 16}}>san fracisco usa</Text>

    <View style={{alignItems: 'center'}}>
      <View style={{width: 150, height: 45, backgroundColor: 'orange', alignItems: 'center', borderRadius: 22, justifyContent: 'center', marginTop: 5}}>
        <Text style={{fontWeight: 'bold'}}>08 DROP</Text>
      </View>
    </View>
    <DrawerItems {...props}>
      <View style={{width: '100%', height: 1, backgroundColor: '#fff'}} />
    </DrawerItems>
    {/* <View style={{width:'100%',height:1,backgroundColor:'#fff'}}/> */}
    <SafeAreaView />
  </View>
);

const DriverApp = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Welcome: {
      screen: Welcome,
    },
    DashBoard: {
      screen: DashBoard,
    },
    BookingHistory: {
      screen: BookingHistory,
    },
    ReviewRating: {
      screen: ReviewRating,
    },
    Earning: {
      screen: Earning,
    },
    BankInfo: {
      screen: BankInfo,
    },
    EditDetails: {
      screen: EditDetails,
    },
    UpdateDocument: {
      screen: UpdateDocument,
    },
    DriverChangePaasword: {
      screen: DriverChangePaasword,
    },
    DriverHelp: {
      screen: DriverHelp,
    },
  },

  {
    initialRouteName: 'Welcome',
    drawerPosition: 'left',
    contentComponent: DriverDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#ccc',
      activeBackgroundColor: Colors.blue_color,
    },
    labelStyle: {fontSize: 16},
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    Auth: AuthStack,

    // App: AppStack,
    CustomerApp: MyApp,
    drawerScreen: drawerScreen,
    DriverApp: DriverApp,
    // RealStateService: RealStateServiceStack
  }),
  {
    initialRouteName: 'AuthStack',
  },
);
