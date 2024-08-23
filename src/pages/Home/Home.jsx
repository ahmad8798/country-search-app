import { useCallback, useEffect, useState } from "react";
import CountryCard from "../../components/Card/CountryCard";
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import RegionsDropDownButton from "../../components/RegionsDropDown/RegionsDropDownButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import useFetch from "../../hooks/useFetch";
import "./home.css";
import useFilteredCountries from "../../hooks/useFilteredCountries";
import { extractRegions } from "../../helpers/extractRegions";
import SkeletonCardList from "../../components/SkeletonCardList/SkeletonCardList";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [countries, setCountries] = useState([]);

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const toggleDarkMode = useCallback(() => {
    setIsDarkModeEnabled((prevMode) => !prevMode);
  }, []);

  // Update the countries state when data is fetched
  useEffect(() => {
    if (data) {
      setCountries(data);
      const extractedRegions = extractRegions(data);
      setRegions(extractedRegions);
    }
  }, [data]);

  const filteredCountries = useFilteredCountries(
    countries,
    selectedRegion,
    searchTerm
  );

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className={isDarkModeEnabled ? "home-page-wrapper" : ""}>
      <Header
        isDarkModeEnabled={isDarkModeEnabled}
        toggleDarkMode={toggleDarkMode}
      />
      <SearchFilterBar className={"mt-5"}>
        <SearchBar
          handleSearchChange={handleSearchChange}
          isDarkModeEnabled={isDarkModeEnabled}
        />
        <RegionsDropDownButton
          selectedRegion={selectedRegion}
          handleRegionChange={handleRegionChange}
          regions={regions}
          isDarkModeEnabled={isDarkModeEnabled}
        />
      </SearchFilterBar>
      {error && <p className="text-danger">Error: {error}</p>}
      {loading ? (
      <SkeletonCardList count={12}/>
      ) : (
        <CardList>
          {filteredCountries.map((country) => (
            <CountryCard
              isDarkModeEnabled={isDarkModeEnabled}
              key={country.cca3}
              country={country}
            />
          ))}
        </CardList>
      )}
    </div>
  );
};

export default Home;
