import React from 'react';
import {Alert} from 'react-native';
import AppProvider from './AppProvider';
import AuthProvider from './AuthProvider';
import BookingProvider from './BookingProvider';
import RatingProvider from './RatingProvider';
import NetInfo from '@react-native-community/netinfo';
import EarningProvider from './EarningsProvider';

const BASE_URL = 'http://suds-2-u.com/sudsadmin/api/';

const Providers = ({children}) => {
  return (
    <AppProvider>
      <AuthProvider>
        <RatingProvider>
          <EarningProvider>
            <BookingProvider>{children}</BookingProvider>
          </EarningProvider>
        </RatingProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default Providers;

export const callApi = async (subfix, AppKey, params, onFalse, method = 'POST') => {
  try {
    await checkConnection();
    let url = `${BASE_URL}${subfix}?` + new URLSearchParams(params);
    let res = await fetch(url, {
      method: method,
      headers: {'App-Key': AppKey, 'Content-Type': 'application/json'},
    });
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    if (!jsonResponse.response) {
      if (onFalse) onFalse(jsonResponse);
      else Alert.alert('Alert', jsonResponse.message);
    } else return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};

const checkConnection = async () => {
  let state = await NetInfo.fetch();
  if (!state.isConnected) {
    Alert.alert('Connection', 'You are not connected to the internet');
    throw 'Not connected';
  }
};
