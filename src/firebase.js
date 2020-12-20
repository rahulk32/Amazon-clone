import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnlTqhqWiU19woJBjUv2xC7gJeA2pnw0s",
    authDomain: "clone-e7300.firebaseapp.com",
    projectId: "clone-e7300",
    storageBucket: "clone-e7300.appspot.com",
    messagingSenderId: "362430079288",
    appId: "1:362430079288:web:d32916af0460b4a7de61cd",
    measurementId: "G-5N6GHTS8N7"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };