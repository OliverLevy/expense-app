import React, { useContext, useEffect } from "react";
import { ExpenseContext, UserContex } from "../../UserContext";
import { v4 as uuid } from "uuid";

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
        setUserExpenses(output)
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
    <div>
      <form onSubmit={(e) => handleClick(e)}>
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
    </div>
  );
}
