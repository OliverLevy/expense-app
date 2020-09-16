import React, { useState, useContext, useEffect } from "react";
import { UserContex } from "../../UserContext";
// import * as firebase from "firebase/app";
// import "firebase/auth";
import firebase from "../../config";

// export default function Signin() {
//   const { userInfo, setUserInfo } = useContext(UserContex);
//   const [loading, setLoading] = useState(false);

//   //checks if a user is already signed in
//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in.
//         setUserInfo(user);
//       } else {
//         // No user is signed in.
//         console.log("no one is signed in");
//       }
//     });
//   });

//   const googleLogin = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(function (result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const token = result.credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//         setUserInfo(user);
//       })
//       .catch(function (error) {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         const credential = error.credential;
//         // ...
//       });
//   };

//   const facebookLogin = () => {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const token = result.credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//         console.log(321, user);
//         setUserInfo(user);
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         const credential = error.credential;
//         console.log(error);
//         // ...
//       });
//   };

//   return (
//     <div>
//       <p>hi</p>
//       {loading ? "loading" : "not loading"}
//       <button onClick={() => googleLogin()}>Google</button>
//       <button onClick={() => facebookLogin()}>Facebook</button>
//     </div>
//   );
// }

// const GoogleLogin = () => {
//   const { userInfo, setUserInfo } = useContext(UserContex);
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // const token = result.credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//       setUserInfo(user);
//     })
//     .catch(function (error) {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       const credential = error.credential;
//       // ...
//       console.log(errorCode, errorMessage, email, credential)
//     });
// };

// const FacebookLogin = () => {
//   const { userInfo, setUserInfo } = useContext(UserContex);
//   const provider = new firebase.auth.FacebookAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//       // const token = result.credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//       console.log(321, user);
//       setUserInfo(user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       const credential = error.credential;
//       console.log(errorCode, errorMessage, email, credential);
//       // ...
//     });
// };

export const HandleLoad = () => {
  const { userInfo, setUserInfo } = useContext(UserContex);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUserInfo(user);
        setLoading(false);
      } else {
        // No user is signed in.
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [userInfo, setUserInfo, loading, setLoading]);

  const isLoading = () => {
    // check if the user is already logged in
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  };

  const notLoggedIn = () => {
    const googleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          setUserInfo(user);
          console.log(user.uid);
          console.log(user);
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .set({
              name: user.displayName,
              avatar: user.photoURL,
              id: user.uid,
            })
            .then((suc) => console.log(suc))
            .catch((err) => console.log(err));
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
          console.log(errorCode, errorMessage, email, credential);
        });
    };

    const facebookLogin = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          // const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          setUserInfo(user);
          console.log(user);
          firebase.firestore().collection("users").doc(user.uid).set({
            name: user.displayName,
            avatar: user.photoURL,
            id: user.uid,
          });
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
          console.log(errorCode, errorMessage, email, credential);
        });
    };

    return (
      <div>
        <button onClick={() => googleLogin()}>Google</button>
        <button onClick={() => facebookLogin()}>Facebook</button>
      </div>
    );
  };

  return <div>{loading ? isLoading() : notLoggedIn()}</div>;
  //if no userInfo set state to loading
  //if no user logged in set state to not loading and render "notLoggedIn" function to render buttons
};
