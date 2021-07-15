// React Native Calendar Picker using react-native-calendar-picker

import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Constants/Colors';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { afterScheduleScreen } from '../Navigation/NavigationService';
import { BookingContext } from '../Providers/BookingProvider';
import moment from 'moment';

const ScheduleBook = ({ navigation, route }) => {

  const { currentBooking, setCurrentBooking } = useContext(BookingContext)

  const [state, setState] = useState({
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
  })
  const onChange = (date, type) => {
    //function to handle the date change
    console.log('date..', moment(date).format('YYYY-MM-DD'), new Date(date).toLocaleTimeString())
    setDate(new Date(date))
  };

  const onDChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  useEffect(() => {
    return () => afterScheduleScreen.current = null
  }, [])

  const onContinue = () => {
    setCurrentBooking(cv=>({...cv, booking_date : moment(date).format('YYYY-MM-DD'),booking_time : date.toLocaleTimeString() }))
    if (afterScheduleScreen.current != null) navigation.navigate(afterScheduleScreen.current)
    else navigation.navigate('Packages', route.params)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#e28c39' }}>
          <Text style={styles.titleStyle}>
            {currentBooking.vehicle}
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
            weekdays={state.weekday}
            months={state.months}
            previousTitle="<"
            nextTitle=">"
            previousTitleStyle={{ fontSize: 45, fontWeight: '100', color: '#AD4B00', width: 55, height: 55, marginBottom: -10, marginTop: -10, }}
            nextTitleStyle={{ fontSize: 45, fontWeight: '100', color: '#AD4B00', height: 55, width: 55, marginBottom: -10, marginTop: -10, marginRight: -28 }}
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
              color: '#000000',
              fontSize: 15, fontWeight: 'bold'
            }}
            onDateChange={onChange}
          />
          <View style={styles.textStyle}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', }}>
              Selected Date :
          </Text>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', }}>
              {date?.toDateString()}
            </Text>
          </View>
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 15, fontWeight: 'bold' }}>Select Time</Text>

          <TouchableOpacity onPressIn={() => setShow(true)} style={{ marginTop: 15, padding: 15, width: '85%', alignSelf: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#ccc', }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#555' }}>{(new Date(date).toLocaleTimeString())}</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight: 'bold', color: Colors.blue_color }}>Total Hours: 2</Text>
        </View>
      </ScrollView>
      <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 10, }}>

        <TouchableOpacity
          elevation={5}
          onPress={onContinue}
          style={styles.auth_btn}
          underlayColor='gray'
          activeOpacity={0.8}>
          <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.buton_label, fontWeight: 'bold', marginTop: 3 }}>CONTINUE</Text>

        </TouchableOpacity>

      </View>

      {show && <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onDChange}
      />}
    </View>
  )

}

export default ScheduleBook

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