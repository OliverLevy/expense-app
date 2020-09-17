import React from "react";
import "./Visualizer.scss";

export default function Visualizer({ income, totalExpenses }) {
  const percent = () => {
    return ((totalExpenses * 100) / income).toFixed(2);
  };

  return (
    <div>
      <p>here's the Visualizer</p>
      {income === 0 ? "" : <p>{percent()}% of my income</p>}
      <div className="percent">
        <div
          className="percent__expenses"
          style={{ width: income ? `${percent()}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}
