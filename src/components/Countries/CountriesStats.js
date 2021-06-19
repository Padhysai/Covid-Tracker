import React from "react";
import StatsColumn from "./StatsColumn";

function CountriesStats(props) {
  return (
    <div className="container">
      <div className="row mt-3">
        <StatsColumn name="Top Cases" keyName="cases" />
        <StatsColumn name="Today Cases" keyName="todayCases" />
        <StatsColumn name="Top Deaths" keyName="deaths" />
        <StatsColumn name="Today Deaths" keyName="todayDeaths" />
        <StatsColumn name="Active" keyName="active" />
        <StatsColumn name="Recovered" keyName="recovered" />
      </div>
    </div>
  );
}

export default CountriesStats;
