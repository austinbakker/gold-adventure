// config/fire-config.js
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA_c6gz7ClFcflepZLfqGe3v5VycpwyAi0",
  authDomain: "golden-adventure.firebaseapp.com",
  projectId: "golden-adventure",
  storageBucket: "golden-adventure.appspot.com",
  messagingSenderId: "920932713672",
  appId: "1:920932713672  :web:e9c559eeb9b567e58c51fd"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;