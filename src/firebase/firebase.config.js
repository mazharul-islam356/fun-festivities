// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTvQrYyB1u2txeOvH5ejUbwGlNxHA0fMQ",
  authDomain: "assingment-09-e6997.firebaseapp.com",
  projectId: "assingment-09-e6997",
  storageBucket: "assingment-09-e6997.appspot.com",
  messagingSenderId: "523472144144",
  appId: "1:523472144144:web:c539974722e043c8048795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;