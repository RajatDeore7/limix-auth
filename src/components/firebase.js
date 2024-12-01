// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApJgb0bNyUioLNNeReMCRD2Bw1YicNLKc",
  authDomain: "limix-db.firebaseapp.com",
  projectId: "limix-db",
  storageBucket: "limix-db.firebasestorage.app",
  messagingSenderId: "689714910493",
  appId: "1:689714910493:web:523ae45f043b63c8503df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;