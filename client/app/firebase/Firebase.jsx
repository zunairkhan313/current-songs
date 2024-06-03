import { initializeApp } from "firebase/app";
import { getFirestore , collection, addDoc, query, where, onSnapshot,doc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYtTNJSCjcH2AfRcer_7uxvqhFYYSe9Ns",
    authDomain: "songchuan-e48d0.firebaseapp.com",
    projectId: "songchuan-e48d0",
    storageBucket: "songchuan-e48d0.appspot.com",
    messagingSenderId: "440609807055",
    appId: "1:440609807055:web:fa04bdd6c4b17f281335ba"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{app,db,collection, addDoc, query, where, onSnapshot,doc, deleteDoc, updateDoc}