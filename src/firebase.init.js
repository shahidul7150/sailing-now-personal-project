// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLTN8Lmup2UMDBykSHsd79eS7bbBfIWJU",
  authDomain: "sailing-now.firebaseapp.com",
  projectId: "sailing-now",
  storageBucket: "sailing-now.appspot.com",
  messagingSenderId: "336979943235",
  appId: "1:336979943235:web:8b4783b66c6d89e53e99f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;