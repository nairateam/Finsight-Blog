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
  apiKey: "AIzaSyAUO0M5N1ug-Rg2Zgt0h5-_PhmVq_mWSBA",
  authDomain: "finsight-bfe30.firebaseapp.com",
  projectId: "finsight-bfe30",
  storageBucket: "finsight-bfe30.appspot.com",
  messagingSenderId: "781619824642",
  appId: "1:781619824642:web:dadab81b7864d71e397f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
// export const mailProvider = new EmailAuthProvider;
export const provider = new GoogleAuthProvider();