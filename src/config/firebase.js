import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_BWX8c_DoT8GG3jJklY7X3AFM1dVlRDg",
    authDomain: "boomtown-4c26a.firebaseapp.com",
    databaseURL: "https://boomtown-4c26a.firebaseio.com",
    projectId: "boomtown-4c26a",
    storageBucket: "boomtown-4c26a.appspot.com",
    messagingSenderId: "1054681665987"
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = FirebaseApp.auth();
const FirebaseDB = firebase.database();

export {
  FirebaseApp,
  FirebaseAuth,
  FirebaseDB
};
