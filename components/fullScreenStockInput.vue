<template>
    <form @submit.prevent="submit" class="absolute h-screen w-screen bg-black grid place-items-center" >
     <div  class="text-center grid grid-cols-1 gap-10" >
      <h2 class="text-center text-white" >Enter stock</h2>
      <input required class="bg-gray py-2 px-6 w-full rounded-lg" type="text" placeholder="enter ticker" v-model="ticker">
      <button  class="text-center bg-red rounded-lg py-2 px-6 text-white" >Get data</button>
      <div class="text-white" v-show="loading" >Loading {{loadingText.value}}</div>
     </div>
   </form>
</template>


<script lang='ts' >
import { computed, defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
 props: [],
 components: {},
 setup(props, {emit}) {
   const ticker = ref('')
   const loading = ref(false)
   let text = ref('loading')
   const loadingText = computed(() => {
     setInterval(() => {
       text.value+='.'
       if(text.value.length>10) {text.value=''}
     },250)
     return text
   })
   const submit = () => {
     emit('input',ticker.value)
     loading.value=true
   }
   return{ ticker, loading,submit,loadingText }
 }
})


</script>


<style lang='scss' module>
 
 
//POWERED BY AUSTIN
</style>
 
 
