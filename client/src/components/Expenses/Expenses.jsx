import React, { useContext } from "react";
import { ExpenseContext } from "../../UserContext";
import { v4 as uuid } from "uuid";

import ExpensesCard from "../ExpensesCard/ExpensesCard";
import TotalExpenses from "../TotalExpenses/TotalExpenses";

export default function Expenses() {
  const { userExpenses, setUserExpenses } = useContext(ExpenseContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.amount.value || !e.target.notes.value) {
      alert("please add fill all the fields");
    } else {
      setUserExpenses([
        ...userExpenses,
        {
          id: uuid(),
          timestamp: Date.now(),
          amount: Number(e.target.amount.value),
          notes: e.target.notes.value,
        },
      ]);
      e.target.reset();
      e.target.amount.focus();
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        this is the form
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" step="any" />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <input type="text" name="notes" />
        </div>
        <button type="submit">add new expense</button>
      </form>
      {userExpenses.length !== 0 ? (
        userExpenses.map((item) => {
          return <ExpensesCard data={item} key={item.id} />;
        })
      ) : (
        <p>no expenses saved</p>
      )}

      <TotalExpenses />
    </div>
  );
}
