import React from "react";
import numeral from "numeral";

function NumberCard(props) {
  return (
    <div className="col-md-6 col-xl-6 col-xs-12 col-sm-12 mb-4">
      <div className="card">
        <div className="card-body number-card">
          <div className="Numbercard__icon">
            <img src={props.icon} alt="" width="48" height="48" />
          </div>
          <div>
            <h6 className="text-secondary text-center">{props.casetype}</h6>
            <h4 className="text-center">
              {numeral(props.cases).format("0,0")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberCard;
