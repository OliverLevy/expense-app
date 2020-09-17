import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import { HandleLoad } from "./components/Signin/Signin";
import { ExpenseContext, IncomeContext, UserContex } from "./UserContext";

function App() {
  const [userIncome, setUserIncome] = useState(null);
  const [userExpenses, setUserExpenses] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const providerUser = useMemo(() => ({ userInfo, setUserInfo }), [
    userInfo,
    setUserInfo,
  ]);

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
      <Router>
        <UserContex.Provider value={providerUser}>
          <IncomeContext.Provider value={providerIncome}>
            <ExpenseContext.Provider value={providerExpenses}>
              <Header />
              {!userInfo ? (
                <div>
                  <HandleLoad />
                  <About />
                </div>
              ) : (
                <Switch>
                  <Route exact path="/">
                    <Main />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                </Switch>
              )}
            </ExpenseContext.Provider>
          </IncomeContext.Provider>
        </UserContex.Provider>
      </Router>
    </div>
  );
}

export default App;
