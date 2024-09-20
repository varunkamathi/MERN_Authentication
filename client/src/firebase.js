// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3339f.firebaseapp.com",
  projectId: "mern-auth-3339f",
  storageBucket: "mern-auth-3339f.appspot.com",
  messagingSenderId: "635529452790",
  appId: "1:635529452790:web:5b22a94547487ffd6220d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);