import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { User } from '~/types'
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
  setUser(user: User ){
    this.data = user
  }

  @Action
  getUser(user?:netiflyUser){
    var id;
    if(user) id=user.id
    else if (this.data) id=this.data.id
    else throw 'Login failed, no user id was given'

    client.query(
      q.Get(
        q.Match(q.Index('user_by_id'),id)
      )
    )
    .then((response:any) => {
      const userData:User = response.data
      if(userData) {this.setUser(userData);return;}
      throw `login error, ${response}`
    })
    
  }
}