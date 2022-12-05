import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Blog from './Blog';
import Home from './Home';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/blogs' className='nav-link'>BLogs</NavLink>
            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        </nav>
    );
};

export default Navbar;