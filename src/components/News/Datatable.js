import React, { useContext } from "react";
import CasesContext from "../../store/Cases-context";

function Datatable(props) {
  const ctx = useContext(CasesContext);

  const countries = ctx.sortedCountries("todayCases");
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="text-center"> Country Wise Recent Cases</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table class="table table-hover ">
            <thead>
              <tr className="text-center">
                <th scope="col"></th>
                <th scope="col">Country</th>
                <th scope="col">todayCases</th>
                <th scope="col">todayDeaths</th>
                <th scope="col">todayRecovered</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr key={country.name} className="text-center">
                  <th scope="row">
                    <img
                      src={country.countryInfo.flag}
                      alt="flag"
                      width="30"
                    ></img>
                  </th>
                  <td>{country.country}</td>
                  <td>{country.todayCases}</td>
                  <td>{country.todayDeaths}</td>
                  <td>{country.todayRecovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Datatable;
