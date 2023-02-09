// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqXC42tnmihMFnMItmPwzobcpUZ0JlmDg",
  authDomain: "paracas-location.firebaseapp.com",
  projectId: "paracas-location",
  storageBucket: "paracas-location.appspot.com",
  messagingSenderId: "639231404914",
  appId: "1:639231404914:web:57ac52bcc2f196454a4beb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
