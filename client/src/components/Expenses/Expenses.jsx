import React, { useContext, useEffect } from "react";
import { ExpenseContext, UserContex } from "../../UserContext";
import { v4 as uuid } from "uuid";
import "./Expenses.scss";

import ExpensesCard from "../ExpensesCard/ExpensesCard";
import firebase from "../../config";

export default function Expenses() {
  const { userExpenses, setUserExpenses } = useContext(ExpenseContext);
  const { userInfo } = useContext(UserContex);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.uid)
      .collection("expenses")
      .onSnapshot((querySnapshot) => {
        const output = [];
        querySnapshot.forEach((item) => {
          output.push(item.data());
        });
        setUserExpenses(output);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.amount.value || !e.target.notes.value) {
      alert("please add fill all the fields");
    } else {
      let data = {
        id: uuid(),
        timestamp: Date.now(),
        amount: Number(e.target.amount.value),
        notes: e.target.notes.value,
      };
      setUserExpenses([...userExpenses, data]);
      firebase
        .firestore()
        .collection("users")
        .doc(userInfo.uid)
        .collection("expenses")
        .doc(data.id)
        .set(data);
      e.target.reset();
      e.target.amount.focus();
    }
  };

  return (
    <div className="expenses">
      <h2>Add Expenses</h2>
      <p>add expenses here</p>
      <form onSubmit={(e) => handleClick(e)}>
        <div className='expenses__input-container'>
          <label htmlFor="amount" className="label">
            Amount:{" "}
          </label>
          <input
            type="number"
            name="amount"
            step="any"
            className="expenses__input"
            placeholder="Expense Amount"
          />
          
        </div>
        <div>
          <label htmlFor="notes" className="label">
            Description:{" "}
          </label>
          <textarea
            type="text"
            name="notes"
            className="expenses__input-text"
            placeholder="Desciption"
          />
        </div>
        <button type="submit" className='btn'><p>Add</p></button>
      </form>
      {userExpenses.length !== 0 ? (
        userExpenses.map((item) => {
          return <ExpensesCard data={item} key={item.id} />;
        })
      ) : (
        <p>no expenses saved</p>
      )}
    </div>
  );
}
