// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOYo3HmlBCB193CJMgdvg5ERIGpZq-oog",
  authDomain: "fir-f9efa.firebaseapp.com",
  projectId: "fir-f9efa",
  storageBucket: "fir-f9efa.appspot.com",
  messagingSenderId: "799643754935",
  appId: "1:799643754935:web:b7ff46fa32a58df2290832",
  measurementId: "G-JDJ991J3G8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };