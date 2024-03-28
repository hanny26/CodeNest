import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to ="/" className="navbar-logo">
          Your Logo
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/contact" className="nav-links">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/register" className="nav-links">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-links">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
