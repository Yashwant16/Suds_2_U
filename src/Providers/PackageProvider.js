import React, {useContext, useEffect, useReducer} from 'react';
import {callApi} from '.';
import {AuthContext} from './AuthProvider';

export const PackageContext = React.createContext();

// export const PackagesMethod = React.createRef()
// export const WITH_VENDOR = '1'
// export const 

const PackageProvider = ({children}) => {
  const {userData} = useContext(AuthContext);

  const updatePackageDetails = async data => await callApi('updatepackages', userData.api_token, {...data, user_id: userData.id});
  const getPackageDetails = async type => await callApi('singlepackagesdetails', userData.api_token, {type, user_id: userData.id});

  const getPackages = async (params) =>{
    if(params.vendorId) return await callApi('demandPackagesDetails', userData.api_token, {vendor_id : params.vendorId});
    return await callApi('packages', userData.api_token, params);
    }

  return <PackageContext.Provider value={{updatePackageDetails, getPackageDetails, getPackages}}>{children}</PackageContext.Provider>;
};

export default PackageProvider;
