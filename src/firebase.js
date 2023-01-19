import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv8Pd1kxXS87OBt3abara1cJfFvtG2xHM",
    authDomain: "quora-clone-14366.firebaseapp.com",
    projectId: "quora-clone-14366",
    storageBucket: "quora-clone-14366.appspot.com",
    messagingSenderId: "612555366690",
    appId: "1:612555366690:web:f33a2ccba3cb331e63057b",
    measurementId: "G-JYD82BCE34"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export{auth, provider};
  export default db;
