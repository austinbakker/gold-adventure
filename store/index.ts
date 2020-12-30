import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'
import myUser from '@/store/user'
const store = new Vuex.Store({
  modules: {
    myUser: myUser
  }
})

const userModule = getModule(myUser, store)

export {
  userModule
}