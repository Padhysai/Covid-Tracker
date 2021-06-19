import React, { useContext } from "react";
import Map from "./Map";
import NumberCard from "./NumberCard";
import PieChart from "./PieChart";
import UserIcon from "./users.png";
import Death from "./death.png";
import Recovered from "./recovered.png";
import Alert from "./alert.png";
import CasesContext from "../../store/Cases-context";

function NumbersAndMap(props) {
  const ctx = useContext(CasesContext);

  return (
    <div className="row mt-2">
      <div className="col-xl-5">
        <div className="row align-items-center">
          <NumberCard
            icon={UserIcon}
            casetype="Total Cases"
            cases={ctx.AllCases.cases}
          />
          <NumberCard
            icon={Death}
            casetype="Total Deaths"
            cases={ctx.AllCases.deaths}
          />
          <NumberCard
            icon={Recovered}
            casetype="Total Recovered"
            cases={ctx.AllCases.recovered}
          />
          <NumberCard
            icon={Alert}
            casetype="New Cases"
            cases={ctx.AllCases.todayCases}
          />
          <PieChart />
        </div>
      </div>
      <div className="col-xl-7">
        <div className="card">
          <div className="card-body">
            <Map
              mapCountries={ctx.mapCountries}
              center={ctx.mapCenter}
              zoom={ctx.mapZoom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumbersAndMap;
