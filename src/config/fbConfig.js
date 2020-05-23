import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgI7GhWcH24zvvxxGNSX70ZBVQ4aHWJLQ",
    authDomain: "twiits.firebaseapp.com",
    databaseURL: "https://twiits.firebaseio.com",
    projectId: "twiits",
    storageBucket: "twiits.appspot.com",
    messagingSenderId: "305156211792",
    appId: "1:305156211792:web:393d0f8875f95ac018bd55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;