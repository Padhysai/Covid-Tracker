import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import CasesContext from "../../store/Cases-context";

function PieChart(props) {
  const ctx = useContext(CasesContext);
  const data = {
    labels: ["Total Cases", "Total Recovered", "Total Deaths"],
    datasets: [
      {
        label: "Covid Tracker",
        data: [ctx.AllCases.cases, ctx.AllCases.recovered, ctx.AllCases.deaths],
        backgroundColor: [
          "rgba(206,79,255,0.2)",
          "rgba(51,123,255,0.2)",
          "	rgba(255,0,0,0.2)",
        ],
        borderColor: [
          "rgba(206,79,255,1)",
          "rgba(51,123,255,1)",
          "rgba(255,0,0,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="col col-md-12 col-xl-12 col-xs-12 mb-4">
      <div className="card">
        <div className="card-body">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default PieChart;
