/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
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
 
 
 
 export default  class App extends React.Component {
   // componentDidMount() {
   //     SplashScreen.hide();
   // }
   
   render(){
   return (
     <MenuProvider>
       <StatusBar barStyle="light-content" />
       <View style={styles.scrollView}>
         {/* <SafeAreaView style={{ backgroundColor: '#000' }}> */}
           <View style={{flex:1}}>
             <AppNavigator />
           </View>
         {/* </SafeAreaView> */}
       </View>
     </MenuProvider>
   );
   }
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: 'white',
     height: '100%',
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
 