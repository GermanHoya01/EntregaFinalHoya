import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAaBNDxv11Y6iRZ45oGueKPG91DiOKFRjk",
    authDomain: "my-app-gh-7a263.firebaseapp.com",
    projectId: "my-app-gh-7a263",
    storageBucket: "my-app-gh-7a263.appspot.com",
    messagingSenderId: "181596158028",
    appId: "1:181596158028:web:5b41e782a5028df83c9ce9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);