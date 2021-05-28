import React, {useContext, useEffect, useReducer} from 'react';
import {callApi} from '.';
import {AuthContext} from './AuthProvider';

export const BookingContext = React.createContext();

export const ACTIONS = {
  OnFail: 'onFail',
  OnInit: 'onInit',
  Start: 'Start',
  OnStartSuccess: 'onStartSuccess',
  LoadMore: 'LoadMore',
  OnLoadMoreSuccess: 'onLoadMoreSuccess',
  Refresh: 'Refresh',
  OnRefreshSuccess: 'onRefreshSuccess',
};

const initialState = {
  bookingHistory: [],
  loading: false,
  refreshing: false,
  type: ACTIONS.OnInit,
  hasLoadedAllItems: false,
  pagecount: 0,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case ACTIONS.OnFail:
      return {...state, loading: false, refreshing: false, type: ACTIONS.OnFail};
    case ACTIONS.OnInit:
      return initialState;
    case ACTIONS.Start:
      return {...initialState, loading: true, type: ACTIONS.Start};
    case ACTIONS.OnStartSuccess:
      return {
        ...state,
        loading: false,
        bookingHistory: payload.bookingHistory,
        type: ACTIONS.OnStartSuccess,
        hasLoadedAllItems: payload.bookingHistory.length < 10,
      };
    case ACTIONS.LoadMore:
      return {...state, pagecount: state.pagecount + 1, loading: true, type: ACTIONS.LoadMore};
    case ACTIONS.OnLoadMoreSuccess:
      return {
        ...state,
        loading: false,
        bookingHistory: [...state.bookingHistory, ...payload.bookingHistory],
        type: ACTIONS.OnLoadMoreSuccess,
        hasLoadedAllItems: payload.bookingHistory.length < 10,
      };
    case ACTIONS.Refresh:
      return {...state, pagecount: 0, refreshing: true, type: ACTIONS.Refresh};
    case ACTIONS.OnRefreshSuccess:
      return {
        ...state,
        refreshing: false,
        bookingHistory: payload.bookingHistory,
        type: ACTIONS.OnRefreshSuccess,
        hasLoadedAllItems: payload.bookingHistory.length < 10,
      };
    default:
      return state;
  }
};

const BookingProvider = ({children}) => {
  const {userData} = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => onStateChange(state), [state]);

  const onStateChange = async state => {
    console.log(state);
    if (state.type.includes('on')) return;
    let json = await fakeCallApi('bookinghistory', userData.api_token, {user_id: userData.id, pagecount: state.pagecount});
    if (json) dispatch({type: `on${state.type}Success`, payload: {bookingHistory: json.data}});
    else dispatch({type: ACTIONS.OnFail});
  };

  const getSingleBookingDetails = async booking_id => await callApi('singlebookingdetails', userData.api_token, {booking_id:booking_id});

  const acceptJob = async booking_id => await callApi('accept_job', userData.api_token, {user_id: userData.id, booking_id});

  const rejectJob = async booking_id => await callApi('reject_job', userData.api_token, {user_id: userData.id, booking_id});

  const finishedjob = async data => callApi('finishedjob', userData.api_token, {...data,user_id:userData.id})

  return <BookingContext.Provider value={{state, dispatch, acceptJob, rejectJob, getSingleBookingDetails, finishedjob}}>{children}</BookingContext.Provider>;
};

export default BookingProvider;

const fakeCallApi = (subfix, AppKey, {pagecount}, onFalse, method = 'POST') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: Data.slice(pagecount * 10, (pagecount + 1) * 10)});
      // resolve({data:[]})
    }, 500);
  });
};

let Data = [
  {
    booking_id: '1',
    user_id: '6',
    userdetails: [
      {
        id: '6',
        name: 'adminbb',
        email: 'admisnss@gmail.com',
        email_verified_at: null,
        role_as: '3',
        password: '$2y$10$wXxaQMqNPKhVUYCmQefGMuOqUPYwY9NGqht/u0I1jMT/t5u/pc5Zm',
        image:
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        mobile: '963214584',
        status: '0',
        remember_token: 'CDGs62sIauvXTZa4ndQP1EFzkL1NR3pv0FteaWjyyJ1XvnMyY8pBDECWhNBb',
        latitude: null,
        longitude: null,
        created_at: '2021-03-30 22:55:15',
        api_token: null,
        updated_at: '2021-04-02 21:51:54',
      },
    ],
    washer_id: '4',
    vehicle_id: '1',
    vehicledetails: [
      {
        vehicle_id: '1',
        user_id: '6',
        vehicle_type: null,
        category_id: '2',
        make: 'today',
        year: '2021',
        model: 'Dodge Ram 3500 Truck',
        engine: '40',
        image: 'car.jpg',
        created_at: '2021-04-05 16:57:11',
        updated_at: '2021-04-05 16:57:11',
      },
    ],
    booking_date: '2021-05-05',
    booking_time: '10:00 AM',
    package: '10',
    extra_add_ons: '7,8',
    extraaddonsdetails: [
      {
        id: '7',
        package_id: '15',
        add_ons_name: 'extra oil',
        add_ons_price: '20',
        created_at: '2021-04-06',
        updated_at: '2021-04-08',
      },
    ],
    wash_location: 'mahu naka',
    total: '290',
    status: '1',
    created_at: '2021-04-06',
    updated_at: '2021-04-07',
  },
  {
    booking_id: '2',
    user_id: '6',
    userdetails: [
      {
        id: '6',
        name: 'adminbb',
        email: 'admisnss@gmail.com',
        email_verified_at: null,
        role_as: '3',
        password: '$2y$10$wXxaQMqNPKhVUYCmQefGMuOqUPYwY9NGqht/u0I1jMT/t5u/pc5Zm',
        image:
          'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        mobile: '963214584',
        status: '0',
        remember_token: 'CDGs62sIauvXTZa4ndQP1EFzkL1NR3pv0FteaWjyyJ1XvnMyY8pBDECWhNBb',
        latitude: null,
        longitude: null,
        created_at: '2021-03-30 22:55:15',
        api_token: null,
        updated_at: '2021-04-02 21:51:54',
      },
    ],
    washer_id: '4',
    vehicle_id: '1',
    vehicledetails: [
      {
        vehicle_id: '1',
        user_id: '6',
        vehicle_type: null,
        category_id: '2',
        make: 'today',
        year: '2021',
        model: 'new model',
        engine: '40',
        image: 'car.jpg',
        created_at: '2021-04-05 16:57:11',
        updated_at: '2021-04-05 16:57:11',
      },
    ],
    booking_date: '2021-05-05',
    booking_time: '10:00 AM',
    package: '10',
    extra_add_ons: '7,8',
    extraaddonsdetails: [
      {
        id: '7',
        package_id: '15',
        add_ons_name: 'extra oil',
        add_ons_price: '20',
        created_at: '2021-04-06',
        updated_at: '2021-04-08',
      },
    ],
    wash_location: 'mahu naka',
    total: '290',
    status: '1',
    created_at: '2021-04-06',
    updated_at: '2021-04-07',
  },
];
