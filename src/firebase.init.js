// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt8IG7ZAuHAQ81BfhKfx7SHv4T5IfSBeY",
  authDomain: "visa-consultant.firebaseapp.com",
  projectId: "visa-consultant",
  storageBucket: "visa-consultant.appspot.com",
  messagingSenderId: "110668066493",
  appId: "1:110668066493:web:17a3c0b49abd817a7b11d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;