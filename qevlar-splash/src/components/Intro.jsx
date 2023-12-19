import React from 'react';
import '../../src/App.css';
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1>GraphQL Security Testing Toolkit</h1>
        <p>An ultra-lightweight security testing library for graphQL.</p>
        <button className="button-secondary"><FaGithub /> Download Qevlar On Github</button>
      </div>

    </section>
  );
}

export default Intro;
