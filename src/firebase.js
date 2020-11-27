import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyAEmPkDKkcukxvrOMpWeLriZ481_6eZlm0",
    authDomain: "todo-app-6a3db.firebaseapp.com",
    databaseURL: "https://todo-app-6a3db.firebaseio.com",
    projectId: "todo-app-6a3db",
    storageBucket: "todo-app-6a3db.appspot.com",
    messagingSenderId: "335598861890",
    appId: "1:335598861890:web:41a8770a47b116debef7db",
    measurementId: "G-5KH5DPRZ6E"

});

const db = firebaseApp.firestore();

export default db;
