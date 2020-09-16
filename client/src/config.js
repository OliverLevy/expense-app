// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAEsJn5y1tSpsAaPrESLp5_fYtn4n124s",
  authDomain: "expense-app-31029.firebaseapp.com",
  databaseURL: "https://expense-app-31029.firebaseio.com",
  projectId: "expense-app-31029",
  storageBucket: "expense-app-31029.appspot.com",
  messagingSenderId: "1090898258111",
  appId: "1:1090898258111:web:a9eaea8e682b6fda64fe0a",
  measurementId: "G-XG2DFJMXKD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase