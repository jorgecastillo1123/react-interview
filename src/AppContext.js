import { createContext, useEffect, useState, useContext, useCallback } from "react";

// Create Context
const AppContext = createContext();

const AppProvider = ({children}) => {


  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);
export { AppProvider, useAppContext };