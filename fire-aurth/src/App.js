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
    password:'',
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
    let isFormValid = true;

    if(e.target.name ==='email'){
      isFormValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
      
    }
    if(e.target.name ==='password'){

      isFormValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
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
       <p>Name:{user.name}</p>
       <p>Email:{user.email}</p>
       <p>Password:{user.password}</p>
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" id="" onBlur={handleBlur} placeholder='input your name' required />
         <br />
         <input type="text" name="email" id="" onBlur={handleBlur} placeholder='input your email address' required/>
         <br />
         <input type="password" name="password" onChange={handleBlur} id="" placeholder='a-zA-Z0-9!@#$%^&* ' required />
         <br />
         <input type="submit" value="Submit" />
       </form>
     </div>
   </div>
  );
}

export default App;
