import React from 'react';
import { Alert } from 'react-native';
import AppProvider from './AppProvider';
import AuthProvider from './AuthProvider';
import BookingProvider from './BookingProvider';
import RatingProvider from './RatingProvider';
import NetInfo from '@react-native-community/netinfo';
import EarningProvider from './EarningsProvider';
import PackageProvider from './PackageProvider';

const BASE_URL = 'http://suds-2-u.com/sudsadmin/api/';
export const ERROR = 5
export const LOADING = 6

const Providers = ({ children }) => {
  return (
    <AppProvider>
      <AuthProvider>
        <RatingProvider>
          <EarningProvider>
            <PackageProvider>
              <BookingProvider>{children}</BookingProvider>
            </PackageProvider>
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
    let formData = new FormData()
    Object.entries(params).forEach(([key, value]) => key == "image" ? formData.append("image", {uri: value.uri, name: value.fileName, type: 'image/jpeg'}) : formData.append(key, value))
    console.log(params)
    console.log(JSON.stringify(formData))
    let url = `${BASE_URL}${subfix}?`
    let res = await fetch(url, {
      method: method,
      headers: { 'App-Key': AppKey, 'Content-Type': 'multipart/form-data' },
      body: formData
    });
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    if (!jsonResponse.response) {
      if (onFalse) onFalse(jsonResponse);
      else Alert.alert('Alert', jsonResponse.message);
    } else if (isEmptyResponse(jsonResponse)) return { ...jsonResponse, empty: true }
    else return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};

const isEmptyResponse = json => {
  if (!json.data) return false
  if (!json.error && Object.keys(json.data).length === 0) return true;
  return false;
};

const checkConnection = async () => {
  let state = await NetInfo.fetch();
  if (!state.isConnected) {
    Alert.alert('Connection', 'You are not connected to the internet');
    throw 'Not connected';
  }
};
