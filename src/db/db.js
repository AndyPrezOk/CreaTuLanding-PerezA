import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDWjhI4kAXDIspvP8uukLGXvKG-06yR9hA",
  authDomain: "ecommerce-88020-e754d.firebaseapp.com",
  projectId: "ecommerce-88020-e754d",
  storageBucket: "ecommerce-88020-e754d.firebasestorage.app",
  messagingSenderId: "179219802767",
  appId: "1:179219802767:web:f1f8ff962b6e8990c61efa"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;