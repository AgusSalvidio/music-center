import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "music-center-1d0ae.firebaseapp.com",
  projectId: "music-center-1d0ae",
  storageBucket: "music-center-1d0ae.appspot.com",
  messagingSenderId: "598312616206",
  appId: "1:598312616206:web:0aab4c5ff0b32f380d975f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
