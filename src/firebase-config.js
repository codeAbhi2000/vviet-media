
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD841cuy6OjumeZ5Yjt2PO8zHQ3XT8nMg8",
  authDomain: "v-media-d25d4.firebaseapp.com",
  projectId: "v-media-d25d4",
  storageBucket: "v-media-d25d4.appspot.com",
  messagingSenderId: "720802362079",
  appId: "1:720802362079:web:88a7cbde6cea467d852f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const privider = new GoogleAuthProvider()


