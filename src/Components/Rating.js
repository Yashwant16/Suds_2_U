import React from 'react';
import {View, Image} from 'react-native';
import Colors from '../../Constants/Colors';

export default Rating = ({rating} )=> {
  return (
    <View style={{flexDirection: 'row'}}>
      {[...Array(5)].map((v, i) => (
        <Image style={{marginLeft: 2, marginRight: 2, width: 16, height: 16, tintColor: Math.round(rating) >i ? Colors.dark_orange : '#aaa'}} source={require('../../Assets/review.png')} />
      ))}
    </View>
  );
};
