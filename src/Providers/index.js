import React from 'react';
import AppProvider from './AppProvider';
import AuthProvider from './AuthProvider';
import BookingProvider from './BookingProvider';

const Providers = ({children}) => {
  return (
    <AppProvider>
      <AuthProvider>
        <BookingProvider>{children}</BookingProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default Providers;

export const callApi = async (subfix, AppKey, params, onFalse, method = 'POST') => {
  try {
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
