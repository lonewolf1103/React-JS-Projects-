import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-aWtgf1FRHNXT_QynE1-zl7l5xfleWC8",
  authDomain: "netflix-clone-51728.firebaseapp.com",
  projectId: "netflix-clone-51728",
  storageBucket: "netflix-clone-51728.appspot.com",
  messagingSenderId: "260456193556",
  appId: "1:260456193556:web:d04928e6883633f8379101"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);