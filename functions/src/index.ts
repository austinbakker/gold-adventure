import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
import * as admin from "firebase-admin";
admin.initializeApp();

const db = admin.firestore();

exports.createUserData = functions.auth.user().onCreate(async(user) => {
  const email = user.email
  const displayName = user.displayName
  const docRef = db.collection('users').doc(user.uid);
  await docRef.set({
    email,
    displayName,
  });
  
  functions.firestore.document('users')
})