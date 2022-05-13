import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut  } from "firebase/auth";
import firebaseConfig from './firebase.config';


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

  const handleSignOut =()=>{
    signOut(auth).then(res => {
      const signedOutUser = {
        isSignedIn:false,
        name:'',
        photo:'',
        email:''

      }
      setUser(signedOutUser);
      
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleSubmit =()=>{

  }

  const handleBlur =(e) =>{
    console.log(e.target.name,e.target.value)
    if(e.target.name ==='email'){
      const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
      console.log(isEmailValid);
    }
    if(e.target.name ==='password'){

      const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
      console.log(isPasswordValid);

    }
  }

  return (
   <div>
     {
       user.isSignedIn ?<button onClick={handleSignOut} >SignOut</button> :
       <button onClick={handleSignIn} >SignIn</button>

    }
     {
       user.isSignedIn && <div>
         <p>Welcome,{user.name}</p>
         <p>Your email:{user.email}</p>
         <img src={user.photo} alt="" srcset="" />
      </div>
     }

     <div>
       <h1>Our own Authentication</h1>
       <form onSubmit={handleSubmit}>
         <input type="text" name="email" id="" onBlur={handleBlur} placeholder='input your email address' required/>
         <br />
         <input type="password" name="password" onChange={handleBlur} id="" placeholder='a-zA-Z0-9!@#$%^&*' required />
         <br />
         <input type="submit" value="Submit" />
       </form>
     </div>
   </div>
  );
}

export default App;
