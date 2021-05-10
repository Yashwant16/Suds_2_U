import React, { useEffect } from 'react';
import {ActivityIndicator, Modal, ScrollView, Text, View} from 'react-native';

const LoadingView = ({children, loading, fetching, loadingColor = 'white', fetchingColor = 'white', containerStyle}) => {
    useEffect(()=>{
    }, [loading])
  return (
    <View >
      {fetching && <ActivityIndicator style={{padding: 50}} color={fetchingColor} size="large" />}
      <View style={[{opacity: fetching ? 0 : 1}, containerStyle]}>{children}</View>
      {loading && <Loading color={loadingColor} />}
    </View>
  );
};

export default LoadingView;

const Loading = ({color}) => (
  <Modal animationType="fade" transparent={true}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        flex: 1,
        backgroundColor: '#00000050',
        position: 'absolute',
        top: 56,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <ActivityIndicator size="large" style={{position: 'absolute', alignItems: 'center', justifyContent: 'center'}} color={color} />
    </View>
  </Modal>
);
