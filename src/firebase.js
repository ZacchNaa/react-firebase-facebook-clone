import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNfNZoXpg56idJPH4sI1UdqVKXUOADBI",
  authDomain: "facebook-clone-f25b4.firebaseapp.com",
  projectId: "facebook-clone-f25b4",
  storageBucket: "facebook-clone-f25b4.appspot.com",
  messagingSenderId: "270944758562",
  appId: "1:270944758562:web:f4c371776a9a446107537b",
  measurementId: "G-GH1HVPM0JZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// for facebook login
// https://facebook-clone-f25b4.firebaseapp.com/__/auth/handler
