// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "expomstore-e7b25.firebaseapp.com",
  projectId: "expomstore-e7b25",
  storageBucket: "expomstore-e7b25.appspot.com",
  messagingSenderId: "468457782631",
  appId: "1:468457782631:web:4974116163ec016c78c3c2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp