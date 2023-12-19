import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from "react-icons/fa"; 

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">qevlar</div>
        {/* Toggle button */}
        <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* This line toggles the icon */}
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Close mobile menu when a link is clicked */}
          <a href="#features" onClick={toggleMobileMenu}>Features</a>
          <a href="#teaminfo" onClick={toggleMobileMenu}>Team Info</a>
          <a href="#devinfo" onClick={toggleMobileMenu}>Developer Info</a>
          <button className="button-navigation" onClick={toggleMobileMenu}>
            <FaGithub /> See Our Github
          </button>
        </div>
      </nav>
      {/* The overlay that appears when the menu is open */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>}
    </header>
  );
}

export default NavBar;
