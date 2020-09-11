import React, { useState, useMemo } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ExpenseContext, IncomeContext } from "./UserContext";

function App() {
  const [userIncome, setUserIncome] = useState(null);
  const [userExpenses, setUserExpenses] = useState([]);

  const providerIncome = useMemo(() => ({ userIncome, setUserIncome }), [
    userIncome,
    setUserIncome,
  ]);

  const providerExpenses = useMemo(() => ({ userExpenses, setUserExpenses }), [
    userExpenses,
    setUserExpenses,
  ]);

  return (
    <div className="App">
      <Header />
      <IncomeContext.Provider value={providerIncome}>
        <ExpenseContext.Provider value={providerExpenses}>
          <Main />
        </ExpenseContext.Provider>
      </IncomeContext.Provider>
    </div>
  );
}

export default App;
