// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRw0onBBKLQkjdNr9yakI-X5RORmT4Asw",
    authDomain: "email-password-log-in-8988d.firebaseapp.com",
    projectId: "email-password-log-in-8988d",
    storageBucket: "email-password-log-in-8988d.firebasestorage.app",
    messagingSenderId: "622967411916",
    appId: "1:622967411916:web:3e0ac10d67ab54d00d5e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);