import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
<div className="header">

<nav>
<a className='logo'> <span className='nlogo' >n</span> nauli</a>
<a className='headerW' href="/home">Home</a>
<a className='headerW' href="/about">About</a>
<a className='headerW' href="/product">Product</a>
<a className='headerW' href="/service">Service</a>
<a className='headerW' href="/contact">Contact</a>
{/* <Link to="/login"> */}
<button  id='logInBtn'  className='button'>Login </button>
{/* </Link> */}
{/* <Link to="/login">Login</Link> */}

</nav>
</div>
    );
};

export default Header;