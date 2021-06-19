import React, { useContext } from "react";
import numeral from "numeral";
import CasesContext from "../../store/Cases-context";

function StatsColumn(props) {
  const ctx = useContext(CasesContext);

  //console.log(ctx.sortedCountries("cases"));
  const Countries = ctx.sortedCountries(props.keyName);
  return (
    <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-3">
      <h5 className="text-center">
        <strong>{props.name}</strong>
      </h5>
      <ul className="country-list">
        {Countries.map((country) => (
          <li className="country-list-items">
            <span>
              <img src={country.countryInfo.flag} width="30" alt="flag"></img>
            </span>
            <span className="display-3">{country.country}</span>
            <span className="display-4 text-secondary">
              {numeral(country[props.keyName]).format("0,0")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatsColumn;
