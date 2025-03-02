import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/userprofile">Profile</Link>
        </nav>
    );
}

export default Navbar;