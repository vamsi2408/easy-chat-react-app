import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCpNuPYl87IkDif7zzFLZuZ5N8ZVyt16cU",
  authDomain: "easy-chat-37891.firebaseapp.com",
  projectId: "easy-chat-37891",
  storageBucket: "easy-chat-37891.appspot.com",
  messagingSenderId: "806553228826",
  appId: "1:806553228826:web:3735fcec8879d5898123a3",
  measurementId: "G-Q8252XK35J"
  

});
const db =firebaseapp.firestore();
export default db;