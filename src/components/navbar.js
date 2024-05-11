// Navbar.js
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuBar from "./menu"; // Import the MenuBar component
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Credit Cruise</Link>
      </div>
      <div className="nav-links">
        {/* Include the MenuBar component here */}
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About Us</Link>
      </div>
      <MenuBar />
    </nav>
  );
}

export default Navbar;
