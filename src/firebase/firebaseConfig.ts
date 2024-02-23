import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import firebaseConfig from "../config/dev/firebaseConfig";

let app = initializeApp(firebaseConfig);
let db 
let auth 
let rtDb

const ENV = import.meta.env.MODE

if (ENV === "development") {
    console.log("ENV", ENV)

    db = getFirestore();
    connectFirestoreEmulator(db, '127.0.0.1', import.meta.env.VITE_FIRESTORE_EMULATOR_PORT);

    auth = getAuth();
    connectAuthEmulator(auth, "http://127.0.0.1:" + import.meta.env.VITE_AUTH_EMULATOR_PORT);

    rtDb = getDatabase();
    connectDatabaseEmulator(rtDb, "127.0.0.1", import.meta.env.VITE_DATABASE_EMULATOR_PORT);
} else {
    db = getFirestore(app)
    auth = getAuth(app)
}

export {
    db, auth, rtDb
}