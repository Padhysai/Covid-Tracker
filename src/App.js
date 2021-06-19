import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import CasesProvider from "./store/CasesProvider";
import CountriesStats from "./components/Countries/CountriesStats";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <CasesProvider>
      <Header />
      <Stats />
      <CountriesStats />
    </CasesProvider>
  );
}

export default App;
