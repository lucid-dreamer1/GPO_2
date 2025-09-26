// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1sSXFhbssMD0SvoF9XN0hEoy4B1GZDJU",
  authDomain: "book-it-219c9.firebaseapp.com",
  projectId: "book-it-219c9",
  storageBucket: "book-it-219c9.firebasestorage.app",
  messagingSenderId: "279387151125",
  appId: "1:279387151125:web:61fa149bbebfd6e6b1671c",
  measurementId: "G-LTVP9P04GD",
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Ottieni Firestore
export const db = getFirestore(app);
