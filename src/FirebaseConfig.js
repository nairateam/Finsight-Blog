// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDppCHmx7-K3GyFuw66bADC3jQOPM4PALY",
  authDomain: "femi-s-blog.firebaseapp.com",
  databaseURL: "https://femi-s-blog-default-rtdb.firebaseio.com",
  projectId: "femi-s-blog",
  storageBucket: "femi-s-blog.appspot.com",
  messagingSenderId: "992937767118",
  appId: "1:992937767118:web:ee40ff3b1ca746df3c209f",
  measurementId: "G-LF8QKSE7C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
// export const mailProvider = new EmailAuthProvider;
export const provider = new GoogleAuthProvider();