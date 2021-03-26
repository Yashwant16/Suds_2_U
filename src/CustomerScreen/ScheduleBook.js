// React Native Calendar Picker using react-native-calendar-picker

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text,StatusBar,TouchableOpacity,Image} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

  export default class MyNotificationsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: '',
            coupnecode:'',
            weekday:[ 
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ],
            months:[
              'January',
              'Febraury',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]
            

        }
    }
    onDateChange = (date, type) => {
      //function to handle the date change
      console.log('date..',date)
      if (type === 'END_DATE') {
        // setSelectedEndDate(date);
      } else {
        // setSelectedEndDate(null);
        // setSelectedStartDate(date);
      }
    };
    render() {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>

        {/* <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' /> */}
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    height={79}
                    containerStyle={{ elevation: 0, justifyContent: 'center', borderBottomWidth: 0 }}
                    backgroundColor={Colors.blue_color}
                    placement={"left"}
                    leftComponent={
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('SelectAddOns') }}>
                            <Image style={{ width: 25, height: 25, tintColor: '#fff', marginLeft: 10 }} source={require('../../Assets/back_arrow.png')} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={{ width: '100%', color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: 5, marginLeft: 0, height: 30 }}>SCHEDULE</Text>
                    }
                />
      <View style={{backgroundColor:'#e28c39'}}>
        <Text style={styles.titleStyle}>
Donge Ram 350 Truck
        </Text>
        </View>
        <View>
        <CalendarPicker
          startFromMonday={true}
          // allowRangeSelection={true}
         
          minDate={new Date(2021, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={this.state.weekday}
          months={this.state.months}
          previousTitle="<"
          nextTitle=">"
          previousTitleStyle={{fontSize:24,fontWeight:'bold',color:'#e28c39',padding:-5}}
          nextTitleStyle={{fontSize:24,fontWeight:'bold',color:'#e28c39',padding:-5}}
          todayBackgroundColor="#e6ffe6"
          todayTextStyle={{backgroundColor:Colors.dark_orange,width:30,height:30,color:'#fff',fontWeight:'bold',
          textAlign:'center',paddingTop:5}}
          selectedDayColor="#66ff33"
          selectedDayStyle={{backgroundColor:Colors.dark_orange,width:30,height:30,color:'#fff',fontWeight:'bold',
          textAlign:'center',paddingTop:5,borderRadius:0}}
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            // fontFamily: 'Cochin',
            color: '#000000',
            fontSize:14
          }}
          onDateChange={this.onDateChange()}
        />
        <View style={styles.textStyle}>
          <Text style={{color:'#fff',fontSize:16,fontWeight:'600'}}>
            Selected Date :
          </Text>
        
        </View>
        <Text style={{textAlign:'center',fontSize:16,marginTop:10}}>Select Time:</Text>
      </View>
      <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10 ,}}>

<TouchableOpacity
    elevation={5}
    onPress={() => { this.props.navigation.navigate('ScheduleBook'); }}
    style={styles.auth_btn}
    underlayColor='gray'
    activeOpacity={0.8}
// disabled={this.state.disableBtn}
>
    <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' }}>CONTINUE</Text>

</TouchableOpacity>

</View>
<SafeAreaView style={{backgroundColor:'#e28c39'}}/>
    </View>
  );
};
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: Colors.blue_color,
  
  },
  textStyle: {
    marginTop: 10,backgroundColor:'#000',height:35,justifyContent:'center',alignItems:'center'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 17,color:'#fff',
    padding:7
  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#e28c39',

    width: '100%',
    height: 40,
    justifyContent: 'center',
},
});