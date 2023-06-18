// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuTK_YzCIxu3lJGtkf6jXqdL1wvwUXnfU",
  authDomain: "fyp-neuberg.firebaseapp.com",
  projectId: "fyp-neuberg",
  storageBucket: "fyp-neuberg.appspot.com",
  messagingSenderId: "640376566353",
  appId: "1:640376566353:web:45e0da786cdd9d3819be70",
  measurementId: "G-YNCPEVFD7G",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
