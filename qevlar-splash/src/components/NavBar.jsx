import React from 'react';
import '../../src/App.css';
import GitHubButton from 'react-github-btn'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">qevlar</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#teaminfo">Team Info</a>
          <a href="#devinfo">Developer Info</a>
        </div>
        <div className="nav-cta">
            <button className="button-primary" href="">Developer Docs</button>
            <GitHubButton className="button" href="https://github.com/oslabs-beta/qevlar/packages" data-color-scheme="no-preference: dark_high_contrast; light: light; dark: dark;" data-icon="octicon-package" data-size="large" aria-label="Install this package oslabs-beta/qevlar on GitHub">Install this package</GitHubButton>
            <GitHubButton href="https://github.com/oslabs-beta/qevlar" data-color-scheme="no-preference: dark_high_contrast; light: light; dark: dark;" data-icon="octicon-star" data-size="large" aria-label="Star oslabs-beta/qevlar on GitHub">Star</GitHubButton>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
