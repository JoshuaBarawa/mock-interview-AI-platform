// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp  } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUNOzidrSGUiXr3ycOAtKavrTexYUEVuI",
  authDomain: "prepwise-cd200.firebaseapp.com",
  projectId: "prepwise-cd200",
  storageBucket: "prepwise-cd200.firebasestorage.app",
  messagingSenderId: "658330416603",
  appId: "1:658330416603:web:e769854d4e35db5d1723fe",
  measurementId: "G-5PZ4RJBDDX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);