// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPYRWhNrft2xdIVL5KK9DveDQI2x_bHU",
  authDomain: "vite-contact-bb66c.firebaseapp.com",
  projectId: "vite-contact-bb66c",
  storageBucket: "vite-contact-bb66c.appspot.com",
  messagingSenderId: "863607612356",
  appId: "1:863607612356:web:c6191668e5316e71d4ba91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);