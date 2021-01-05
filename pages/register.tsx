import { useRouter } from "next/router";
import fire from "../config/fire-config";
import { NextPage } from 'next'
import { userInfo } from "os";
import { useEffect } from "react";
import 'firebaseui/dist/firebaseui.css'

const User: NextPage = () => {
  useEffect(function mount() {

    const firebaseui = require('firebaseui')
    let ui = new firebaseui.auth.AuthUI(fire.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        fire.auth.EmailAuthProvider.PROVIDER_ID,
        fire.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/',
    });
  })
  
  return (
  <main>
    <div id='firebaseui-auth-container' ></div>
  </main>
)}

export default User