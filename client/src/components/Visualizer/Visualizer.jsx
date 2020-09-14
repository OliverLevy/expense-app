import React from "react";
import "./Visualizer.scss";

export default function Visualizer({ income, totalExpenses }) {
  console.log(income, totalExpenses);

  const percent = () => {
    return (totalExpenses * 100) / income;
  };

  return (
    <div>
      <p>here's the Visualizer</p>
      {income === null ? "" : <p>{percent()}% of my income</p>}
      <div className="percent">
        <div
          className="percent__expenses"
          style={{ width: income ? `${percent()}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}
