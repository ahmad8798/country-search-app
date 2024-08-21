import { useEffect, useState } from "react";
import CountryCard from "./components/Card/CountryCard";

import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";


const App = () => {
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const result = await response.json();
      setCountries(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <Header />
      <CardList>
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </CardList>
    </>
  );
};

export default App;
