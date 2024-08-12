// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8iuOetgJkmbXa7sX4-HciaipUPO5aTc",
  authDomain: "techvista-f97d5.firebaseapp.com",
  projectId: "techvista-f97d5",
  storageBucket: "techvista-f97d5.appspot.com",
  messagingSenderId: "41076735122",
  appId: "1:41076735122:web:83df0f0a11aa875b73fa4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };