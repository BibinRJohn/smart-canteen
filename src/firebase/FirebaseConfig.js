// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATTnRgKB88wXmsceCCiRvmJUf45pOFdw0",
  authDomain: "canteen-6ffda.firebaseapp.com",
  projectId: "canteen-6ffda",
  storageBucket: "canteen-6ffda.appspot.com",
  messagingSenderId: "706234033757",
  appId: "1:706234033757:web:8868c46a63672040f60fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth } ;