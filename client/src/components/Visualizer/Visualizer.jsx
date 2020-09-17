import React from "react";
import "./Visualizer.scss";

export default function Visualizer({ income, totalExpenses }) {
  const percent = () => {
    return ((totalExpenses * 100) / income).toFixed(2);
  };

  return (
    <div className="visualizer">
      <p>Here's what that looks like:</p>
      <div className="percent">
        {income === 0 ? (
          ""
        ) : (
          <p className="percent__text">{percent()}% of my income</p>
        )}
        <div
          className="percent__expenses"
          style={{ width: income ? `${percent()}%` : "0%" }}
        ></div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
