import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {Header} from 'react-native-elements';
import Colors from '../../Constants/Colors';

const CustomHeader = ({onLeftButtonPress, title}) => {
  return (
    <Header
      statusBarProps={{barStyle: 'light-content'}}
      height={78}
      containerStyle={styles.container}
      backgroundColor={Colors.blue_color}
      placement={'left'}
      leftComponent={
        <TouchableOpacity onPress={onLeftButtonPress}>
          <Image style={styles.back_icon} source={require('../../Assets/back_arrow.png')} />
        </TouchableOpacity>
      }
      leftContainerStyle={styles.left_container}
      centerComponent={<Text style={styles.title}>{title}</Text>}
    />
  );
};

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    justifyContent: 'center',
    borderBottomWidth: 0,
    position: 'relative',
    flexDirection:'row',
    paddingTop:Platform.OS=="android"?StatusBar.currentHeight:0,
    alignItems:'center',
    // borderWidth: 2,
    // borderColor : 'red',
    // backgroundColor:'green'
  },
  title: {
    width: '100%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf:'flex-start',
    // marginTop: 5,
    marginLeft: 0,
    // height: 30,
  },
  left_container: {
    position: 'absolute',
    left: 0,
    // paddingTop:33,
    // paddingBottom: 6,
    alignSelf:'center',
    zIndex:5,

  },
  back_icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginLeft: 10,
  },
});
