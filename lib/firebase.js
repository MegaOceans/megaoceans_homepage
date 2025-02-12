import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Replace these values with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyB337j0vYJ1myAQAoV2IkEllTV03jMXxCY",
  authDomain: "contact-form-a409c.firebaseapp.com",
  projectId: "contact-form-a409c",
  storageBucket: "contact-form-a409c.firebasestorage.app",
  messagingSenderId: "119399556814",
  appId: "1:119399556814:web:82d7884dd470ffa0b9529f",
  measurementId: "G-4Q8PD6D3SY",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };
