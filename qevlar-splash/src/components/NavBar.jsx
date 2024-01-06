import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">qevlar</div>
        {/* Toggle button */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* This line toggles the icon */}
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {/* Close mobile menu when a link is clicked */}
          <a href="#testsummary">Features</a>
          <a href="#team">Team Info</a>
          <a href="#devinfo">Developer Info</a>
          <a href="https://github.com/oslabs-beta/qevlar">
            <button className="button-navigation">
              <FaGithub /> See Our Github
            </button>
          </a>
        </div>
      </nav>
      {/* The overlay that appears when the menu is open */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
};

export default NavBar;