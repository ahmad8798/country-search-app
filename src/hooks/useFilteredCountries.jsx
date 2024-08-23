import { useMemo } from "react";

const useFilteredCountries = (countries, selectedRegion, searchTerm) => {
    return useMemo(() => {
      return countries.filter(country => {
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
        const matchesName = searchTerm ? country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return matchesRegion && matchesName;
      });
    }, [selectedRegion, searchTerm, countries]);
  };
  
export default useFilteredCountries
  