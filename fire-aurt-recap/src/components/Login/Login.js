import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from './../../App';
import * as firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Login = () => {

    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const app = initializeApp(firebaseConfig);

        const auth = getAuth(app);
    if(app.length === 0){
      initializeApp(firebaseConfig);
//     const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
    }

const handleGoogleSignIn = ()=>{
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();
signInWithPopup(auth, Googleprovider)
  .then((result) => {
    const {displayName,email} = result.user;
    const signedInUser = {name:displayName,email};
    setLoggedInUser(signedInUser);
    history.replace(from);
    console.log(signedInUser);
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
            <button onClick={handleGoogleSignIn}>Login By Google</button>
        </div>
    );
};

export default Login;