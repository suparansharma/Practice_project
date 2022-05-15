import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
function App() {
  const [user,setUser] = useState({})
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const handleGoogleSignIn=()=>{
    const auth = getAuth();
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setUser(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const handleFbSignIn =()=>{
    const auth = getAuth();
signInWithPopup(auth, fbProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(user);

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential);

    // ...
  });
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>SignIn with Google</button>
      <br />
      <button onClick={handleFbSignIn}>SignIn with Facebook</button>
      <h1>Email:{user.email}</h1>
    </div>
  );
}

export default App;
