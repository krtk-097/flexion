import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaz_arWWdKrkyoiCpaPAGChcl89sOMerY",
  authDomain: "fir-auth-ae058.firebaseapp.com",
  projectId: "fir-auth-ae058",
  storageBucket: "fir-auth-ae058.appspot.com",
  messagingSenderId: "355071129603",
  appId: "1:355071129603:web:0c278b19342963c17ef636",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
