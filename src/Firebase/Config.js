import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjYNaDwEKeBqy2gdzu9nD-RwThHHMz-TQ",
  authDomain: "react-65d86.firebaseapp.com",
  projectId: "react-65d86",
  storageBucket: "react-65d86.appspot.com",
  messagingSenderId: "348411561588",
  appId: "1:348411561588:web:d521bf02cd2e5f8a1d3321"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)