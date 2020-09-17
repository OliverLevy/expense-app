import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContex } from "../../UserContext";
import "./Header.scss";
import * as firebase from "firebase/app";
import "firebase/auth";

export default function Header() {
  const { userInfo, setUserInfo } = useContext(UserContex);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUserInfo(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <header className="header">
      <div className='header__inner'>
        <h1 className="header__title">Expense Tracker</h1>

        {!userInfo ? (
          ""
        ) : (
          <div className="header__nav-container">
            <button onClick={() => signOut()} className="header__signout">
              <h4>Log Out</h4>
            </button>
            <div className="header__nav-links">
              <Link to="/" className="header__link">
                Home
              </Link>
              <Link to="/about" className="header__link">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
