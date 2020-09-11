import React from "react";
import "./Main.scss";

import Income from "../Income/Income";
import Expenses from "../Expenses/Expenses";

export default function Main() {
  return (
    <div>
      <p>this is the main</p>
      <Income />
      <Expenses/>
    </div>
  );
}
