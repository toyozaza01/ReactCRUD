// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWPeRCnV1R9Fyg2fAbTVmkMOx7f_Qc9uA",
    authDomain: "prapatsorn-firestore65.firebaseapp.com",
    projectId: "prapatsorn-firestore65",
    storageBucket: "prapatsorn-firestore65.firebasestorage.app",
    messagingSenderId: "799691776965",
    appId: "1:799691776965:web:524689c025b12c4f10a1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
