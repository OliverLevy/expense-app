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
        <h3>Income</h3>
        <div className="income__input-container">
          <label htmlFor="income">
            How much do you make a month after tax?
          </label>
          <input
            type="number"
            name="income"
            step="any"
            className="income__input"
          />
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
