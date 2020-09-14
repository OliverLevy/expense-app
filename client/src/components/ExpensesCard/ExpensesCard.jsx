import React, { useContext, useState, useRef } from "react";
import Moment from "react-moment";

import { ExpenseContext } from "../../UserContext";

export default function ExpensesCard({ data }) {
  const { userExpenses, setUserExpenses } = useContext(ExpenseContext);

  const [isInEditeMode, setIsInEditMode] = useState(false);

  const amountRef = useRef(null);
  const notesRef = useRef(null);

  const handleDelete = (id) => {
    //filter to return array with objects that do not have the same id
    //setUseExpenses to the new array
    const output = userExpenses.filter((item) => {
      return item.id !== id;
    });
    setUserExpenses(output);
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

    const newArray = [...userExpenses];
    newArray[position] = newValue;
    setUserExpenses(newArray);
    editToggle();
  };

  const EditMode = () => {
    return (
      <div>
        <input
          type="number"
          step="any"
          defaultValue={data.amount}
          ref={amountRef}
        />
        <input type="text" defaultValue={data.notes} ref={notesRef} />
        <button onClick={() => submitEdit(data.id)}>save</button>
        <button onClick={() => editToggle()}>cancel</button>
      </div>
    );
  };

  const defaultMode = () => {
    return (
      <div>
        <p>{data.amount}</p>
        <p>{data.notes}</p>
        <p>
          <Moment fromNow>{data.timestamp}</Moment>
        </p>
        <button onClick={() => handleDelete(data.id)}>delete</button>
        <button onClick={() => editToggle()}>edit</button>
      </div>
    );
  };

  return isInEditeMode ? EditMode() : defaultMode();
}

//take an array of object and filter to find the matching id.

//take object and place its contents in inputs

//can a conditional save button and cancel button

//on save, splice it into original array of objects
