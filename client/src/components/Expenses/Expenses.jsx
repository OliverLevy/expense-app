import React, { useContext } from "react";
import { ExpenseContext, IncomeContext } from "../../UserContext";

export default function Expenses() {
  const { userExpenses, setUserExpenses } = useContext(ExpenseContext);
  const { userIncome } = useContext(IncomeContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.amount.value);
    console.log(e.target.notes.value);
    setUserExpenses([
      ...userExpenses,
      {
        time: Date.now(),
        amount: e.target.amount.value,
        notes: e.target.notes.value,
      },
    ]);
    e.target.reset();
  };

  console.log(userExpenses);
  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        this is the form
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <input type="text" name="notes" />
        </div>
        <button type="submit">add new expense</button>
      </form>
    </div>
  );
}
