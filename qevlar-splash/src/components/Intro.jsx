import React from "react";
import "../../src/App.css";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="hero">
      <section className="intro">
        <div className="intro-text">
          <h1>GraphQL Security Testing Toolkit</h1>
          <p>An ultra-lightweight security testing library for graphQL.</p>
          <a href="https://github.com/oslabs-beta/qevlar">
            <button
              className="button-secondary"
              href="https://github.com/oslabs-beta/qevlar"
            >
              <FaGithub /> Download Qevlar On Github
            </button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Intro;
