import React, { useContext, useState, useRef } from "react";
import Moment from "react-moment";
import firebase from "../../config";
import "./ExpensesCard.scss";

import { ExpenseContext, UserContex } from "../../UserContext";

export default function ExpensesCard({ data }) {
  const { userExpenses, setUserExpenses } = useContext(ExpenseContext);
  const { userInfo } = useContext(UserContex);
  const [isInEditeMode, setIsInEditMode] = useState(true);

  const amountRef = useRef(null);
  const notesRef = useRef(null);

  const handleDelete = (id) => {
    //filter to return array with objects that do not have the same id
    //setUseExpenses to the new array
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.uid)
      .collection("expenses")
      .doc(id)
      .delete();
  };

  const editToggle = () => {
    setIsInEditMode(!isInEditeMode);
  };

  const submitEdit = (id) => {
    // console.log(userExpenses);
    // console.log(id);
    // console.log(amountRef.current.value);
    // console.log(notesRef.current.value);

    const oldValue = userExpenses.filter((item) => item.id === id);
    const position = userExpenses.findIndex((item) => item.id === id);
    const newValue = {
      amount: Number(amountRef.current.value),
      id: oldValue[0].id,
      notes: notesRef.current.value,
      timestamp: oldValue[0].timestamp,
    };

    // const newArray = [...userExpenses];
    // newArray[position] = newValue;
    // setUserExpenses(newArray);
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.uid)
      .collection("expenses")
      .doc(id)
      .update(newValue);
    editToggle();
  };

  const EditMode = () => {
    return (
      <div className="edit-expense">
        <p>new amount</p>
        <input
          type="number"
          step="any"
          defaultValue={data.amount}
          ref={amountRef}
          className="edit-expense__input"
        />
        <p>new description</p>
        <textarea
          defaultValue={data.notes}
          ref={notesRef}
          className="edit-expense__input-text"
        />
        <button
          onClick={() => submitEdit(data.id)}
          className="edit-expense__save"
        >
          <p>save</p>
        </button>
        <button onClick={() => editToggle()} className="edit-expense__cancel">
          <p>cancel</p>
        </button>
      </div>
    );
  };

  const defaultMode = () => {
    return (
      <div className="default-expense">
        <div className="default-expense__info">
          <h3>${data.amount}</h3>
          <p>on</p>
          <p>{data.notes}</p>
          <p>
            <Moment fromNow>{data.timestamp}</Moment>
          </p>
        </div>
        <button
          onClick={() => handleDelete(data.id)}
          className="default-expense__delete"
        >
          <p>x</p>
        </button>
        <button onClick={() => editToggle()} className="default-expense__edit">
          <p>edit</p>
        </button>
      </div>
    );
  };

  return isInEditeMode ? EditMode() : defaultMode();
}

//take an array of object and filter to find the matching id.

//take object and place its contents in inputs

//can a conditional save button and cancel button

//on save, splice it into original array of objects
