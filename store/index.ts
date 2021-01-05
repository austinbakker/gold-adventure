import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import myUser from '@/store/user'
import Vue from "vue";
const store = new Vuex.Store({
  modules: {
    myUser: myUser
  }
})

const user = getModule(myUser, store)

export {
  user
}
Vue.use(Vuex)