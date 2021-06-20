import React, { useContext } from "react";
import CasesContext from "../../store/Cases-context";

function LastUpdateTime(props) {
  const ctx = useContext(CasesContext);

  return (
    <div className="row align-items-center d-flex">
      <div className="col-md-10 mb-3 ">
        <span className="text-secondary mr-2">Last Updated:</span>
        <strong className="text-primary updated-time">
          {new Date(ctx.AllCases.updated).toLocaleString()}
        </strong>
      </div>
      <div className="col-md-2 mb-3">
        <form onChange={(e) => ctx.oncountryChange(e.target.value)}>
          <select class="form-control form-control-sm form-select">
            <option>worldwide</option>
            {ctx.AllCountries.map((country) => (
              <option key={country.name}>{country.name}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default LastUpdateTime;
