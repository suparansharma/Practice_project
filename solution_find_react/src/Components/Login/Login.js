import React, { useContext, useState } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  FacebookAuthProvider,
} from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import firebaseConfig from './firebase.config';
import './Login.css';
import fbLogo from '../../images/Facebook_Logo.png';
import googleLogo from '../../images/Google_Logo.png';
import { UserContext } from '../../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import 'font-awesome/css/font-awesome.min.css'
const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const app = initializeApp(firebaseConfig);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

const [loggedInUser, setLoggedInUser] = useContext(UserContext);




  // Google Sign In method Start

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        console.log(displayName, photoURL, email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };
  // Google Sign In method END

  // Sign Out method Start

  //SignOut System
  const handleGoogleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          password: '',
          photo: '',
          error: '',
          success: false,
        };
        setUser(signedOutUser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Sign Out method END

  //Facebook Sign In method Start

  const fbProvider = new FacebookAuthProvider();
  const hadleFacebookSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('Fb user after sign in', user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  //Facebook Sign In method End

  //Create User method Start

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);

          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);

          // ..
        });
    }
    e.preventDefault();
    if (!newUser && user.email && user.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log('sign is user info', userCredential.user);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
  };

  //Create User method END

  // Email and Password validation method Start
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      isFieldValid = /^[A-Za-z]\w{7,14}$/.test(e.target.value);
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  // Email and Password validation method END

  //Send name in information to firebase start
  const updateUserName = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('User name updated successfully');
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
  };

  //Send name in information to firebase end

  return (
    <div className="submitArea">
      <div className="">
        <div className="registrationArea">
          <h2>Create An Account</h2>
          <br/>
          {/* for new user */}
          <input
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id=""
            className="iinputBox "
          ></input>
           <label htmlFor="newUser ">New User Sign up</label>

          {/* <button type="" onChange={() => setNewUser(!newUser)} name="newUser" id="" className="iinputBox ">New User Sign up</button> */}
         

          {/* from method start */}
          <form onSubmit={handleSubmit}>
            {newUser && (
              <input
                type="text"
                name="name"
                onBlur={handleBlur}
                placeholder="Enter Your Name Address"
                className="iinputBox"
                required
              />
            )}{' '}
            <br />
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              placeholder="Enter Your Email Address"
              className="iinputBox"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Password:A-Za-z"
              id="pswd1"
              className="iinputBox"
              required
            />
            <br />
            <div className='SignInBtn'  >
            <input className='inputBoxSignInBtn' type="submit" value={newUser ?  'Sign up' : 'Sign in'} />
            </div>

     {/* <div className='SignInBtn'>
     <button  type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id=""
            className="iinputBox ">New User Sign up</button>
     </div> */}
           
            {/* <input type="password" name="ValidPassword" onBlur={handleBlur} placeholder='Password:A-Za-z' id='pswd2' required/><br/>
        <button type="submit" onClick={matchPassword}>Submit</button> */}
          </form>
          <div className="gapArea">
            <h3>-----------or-----------</h3>
          </div>
          <div className="loginWithSocial">
            <div className="row">
              <div className="col ">
                {/* Google Sign In button method Start */}
                {user.isSignedIn ? (
                  <div onClick={handleGoogleSignOut} className="faceBookLogin">
                    <div className="row">
                      <div className="col socialColum ">
                        <img className="logoImage" src={googleLogo} alt="" />{' '}
                        <span className="afterLogo">Sign OUT </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // <button onClick={handleGoogleSignOut}>Google SignOut</button>
                  <div onClick={handleGoogleSignIn} className="faceBookLogin specificMedia">
                    <div className="row">
                      <div className="col socialColum ">
                        <img className="logoImage" src={googleLogo} alt="" />{' '}
                        <span className="afterLogo">Sign in with Google </span>
                      </div>
                    </div>
                  </div>
                  // <button onClick={handleGoogleSignIn}>Google SignIn</button>
                )}
                <br></br>
                {user.isSignedIn && (
                  <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your Email:{user.email}</p>
                    <img src={user.photo} alt="" />
                  </div>
                )}
                {/* Google Sign In method END */}
              </div>

              <div className="col">
                {/* faceBook Sign In button method Start */}

                <div onClick={hadleFacebookSignIn} className="faceBookLogin">
                  <div className="row">
                    <div className="col socialColum" style={{lineBreak: 'anywhere',fontSize: '14px'}} >
                      <img className="logoImage" src={fbLogo} alt="" />{' '}
                      <span className="afterLogo ">Sign in with Facebook </span>
                    </div>
                  </div>
                </div>
                {/* faceBook Sign In button method end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
