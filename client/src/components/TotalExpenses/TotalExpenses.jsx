import React, { useContext } from "react";
import { ExpenseContext } from "../../UserContext";
import './TotalExpenses.scss'

export default function TotalExpenses() {
  const { userExpenses } = useContext(ExpenseContext);

  const calcTotal = () => {
    let output = 0;
    userExpenses.forEach((item) => {
      output = output + item.amount;
    });
    return output;
  };

  return (
    <div className='total-expenses'>
      <h2>Total Expenses</h2>
      <h2>${calcTotal()}</h2>
      <div className="divider"></div>
    </div>
  );
}
