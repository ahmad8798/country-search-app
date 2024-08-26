import { useContext, useEffect, useState } from "react";
import CountryCard from "../../components/Card/CountryCard";
import CardList from "../../components/CardList/CardList";
import SearchFilterBar from "../../components/SearchFilterBar/SearchFilterBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import RegionsDropDownButton from "../../components/RegionsDropDown/RegionsDropDownButton";
import useFilteredCountries from "../../hooks/useFilteredCountries";
import { extractRegions } from "../../helpers/extractRegions";
import SkeletonCardList from "../../components/SkeletonCardList/SkeletonCardList";
import "./home.css";
import CountryContext from "../../context/CountryContext";

const Home = () => {
  const { countries, loading, error } = useContext(CountryContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    if (countries.length > 0) {
      const extractedRegions = extractRegions(countries);
      setRegions(extractedRegions);
    }
  }, [countries]);

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
    <div className="home-page">
      <SearchFilterBar className="mt-5">
        <SearchBar handleSearchChange={handleSearchChange} />
        <RegionsDropDownButton
          selectedRegion={selectedRegion}
          handleRegionChange={handleRegionChange}
          regions={regions}
        />
      </SearchFilterBar>

      {error && <p className="text-danger">Error: {error}</p>}

      {loading ? (
        <SkeletonCardList count={12} />
      ) : (
        <CardList>
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </CardList>
      )}
    </div>
  );
};

export default Home;
