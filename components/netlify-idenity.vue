<template>
 <div>
     <!-- Add a menu:
   Log in / Sign up - when the user is not logged in
   Username / Log out - when the user is logged in
  -->
<div id="firebaseui-auth-container" ></div>
  <!-- <div data-netlify-identity-menu></div> -->

  <!-- Add a simpler button:
    Simple button that will open the modal.
  -->
  <!-- <div data-netlify-identity-button>Login with Netlify Identity</div> -->
 </div>
</template>


<script lang='ts' >
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import * as netlifyIdentity from "netlify-identity-widget";
// import { client,q } from "~/plugins/faunaDB.ts";
import {userModule} from "@/store";
import { auth, firebase } from "@/plugins/firebase";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css'
// import firebase from "firebase";
export default defineComponent({
 props: [],
 components: {},
 setup(props, context) {


  onMounted(() => {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: 'login/success',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      // NOTE add tos
      // tosUrl: '<your-tos-url>',
      // NOTE Privacy policy url.
      // privacyPolicyUrl: '<your-privacy-policy-url>'
    })
  })
   
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
