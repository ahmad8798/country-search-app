

export const extractRegions = (countries) => {
    return [...new Set(countries.map(country => country.region))];
  };
  

