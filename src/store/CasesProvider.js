import React, { useState, useEffect } from "react";
import CasesContext from "./Cases-context";

function CasesProvider(props) {
  const [TotalCases, SetTotalCases] = useState({});
  const [CountryCases, SetCountryCases] = useState([]);
  const [mapCenter, SetMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, SetMapZoom] = useState(3);

  // All cases
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        SetTotalCases(data);
      })
      .catch((err) => console.log("Error While fetching data", err));
  }, []);

  // cases by country
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        SetCountryCases(data);
      })
      .catch((err) => console.log("Error While fetching data", err));
  }, []);

  const countryChangeHandler = (country) => {
    const url =
      country === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${country}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetTotalCases(data);
        if (country === "worldwide") {
          SetMapCenter({ lat: 34.80746, lng: -40.4796 });
          SetMapZoom(3);
        } else {
          SetMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          SetMapZoom(4);
        }
      })
      .catch((err) => console.log("Error While fetching data", err));
  };

  const fetchAllCountries = (CountryCases) => {
    const Countries = CountryCases.map((country) => ({
      name: country.country,
    }));
    return Countries;
  };

  const sortedCountries = (key) => {
    const countries = [...CountryCases];
    return countries
      .sort((a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0))
      .slice(0, 10);
  };

  const casesContext = {
    AllCountries: fetchAllCountries(CountryCases),
    AllCases: TotalCases,
    mapCenter: mapCenter,
    mapZoom: mapZoom,
    mapCountries: CountryCases,
    oncountryChange: countryChangeHandler,
    sortedCountries: sortedCountries,
  };
  return (
    <CasesContext.Provider value={casesContext}>
      {props.children}
    </CasesContext.Provider>
  );
}

export default CasesProvider;
