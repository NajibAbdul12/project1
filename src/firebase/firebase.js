import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaoFUakFqQbuClPQrggpCLUjD8AlMMPHE",
  authDomain: "project20-1b9c9.firebaseapp.com",
  projectId: "project20-1b9c9",
  storageBucket: "project20-1b9c9.appspot.com",
  messagingSenderId: "206902951753",
  appId: "1:206902951753:web:6f945e8d06cace64156498"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;