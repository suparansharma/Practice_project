import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = ()=>{
       
        signInWithPopup(auth,provider)
          .then((result) => {
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            // const user = result.user;
            console.log(result);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    } 
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleSignIn}>Login</button>
        </div>
    );
};

export default Login;