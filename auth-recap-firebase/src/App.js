import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import firebaseConfig from './firebase.config';
function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    const auth = getAuth();
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>SignIn</button>
    </div>
  );
}

export default App;
