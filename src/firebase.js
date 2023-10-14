// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArUpj-v8HZnLbhJgriaIDomgoA8i_4c6k",
  authDomain: "anonymous-575d1.firebaseapp.com",
  projectId: "anonymous-575d1",
  storageBucket: "anonymous-575d1.appspot.com",
  messagingSenderId: "477264959192",
  appId: "1:477264959192:web:216e5c4a65397a318a69ad",
  measurementId: "G-QJMPFXVH3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);