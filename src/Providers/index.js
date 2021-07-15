import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import AppProvider from './AppProvider';
import AuthProvider from './AuthProvider';
import BookingProvider from './BookingProvider';
import RatingProvider from './RatingProvider';
import NetInfo from '@react-native-community/netinfo';
import EarningProvider from './EarningsProvider';
import PackageProvider from './PackageProvider';

export const BASE_URL = 'http://suds-2-u.com/api/';
export const ERROR = 5
export const LOADING = 6

export const partialProfileUrl = "http://suds-2-u.com/public/profile/"


const Providers = ({ children }) => {
  return (
    <AppProvider>
      <AuthProvider>
        <RatingProvider>
          <EarningProvider>
            <BookingProvider>
              <PackageProvider>
                {children}
              </PackageProvider>
            </BookingProvider>
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
    Object.entries(params).forEach(([key, value]) =>key.includes('image') ? formData.append(key, { uri: value.uri, name: value.fileName, type: 'image/jpeg' }) : formData.append(key, value))
    console.log(params)
    let url = `${BASE_URL}${subfix}?`
    let res = await fetch(url, {
      method: method,
      headers: { 'App-Key': AppKey, 'Content-Type': 'multipart/form-data' },
      body: method == "GET" ? null : formData
    });
    let jsonResponse = await res.json();
    console.log(subfix,jsonResponse);
    if (!jsonResponse.response) {
      if (onFalse) onFalse(jsonResponse);
      else Alert.alert('Alert', jsonResponse.message);
    } else if (isEmptyResponse(jsonResponse)) return { ...jsonResponse, empty: true }
    else return jsonResponse;
  } catch (error) {
    console.log('FAIL', error);
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

export const callApi2 = async (subfix, AppKey, params, onFalse, method = 'POST') => {
  console.log("SAVE BOOKING PARAMS", params)
  try {
    await checkConnection();
    let url = `${BASE_URL}${subfix}?` + new URLSearchParams(params);
    let res = await fetch(url, {
      method: method,
      headers: { 'App-Key': AppKey, 'Content-Type': 'application/json' },
    });
    let text = await res.text()
    console.log('TEXT', text)
    let jsonResponse = JSON.parse(text)
    console.log("SAVE BOOKING JSON REPONSE", jsonResponse);
    if (jsonResponse.response) return jsonResponse.response
    else Alert.alert('Alert', jsonResponse.message);
  } catch (error) {
    console.log("Savebooking error > ", error);
  }
};