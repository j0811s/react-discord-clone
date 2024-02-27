import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6dukvnyhI35qG2p5nuH9V_aYfNxzUZZ8",
  authDomain: "discord-clone-14a59.firebaseapp.com",
  projectId: "discord-clone-14a59",
  storageBucket: "discord-clone-14a59.appspot.com",
  messagingSenderId: "822678704807",
  appId: "1:822678704807:web:312b453b867fe063d08182"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  db,
  auth,
  provider
}