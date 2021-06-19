import React from "react";

const CasesContext = React.createContext({
  AllCases: [],
  mapCenter: [],
  mapZoom: 3,
  mapCountries: [],
  oncountryChange: (casetype) => {},
  AllCountries: () => {},
  sortedCountries: () => {},
});

export default CasesContext;
