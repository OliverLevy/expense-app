import React, { useContext } from "react";
import { ExpenseContext, IncomeContext } from "../../UserContext";
import './Remainder.scss'


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
    <div className='remainder'>
      <h2>At a glance</h2>
      <p>Here's what's left over after all of your expenses:</p>
      <p>${calcRemainder()}</p>

      <Visualizer income={userIncome} totalExpenses={calcTotal()}/>
    </div>
  );
}
