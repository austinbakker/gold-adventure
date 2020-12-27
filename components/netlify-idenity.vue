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
export default defineComponent({
 props: [],
 components: {},
 setup(props, context) {

  const setLogin = (user: netlifyIdentity.User) => {
    console.log('setuser', user)
    console.log('userID', user.id)
    context.root.$client.query(
      context.root.$q.Get(
        context.root.$q.Match(context.root.$q.Index('user_by_id'),user.id        )
        // context.root.$q.Index('getId')
      )
    ).then((ret:any) => console.log(ret))
  }

  onMounted(() => {
    // context.root.$client.
    netlifyIdentity.init({
      container: '#netlify-modal', // defaults to document.body
      locale: 'en' // defaults to 'en'
    });
    netlifyIdentity.open();
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => setLogin(user));
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
 
 
