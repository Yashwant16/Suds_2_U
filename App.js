/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 import AppNavigator from './Navigations/AppNavigator';
 import { MenuProvider } from 'react-native-popup-menu';
import CustomHeader from './src/Components/CustomHeader';
import { StackRouter } from 'react-navigation';
 
 
 
 export default App =({route})=> {
   // componentDidMount() {
   //     SplashScreen.hide();
   // }
   
   const [nav, setNav]=useState({})
   return (
     <MenuProvider>
       {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}
       {/* <CustomHeader route={nav}/> */}
       <View style={styles.scrollView}>
         {/* <SafeAreaView style={{ backgroundColor: '#000' }}> */}
           <View style={{flex:1}}>
             <AppNavigator onNavigationStateChange={(prevNav, nextNav, navAction)=>setNav(nextNav)} />
           </View>
         {/* </SafeAreaView> */}
       </View>
     </MenuProvider>
   );
   
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: 'white',
    //  height: '100%',
    flex:1,
     width: '100%'
   },
 
 });
 
 // import React from 'react';
 // import { StyleSheet, Text, View } from 'react-native';
 // import { PaymentScreen } from './src/management/Login';
 
 
 
 
 // export default function App() {
 //   return (
 //       <PaymentScreen />
 //   );
 // }
 