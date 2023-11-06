import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //Needs to be completed
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
