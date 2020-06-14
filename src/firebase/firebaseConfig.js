import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    apiKey: "AIzaSyCaYt2K46XFpkpQsOa8Qfl08G45cKEwLiA",
    authDomain: "omarhj-portfolio-cc12d.firebaseapp.com",
    databaseURL: "https://omarhj-portfolio-cc12d.firebaseio.com",
    projectId: "omarhj-portfolio-cc12d",
    storageBucket: "omarhj-portfolio-cc12d.appspot.com",
    messagingSenderId: "419481834774",
    appId: "1:419481834774:web:981bff138ce039ed532c37",
    measurementId: "G-YW849JR3DP"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }