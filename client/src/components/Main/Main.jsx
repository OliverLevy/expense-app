import React from "react";
import "./Main.scss";

import Income from "../Income/Income";
import Expenses from "../Expenses/Expenses";
import Remainder from "../Remainder/Remainder";
import TotalExpenses from "../TotalExpenses/TotalExpenses";

export default function Main() {
  return (
    <div className='main'>
      <Income />
      <Remainder />
      <TotalExpenses/>
      <Expenses />
    </div>
  );
}
