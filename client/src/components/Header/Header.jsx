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
        console.log('logged out')
        setUserInfo(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <p>this is the header</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!userInfo ? "" : <button onClick={() => signOut()}>signOut</button>}
    </div>
  );
}
