<template>
 <div>
     <!-- Add a menu:
   Log in / Sign up - when the user is not logged in
   Username / Log out - when the user is logged in
  -->
<div id="netlify-modal" ></div>
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
export default defineComponent({
 props: [],
 components: {},
 setup(props, context) {


  onMounted(() => {
    netlifyIdentity.on('login', user => userModule.getUser(user));
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body
      locale: 'en' // defaults to 'en'
    });
    // netlifyIdentity.open();
    // netlifyIdentity.on('logout', () => console.log('Logged out'));
    // netlifyIdentity.on('error', err => console.error('Error', err));
    // netlifyIdentity.on('open', () => console.log('Widget opened'));
    // netlifyIdentity.on('close', () => console.log('Widget closed'));
  })
   
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
