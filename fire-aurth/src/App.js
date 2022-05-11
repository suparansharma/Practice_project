import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
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

  const [user,setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    photo:''

  })

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
 const handleSignIn =()=>{
  signInWithPopup(auth, provider)
  .then(res => {
    const {displayName,email,photoURL}=res.user;
    const signedInUser ={
      isSignedIn:true,
      name:displayName,
      email:email,
      photo:photoURL
    }
    setUser(signedInUser);
    console.log(displayName,email,photoURL);
  })
  .catch(err =>{
    console.log(err);
    console.log(err.message);
  })

  }
  return (
   <div>
     <button onClick={handleSignIn} >SignIn</button>
     {
       user.isSignedIn && <div>
         <p>Welcome,{user.name}</p>
         <p>Your email:{user.email}</p>
         <img src={user.photo} alt="" srcset="" />
      </div>
     }
   </div>
  );
}

export default App;
