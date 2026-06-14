import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your BYU-Idaho outdoor project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAK1TOtw3513Hi5st-XpguJtJtz38lEc",
  authDomain: "outdoorproject-f1398.firebaseapp.com",
  projectId: "outdoorproject-f1398",
  storageBucket: "outdoorproject-f1398.firebasestorage.app",
  messagingSenderId: "746626660145",
  appId: "1:746626660145:web:67e427d2489559c401a210",
  measurementId: "G-CSGTQYSD80"
};

// Initialize Firebase App instance
const app = initializeApp(firebaseConfig);

// Export instances to use across your website files
export const auth = getAuth(app);
export const db = getFirestore(app);
