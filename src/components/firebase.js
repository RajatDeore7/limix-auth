// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhkz8_TO_zS3Rqxm6cXB3oJw8tW13HcEk",
  authDomain: "limix-ai.firebaseapp.com",
  projectId: "limix-ai",
  storageBucket: "limix-ai.firebasestorage.app",
  messagingSenderId: "423260429907",
  appId: "1:423260429907:web:cf45fc1642b103708330a6",
  measurementId: "G-YHT7397LYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;