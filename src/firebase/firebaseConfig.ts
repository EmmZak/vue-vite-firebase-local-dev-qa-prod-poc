import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../config/dev/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}