import React, { useState } from 'react';


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  return <AppContext.Provider value={{loading, setLoading}}>{children}</AppContext.Provider>;
};

export default AppProvider;
