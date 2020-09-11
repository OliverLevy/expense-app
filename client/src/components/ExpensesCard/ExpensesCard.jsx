import React from "react";

export default function ExpensesCard({ data }) {
  return (
    <div>
      <p>{data.amount}</p>
      <p>{data.notes}</p>
      <p>{data.timestamp}</p>
    </div>
  );
}
