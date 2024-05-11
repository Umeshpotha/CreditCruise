import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
             <div className="logo">
                <Link to="/">CreditCruise</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    );
}


export default Navbar;