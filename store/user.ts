import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { User } from '@/types'
import { client,q } from "@/plugins/faunaDB";
import { User as netiflyUser }  from "netlify-identity-widget";
@Module({
  name: 'myUser',
  stateFactory: true,
  namespaced: true,
})
export default class myUser extends VuexModule {
  loggedin: boolean = false
  data: User | null = null

  @Mutation
  setUserData(user: User ){
    this.data = user
  }

  @Action
  setUser(user:User){
    console.log(user)
    
  }
}