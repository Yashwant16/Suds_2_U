import React, {useContext, useEffect, useReducer} from 'react';
import { callApi } from '.';
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
  refreshing: false,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
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
    let json = await callApi('bookinghistory', userData.api_token, {user_id: userData.id, pagecount: state.pagecount});
    if (json) dispatch({type: `on${state.type}Success`, payload: {bookingHistory: json.data}});
  };

  return <BookingContext.Provider value={{state, dispatch}}>{children}</BookingContext.Provider>;
};

export default BookingProvider;

const fakeCallApi = (subfix, AppKey, {pagecount}, onFalse, method = 'POST') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: Data.slice(pagecount * 10, (pagecount + 1) * 10)});
    }, 2000);
  });
};

let Data = [
  {
    name: 'Simmy Rianabbb',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 1,
  },
  {
    name: 'Simmy Riana',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 2,
  },
  {
    name: 'David',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 3,
  },
  {
    name: 'Natasha',
    date: '24 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 4,
  },
  {
    name: 'Simmy Rianabbb',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 5,
  },
  {
    name: 'Simmy Riana',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 6,
  },
  {
    name: 'David',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 7,
  },
  {
    name: 'Natasha',
    date: '24 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 8,
  },
  {
    name: 'Simmy Rianabbb',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 9,
  },
  {
    name: 'Simmy Riana',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 10,
  },
  {
    name: 'David',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 11,
  },
  {
    name: 'Natasha',
    date: '24 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 12,
  },
  {
    name: 'Simmy Rianabbb',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 15,
  },
  {
    name: 'Simmy Riana',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 16,
  },
  {
    name: 'David',
    date: '22 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 17,
  },
  {
    name: 'Natasha',
    date: '24 Jan',
    dueAmount: '500 Rs',
    content: 'Quickly embrace installed base architectures with lot of fun and activity users.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    like: '25',
    comment: '50',
    vehicleType: 'Dodge Ram 3500 Truck',
    id: 18,
  },
];
