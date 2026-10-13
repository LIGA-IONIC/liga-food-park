import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyAk1bBZK1klTfIE292KFAG3Aym4mYAiiLE",

authDomain: "food-park-63a61.firebaseapp.com",

databaseURL: "https://food-park-63a61-default-rtdb.firebaseio.com",

projectId: "food-park-63a61",

storageBucket: "food-park-63a61.firebasestorage.app",

messagingSenderId: "541162607175",

appId: "1:541162607175:web:5a3e6b875e8bb9604f9762"

};


// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);