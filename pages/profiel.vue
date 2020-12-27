<template>
 <div>
   <h1>PROFIEL</h1>
   <input type="text" placeholder="First name" v-model="fName" >
   <input type="text" placeholder="Last name" v-model="lName" >
 </div>
</template>


<script lang='ts' >
import { defineComponent,onMounted,ref,watchEffect } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup() {
   const fName = ref('');
   const lName = ref('');
   var faunadb = require('faunadb')
   const q = faunadb.query
   var client = new faunadb.Client({ secret: 'fnAD-E4xlQACBxlTOnGNNS-YVID66Nz3RFM_QwUY' })

  onMounted(() => {

  })

   watchEffect(() => {
      client.query(
       q.Create(
         q.Collection('users'),
         {
           data: {
            fName: fName.value,
            lName: lName.value,
            email: 'email goed here',
            element: ['air', 'fire'],
           }
         }
       )
     )
     .then((ret:string) => console.log(ret))
   })

   return{
     fName,
     lName
   }
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
