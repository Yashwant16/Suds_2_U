import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Colors from '../../Constants/Colors';

const ListEmpty = ({netInfo, retry, emptyMsg}) => {
    return (
      <View style={{alignItems: 'center', padding: 20}}>
        <Icon color="black" style={{opacity: 0.1}} size={100} name={netInfo.isConnected ? 'list-alt' : 'perm-scan-wifi'} />
        <Text style={{fontSize: 32, fontWeight: 'bold', opacity: 0.1, color: 'black'}}>
          {netInfo.isConnected ? emptyMsg : 'No Internet Connection'}
        </Text>
        <TouchableOpacity onPress={retry} style={{alignItems:'center', paddingTop:30}}>
          <Icon
            color={Colors.blue_color}
            style={{opacity: 0.8, borderRadius: 15, borderWidth: 2, borderColor: Colors.blue_color, backgroundColor: '#eee'}}
            size={50}
            name="replay"
          />
          <Text style={{fontSize: 16, opacity: 0.8, color: Colors.blue_color}}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default ListEmpty;
