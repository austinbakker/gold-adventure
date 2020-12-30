// export default function (context) {
//   // Add the userAgent property to the context
//   context.userAgent = process.server
//     ? context.req.headers['user-agent']
//     : navigator.userAgent
// }
import { auth } from "@/plugins/firebase";

auth.onAuthStateChanged((user) => {
  console.log('auth change', user)
})