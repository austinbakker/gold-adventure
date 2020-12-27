<template>
 <div>
     <!-- Add a menu:
   Log in / Sign up - when the user is not logged in
   Username / Log out - when the user is logged in
  -->
  <div data-netlify-identity-menu></div>

  <!-- Add a simpler button:
    Simple button that will open the modal.
  -->
  <!-- <div data-netlify-identity-button>Login with Netlify Identity</div> -->
 </div>
</template>


<script lang='ts' >
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 head() {
      return {
        script: [
          {
            src:
              'https://identity.netlify.com/v1/netlify-identity-widget.js'
          }
        ],
      }
},
 setup() {
   
   
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
