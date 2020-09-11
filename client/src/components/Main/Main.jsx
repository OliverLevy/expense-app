import React from "react";
import "./Main.scss";

import Income from "../Income/Income";
import Expenses from "../Expenses/Expenses";
import Remainder from "../Remainder/Remainder";

export default function Main() {
  return (
    <div>
      <p>this is the main</p>
      <Income />
      <Expenses />
      <Remainder />
    </div>
  );
}
