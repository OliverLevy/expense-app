import React, { useContext } from "react";
import { ExpenseContext, IncomeContext } from "../../UserContext";

import Visualizer from '../Visualizer/Visualizer'

export default function Remainder() {
  const { userExpenses } = useContext(ExpenseContext);
  const { userIncome } = useContext(IncomeContext);

  const calcTotal = () => {
    let output = 0;
    userExpenses.forEach((item) => {
      output = output + item.amount;
    });
    return output;
  };

  const calcRemainder = () => {
    return Math.round((userIncome - calcTotal()) * 1e2) / 1e2;
  };

  return (
    <div>
      <h5>total remainder after expenses:</h5>
      <h5>${calcRemainder()}</h5>

      <Visualizer income={userIncome} totalExpenses={calcTotal()}/>
    </div>
  );
}
