import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyASYEaMw9xH4Nxv98DsLZyMK8JWLkznJ9o",
	authDomain: "socialmedia-cf4a4.firebaseapp.com",
	projectId: "socialmedia-cf4a4",
	storageBucket: "socialmedia-cf4a4.appspot.com",
	messagingSenderId: "302824569068",
	appId: "1:302824569068:web:d378c10d7d67b6dd5b4dc9",
	measurementId: "G-46359S9WEL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
