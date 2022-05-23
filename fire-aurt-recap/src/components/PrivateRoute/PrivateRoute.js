import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './../Login/firebase.config';
import { UserContext } from './../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const app = initializeApp(firebaseConfig);

        const auth = getAuth(app);
    return (
        <div>

<Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
            
        </div>
    );
};

export default PrivateRoute;