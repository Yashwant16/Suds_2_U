import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {Header} from 'react-native-elements';
import Colors from '../../Constants/Colors';

const CustomHeader = ({onBackPress, title}) => {
  return (
    <Header
      statusBarProps={{barStyle: 'light-content'}}
      height={78}
      containerStyle={styles.container}
      backgroundColor={Colors.blue_color}
      placement={'left'}
      leftComponent={
        <TouchableOpacity onPress={onBackPress}>
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
  },
  title: {
    width: '100%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 0,
    height: 30,
  },
  left_container: {
    position: 'absolute',
    left: 0,
    paddingTop:33,
    paddingBottom: 6,
    zIndex:5,

  },
  back_icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginLeft: 10,
  },
});
