import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import './main.css';
import '../assets/logo.svg';
import '../assets/MainPageImg.svg';

const firebaseConfig = {
    apiKey: "AIzaSyDhT-gR8AyW9Rq9Btd73JBUe6uwACXAvR0",
    authDomain: "todose-86f95.firebaseapp.com",
    databaseURL: "https://todose-86f95-default-rtdb.firebaseio.com",
    projectId: "todose-86f95",
    storageBucket: "todose-86f95.appspot.com",
    messagingSenderId: "256644977522",
    appId: "1:256644977522:web:661ad5d7b3afca691343eb"
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

window.addEventListener('load', (e) => {
    const form = document.querySelector("#registration-form");
    form.addEventListener('submit', (e) => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // TODO: user created successfully!
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // TODO: handle errors
            });
    })
});