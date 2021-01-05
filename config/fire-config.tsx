// config/fire-config.js
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_c6gz7ClFcflepZLfqGe3v5VycpwyAi0",
  authDomain: "golden-adventure.firebaseapp.com",
  projectId: "golden-adventure",
  storageBucket: "golden-adventure.appspot.com",
  messagingSenderId: "920932713672",
  appId: "1:920932713672  :web:e9c559eeb9b567e58c51fd"
};


console.log('hosting item ', process.env)
try {
  firebase.initializeApp(firebaseConfig);
  if (process.env.NODE_ENV === "development") {
    console.log("firestore connected to development");
    firebase.firestore().useEmulator("localhost", 8080);
  }
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}


const fire = firebase
export default fire