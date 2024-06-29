import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Store/Auth';

const Navbar = () => {
  const { isLoggedIn, LogoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Logo</div>
        <div className="hidden md:block">
          <NavLink to="/" className="text-white mr-4">Home</NavLink>
          <NavLink to="/about" className="text-white mr-4">About</NavLink>
          <NavLink to="/contact" className="text-white mr-4">Contact</NavLink>
          {isLoggedIn ? (
            <button onClick={LogoutUser} className="text-white mr-4">Logout</button>
          ) : (
            <>
              <NavLink to="/register" className="text-white mr-4">Register</NavLink>
              <NavLink to="/login" className="text-white mr-4">Login</NavLink>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <NavLink to="/" className="text-white mr-4">Home</NavLink>
          <NavLink to="/about" className="text-white mr-4">About</NavLink>
          <NavLink to="/contact" className="text-white mr-4">Contact</NavLink>
          {isLoggedIn ? (
            <button onClick={LogoutUser} className="text-white mr-4">Logout</button>
          ) : (
            <>
              <NavLink to="/register" className="text-white mr-4">Register</NavLink>
              <NavLink to="/login" className="text-white mr-4">Login</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
