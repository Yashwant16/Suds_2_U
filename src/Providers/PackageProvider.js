import React, {useContext, useEffect, useReducer} from 'react';
import {callApi} from '.';
import {AuthContext} from './AuthProvider';
import { BookingContext } from './BookingProvider';

export const PackageContext = React.createContext();

const PackageProvider = ({children}) => {
  const {userData} = useContext(AuthContext);
  const {currentBooking} = useContext(BookingContext)

  const updatePackageDetails = async data => await callApi('updatepackages', userData.api_token, {...data, user_id: userData.id});
  const getPackageDetails = async type => await callApi('singlepackagesdetails', userData.api_token, {type, user_id: userData.id});

  const getPackages = async (packageParams) =>{
    console.log('package params > > >', packageParams)
    if(currentBooking.vehicle_type==1) return await callApi('demandPackagesDetails', userData.api_token, {vendor_id : currentBooking.washer_id});
    return await callApi('packages', userData.api_token, currentBooking.packageParams);
    }

  return <PackageContext.Provider value={{updatePackageDetails, getPackageDetails, getPackages}}>{children}</PackageContext.Provider>;
};

export default PackageProvider;
