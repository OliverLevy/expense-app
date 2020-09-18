import React, { useContext, useEffect } from "react";
import { IncomeContext, UserContex } from "../../UserContext";
import "./Income.scss";
import firebase from "../../config";

export default function Income() {
  const { userIncome, setUserIncome } = useContext(IncomeContext);
  const { userInfo } = useContext(UserContex);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.uid)
      .onSnapshot((item) => {
        const income = item.data().income;

        if (income) {
          setUserIncome(income);
        } else {
          setUserIncome(0);
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserIncome(Number(e.target.income.value));
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.uid)
      .update({
        income: Number(e.target.income.value),
      });
    e.target.reset();
  };

  return (
    <div className="income">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="income__input-container">
          <label htmlFor="income">
            <h2>Enter your monthly income after tax:</h2>
          </label>

          <input
            type="number"
            name="income"
            step="any"
            className="income__input"
            placeholder="Monthly income after tax"
          />
        </div>
        <button type="submit" className="btn">
          <p>Add Income</p>
        </button>
        {userIncome === null ? (
          <p>please enter your monthly income</p>
        ) : (
          <div className="income__display">
            <h3>Monthly Income</h3>
            <h3>${userIncome}</h3>
          </div>
        )}
      </form>
    </div>
  );
}
