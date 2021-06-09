// React Native Calendar Picker using react-native-calendar-picker

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
// import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import CalendarPicker from 'react-native-calendar-picker';
import { Header, Icon, Avatar } from 'react-native-elements';
import Colors from '../../Constants/Colors';

export default class MyNotificationsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: '',
      coupnecode: '',
      hours: 'Select Hours',
      minutes: 'Select Minutes',
      weekday: [
        'Mon',
        'Tue',
        'Wed',
        'Thur',
        'Fri',
        'Sat',
        'Sun'
      ],
      months: [
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
    console.log('date..', date)
    if (type === 'END_DATE') {
      // setSelectedEndDate(date);
    } else {
      // setSelectedEndDate(null);
      // setSelectedStartDate(date);
    }
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

        {/* <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' /> */}
        {/* <Header
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
        /> */}
        <View style={{ backgroundColor: '#e28c39' }}>
          <Text style={styles.titleStyle}>
            Donge Ram 350 Truck
        </Text>
        </View>
        <View>
          <CalendarPicker
            monthYearHeaderWrapperStyle={{ fontSize: 40, marginTop: 10, fontWeight: 'bold' }}
            startFromMonday={true}
            // allowRangeSelection={true}
            // allowBackwardRangeSelect={false}
            minDate={new Date(2021, 1, 1)}
            maxDate={new Date(2050, 6, 3)}
            weekdays={this.state.weekday}
            months={this.state.months}
            previousTitle="<"
            nextTitle=" >"
            previousTitleStyle={{ fontSize: 45, color: '#AD4B00',  width: 55, height: 55, marginBottom: -10, marginTop: -10, }}
            nextTitleStyle={{ fontSize: 45, color: '#AD4B00', height: 55, width: 55, marginBottom: -10, marginTop: -10,marginRight:-13 }}
            todayBackgroundColor="#e6ffe6"
            selectMonthTitle={{ color: 'red' }}
            todayTextStyle={{
              backgroundColor: Colors.dark_orange, width: 30, height: 30, color: '#fff', fontWeight: 'bold',
              textAlign: 'center', paddingTop: 5,
            }}
            selectedDayColor="#66ff33"
            selectedDayStyle={{
              backgroundColor: Colors.dark_orange, width: 30, height: 30, color: '#fff', fontWeight: 'bold',
              textAlign: 'center', paddingTop: 5, borderRadius: 0
            }}
            selectedDayTextColor="#000000"
            scaleFactor={350}
            textStyle={{
              // fontFamily: 'Cochin',
              color: '#000000',
              fontSize: 15, fontWeight: 'bold'
            }}
            onDateChange={this.onDateChange()}
          />
          <View style={styles.textStyle}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', }}>
              Selected Date :
          </Text>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', }}>
              April 23 2021
          </Text>
          </View>
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 15, fontWeight: 'bold' }}>Select Time</Text>
<View style={{alignItems:'center'}}>
          <View style={{marginTop:25,paddingTop:5, width: '85%',alignSelf:'center', height: 55, borderRadius: 10, backgroundColor: '#ccc', }}>
            <DateTimePicker
              placeholderText="Select Date"
              // testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={true}
              mode={'time'}
              is24Hour={true}
              display='inline'
              // onChange={onChange}
              style={{ color: '#000', borderWidth:0,marginRight:55,borderColor:'red' }}
              textColor={'#000'}
            />
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 20, fontWeight: 'bold',color:Colors.blue_color }}>Total Hours: 2</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center', marginTop: 10, }}>

          <TouchableOpacity
            elevation={5}
            onPress={() => { navigation.navigate('Booking Confirm'); }}
            style={styles.auth_btn}
            underlayColor='gray'
            activeOpacity={0.8}
          // disabled={this.state.disableBtn}
          >
            <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold' ,marginTop:3}}>CONTINUE</Text>

          </TouchableOpacity>

        </View>
        {/* <SafeAreaView style={{ backgroundColor: '#e28c39' }} /> */}
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
    marginTop: 10, backgroundColor: '#000', height: 55,
    justifyContent: 'center', alignItems: 'center',
    flexDirection: 'row'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 17, color: '#fff',
    padding: 7, paddingVertical: 15, fontWeight: 'bold'
  },
  auth_btn: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#e28c39',

    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
});

// React Native Time Picker – To Pick the Time using Native Time Picker
// https://aboutreact.com/react-native-timepicker/

// import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// //import TimePicker from the package we installed
// import TimePicker from 'react-native-simple-time-picker';

// const App = () => {
//   const [selectedHours, setSelectedHours] = useState(0);
//   const [selectedMinutes, setSelectedMinutes] = useState(0);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.title}>
//           React Native Time Picker –
//           To Pick the Time using Native Time Picker
//         </Text>
//         <Text>
//           Selected Time: {selectedHours}:{selectedMinutes}
//         </Text>
//         <TimePicker
//           selectedHours={selectedHours}
//           //initial Hourse value
//           selectedMinutes={selectedMinutes}
//           //initial Minutes value
//           onChange={(hours, minutes) => {
//             setSelectedHours(hours);
//             setSelectedMinutes(minutes);
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//   },
// });

// import React, {useState} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const App = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = currentMode => {
//     setShow(true);
//     setMode(currentMode);
//   };



//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           timeZoneOffsetInMinutes={0}
//           value={date}
//           mode={'time'}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default App;