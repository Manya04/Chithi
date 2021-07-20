// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAJf90EAhzwevHMahqXM8OnCFVvljmHteY",
    authDomain: "chithi-b8fb4.firebaseapp.com",
    projectId: "chithi-b8fb4",
    storageBucket: "chithi-b8fb4.appspot.com",
    messagingSenderId: "915038903949",
    appId: "1:915038903949:web:aa7e65b2082cc9b3990cc4",
    measurementId: "G-EWBHEMLQMQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;