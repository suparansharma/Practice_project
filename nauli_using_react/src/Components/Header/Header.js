import React from 'react';
import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            
        <nav>
            <a className='logo'>nauli</a>
            <a href="/shop">Home</a>
            <a href="/review">About</a>
            <a href="/inventor">Product</a>
            <a href="/inventor">Service</a>
            <a href="/inventor">Contact</a>
           

            </nav>
    </div>
    );
};

export default Header;