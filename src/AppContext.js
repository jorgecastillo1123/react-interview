import { createContext, useEffect, useState, useContext, useCallback } from "react";

// Create Context
const AppContext = createContext();

const AppProvider = ({children}) => {

  const [data, setData] = useState(undefined);
  const [query, setQuery] = useState('');

  const getData = useCallback(async() => {
    // if(query !== ''){
    //   const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    //   const response = await apiResponse.json()
    //   setData(response)
    // }
  }, [query])

  useEffect(() => {
    getData()
  }, [getData]);

  return (
    <AppContext.Provider
      value={{
        data,
        setQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);
export { AppProvider, useAppContext };