// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6HgnyclvtzBfjOnkmgdVHLd8kUxjBfZA",
  authDomain: "pizzalicious-881f0.firebaseapp.com",
  projectId: "pizzalicious-881f0",
  storageBucket: "pizzalicious-881f0.appspot.com",
  messagingSenderId: "842476422230",
  appId: "1:842476422230:web:4e2f57eeb98cb87395e7f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
