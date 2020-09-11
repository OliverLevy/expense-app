import React, { useContext } from "react";
import { IncomeContext } from "../../UserContext";
import "./Income.scss";

export default function Income() {
  const { userIncome, setUserIncome } = useContext(IncomeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserIncome(e.target.income.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Income</h3>
        <div>
          <label htmlFor="income">
            How much do you make a month after tax?
          </label>
          <input type="number" name="income" step="any" />
        </div>
        {userIncome === null ? (
          <p>please enter your monthly income</p>
        ) : (
          <p>Your income is ${userIncome} per month</p>
        )}
      </form>
    </div>
  );
}
