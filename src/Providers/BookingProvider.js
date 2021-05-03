import React, {useContext} from 'react';
import {AuthContext} from './AuthProvider';

export const BookingContext = React.createContext();

const BookingProvider = ({children}) => {
  const {userData} = useContext(AuthContext);

  const getBookingHistory = async () => await callApi('bookinghistory', userData.api_token, {user_id: userData.id});

  return (
    <BookingContext.Provider
      value={{
        getBookingHistory,
      }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;

const callApi = async (subfix, AppKey, params, onFalse, method = 'POST') => {
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
