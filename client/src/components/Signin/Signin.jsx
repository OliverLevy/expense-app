import React, { useContext, useEffect } from "react";
import { UserContex } from "../../UserContext";
import * as firebase from "firebase/app";
import "firebase/auth";



export default function Signin() {
  const { setUserInfo } = useContext(UserContex);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUserInfo(user);
      } else {
        // No user is signed in.
        console.log("no one is signed in");
      }
    });
  });

  // console.log(userInfo);

  return (
    <div>
      {isLoading()}
      {HandleAuth()}
    </div>
  );
}

const isLoading = () => {
  return (
    <div>
      <p>loading...</p>
    </div>
  );
};

const HandleAuthCheck = () => {};

const HandleAuth = () => {
  const { setUserInfo } = useContext(UserContex);
  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUserInfo(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };

  const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(321, user);
        setUserInfo(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={() => googleLogin()}>Google</button>
      <button onClick={() => facebookLogin()}>Facebook</button>
    </div>
  );
};
