// Menu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="menu"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Menu items */}
      <ul className={isMenuOpen ? "menu-items open" : "menu-items"}>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
        <Link to="/logout">LogOut</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
