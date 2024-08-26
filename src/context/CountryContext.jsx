import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";


const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  return (
    <CountryContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
