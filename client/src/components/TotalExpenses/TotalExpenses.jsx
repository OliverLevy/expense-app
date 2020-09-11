import React, { useContext } from "react";
import { ExpenseContext } from "../../UserContext";

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
    <div>
      <h5>total expenses:</h5>
      <h5>${calcTotal()}</h5>
    </div>
  );
}
