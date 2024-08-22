import { useEffect, useState } from "react";
import CountryCard from "./components/Card/CountryCard";

import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import RegionsDropDownButton from "./components/RegionsDropDown/RegionsDropDownButton";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchFilterBar from "./components/SearchFilterBar/SearchFilterBar";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all");
  
  const [countries, setCountries] = useState([]);
  

  // Update the countries state when data is fetched
  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  return (
    <>
      <Header />
      <SearchFilterBar className={"mt-5"}>
        <SearchBar />
        <RegionsDropDownButton />
      </SearchFilterBar>

      {error && <p className="text-danger">Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardList>
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </CardList>
      )}
    </>
  );
};

export default App;
