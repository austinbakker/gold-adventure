import * as faunadb from "faunadb";
const q = faunadb.query
const client = new faunadb.Client({ secret: 'fnAD-E4xlQACBxlTOnGNNS-YVID66Nz3RFM_QwUY' })



import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $client: typeof client
    $q: typeof q
  }
}

Vue.prototype.$client = client
Vue.prototype.$q = q