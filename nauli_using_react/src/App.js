import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className='fullPage'>
  
  <Header></Header>
      <Router>
      <Switch>
          <Route path='/home'>

<Home></Home>
<Footer></Footer>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/login'>
          <Login></Login>
          </Route>
       
      </Switch>
      </Router>
    </div>
  );
}

export default App;
