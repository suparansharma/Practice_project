import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import firebaseConfig from './firebase.config';
// import {getAuth, signInWithPopup, GoogleAuthProvider } from  'firebase/auth';
// import firebaseConfig from './firebase.config';
// firebase.initializeApp(firebaseConfig);
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {

  
  //    const provider = new GoogleAuthProvider();
  //   //  const provider = new firebase.auth.GoogleAuthProvider();
  //   //  const auth = getAuth();
  //    const handleSignIn =()=>{
  //   firebase.auth.signInWithPopup(provider)
  //   .then(res =>{
  //     console.log(res);
  //   })


  // }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
 const handleSignIn =()=>{
  signInWithPopup(auth, provider)
  .then(res => {
    const {displayName,email,photoURL}=res.user;
    console.log(displayName,email,photoURL);
  })

  }
  return (
   <div>
     <button onClick={handleSignIn} >SignIn</button>
   </div>
  );
}

export default App;
