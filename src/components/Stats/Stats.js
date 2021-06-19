import React from "react";
import LastUpdateTime from "./LastUpdateTime";
import NumbersAndMap from "./NumbersAndMap";

function Stats(props) {
  return (
    <div className="content-body">
      <div className="container">
        <LastUpdateTime />
        <NumbersAndMap />
      </div>
    </div>
  );
}

export default Stats;
