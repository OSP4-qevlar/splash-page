import React from "react";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="hero">
      <section className="intro">
        <div className="intro-text">
          <h1 className="text-3xl font-bold">
            GraphQL Security Testing Toolkit
          </h1>
          <p className="text-lg">
            An ultra-lightweight security testing library for graphQL.
          </p>
          <a
            href="https://github.com/oslabs-beta/qevlar"
            className="mt-4 inline-block"
          >
            <button className="flex items-center justify-center px-4 py-3 bg-gray-200 text-black rounded hover:bg-gray-300">
              <FaGithub className="mr-2" /> Download Qevlar On Github
            </button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Intro;
