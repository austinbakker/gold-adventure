// export default function (context) {
//   // Add the userAgent property to the context
//   context.userAgent = process.server
//     ? context.req.headers['user-agent']
//     : navigator.userAgent
// }
import { auth } from "@/plugins/firebase";
import { user } from "@/store";
import { User } from "~/types";
console.log('middleware')




import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  // Use context
  auth.onAuthStateChanged((userAuth) => {
    console.log('auth change', userAuth)
    if(userAuth){
      const data: User = {
        uid:userAuth.uid,
        displayName: userAuth.displayName || '',
        email: userAuth.email || ''
      }
      // user.setUser(userAuth)
      user.setUser(data)
    }
    else{
      // NOTE
      console.log('redirect if not loggedin')
    }
  })
}

export default myMiddleware
