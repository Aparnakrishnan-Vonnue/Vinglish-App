import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDPaDaqL7KFB3XGcrkKyuCbQinD8l8yu7k",
  authDomain: "vinglish-4458c.firebaseapp.com",
  projectId: "vinglish-4458c",
  storageBucket: "vinglish-4458c.appspot.com",
  messagingSenderId: "698064501357",
  appId: "1:698064501357:web:e27faefff9fa01d29cdd64",
  measurementId: "G-9GR3M76VGN",
  databaseURL:
    "https://vinglish-4458c-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };
