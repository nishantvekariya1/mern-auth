// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1f36c.firebaseapp.com",
  projectId: "mern-auth-1f36c",
  storageBucket: "mern-auth-1f36c.appspot.com",
  messagingSenderId: "580287065558",
  appId: "1:580287065558:web:172a290c7dd8615dea0877"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);