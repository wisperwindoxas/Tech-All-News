// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdNrr4WzEOKiNa-zP5QlWaFNOWBbXVivg",
  authDomain: "techallnews-43802.firebaseapp.com",
  databaseURL: "https://techallnews-43802-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "techallnews-43802",
  storageBucket: "techallnews-43802.appspot.com",
  messagingSenderId: "373426696545",
  appId: "1:373426696545:web:6927adfe1732372c47d520",
  measurementId: "G-R1NESG9468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);