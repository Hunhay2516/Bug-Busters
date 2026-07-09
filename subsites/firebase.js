import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";



// Your Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAIAK1TOtw3513Hi5st-XpguJtJtz38lEc",

  authDomain: "outdoorproject-f1398.firebaseapp.com",

  projectId: "outdoorproject-f1398",

  storageBucket: "outdoorproject-f1398.firebasestorage.app",

  messagingSenderId: "746626660145",

  appId: "1:746626660145:web:67e427d2489559c401a210",

  measurementId: "G-CSGTQYSD80"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Initialize Firestore

export const db = getFirestore(app);



// Initialize Firebase Authentication

export const auth = getAuth(app); 

