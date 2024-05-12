import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "./menu"; 
import Loans from '../components/loans';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user')); // Get user data from local storage

  return (
    <nav>
      <div className="logo">
        <Link to="/">Credit Cruise</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/apply-loan">Apply for Loan</Link>
        <Link to="/register">Register</Link>
        {user ? <span style={{ color: 'white', marginLeft: '10px' }}>Welcome {user.fullname}!</span> : <Link to="/login">Login</Link>}
        <Link to="/about">About Us</Link>
      </div>
      <MenuBar />
    </nav>
  );
}

export default Navbar;  