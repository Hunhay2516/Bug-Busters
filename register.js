import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

async function handleRegister(email, password, username) {
  try {
    // 1. Create the user credentials in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Save the extra user info to your new Firestore 'users' collection
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      createdAt: new Date()
    });

    alert("Registration successful!");
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}
