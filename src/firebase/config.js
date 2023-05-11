
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgolPoEIu19vqsxuDXCQrgbehHBq51wUQ",
  authDomain: "quilfix-c4493.firebaseapp.com",
  projectId: "quilfix-c4493",
  storageBucket: "quilfix-c4493.appspot.com",
  messagingSenderId: "730560640121",
  appId: "1:730560640121:web:42370a20be9daf062750a8",
  measurementId: "G-T0QJBGD1ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()