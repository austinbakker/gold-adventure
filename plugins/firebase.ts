// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_c6gz7ClFcflepZLfqGe3v5VycpwyAi0",
  authDomain: "golden-adventure.firebaseapp.com",
  projectId: "golden-adventure",
  storageBucket: "golden-adventure.appspot.com",
  messagingSenderId: "920932713672",
  appId: "1:920932713672:web:e9c559eeb9b567e58c51fd"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth()
const db = app.firestore()
export {
  auth,
  db,
  firebase
}