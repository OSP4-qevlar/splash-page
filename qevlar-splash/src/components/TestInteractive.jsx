import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "../../src/App.css";
import "../../src/index.css";
import "highlight.js/styles/dark.css";
import React, { useEffect, useRef } from "react";

const TestInteractive = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    // Highlight the code when the component mounts
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <section className="section" id="devinfo">
      {/* <h1> Config File</h1> */}
      <div className="testWrapper">
        <p className="code-description">
          <h2>Customize qevlar from a single configuration file</h2>
          Just input information about your API and configuration information
          related to different tests you would like to run and our library will
          adapt.
        </p>
        <pre>
          <img
            src="https://i.ibb.co/M84F7hC/qevlar-config-snippet-nobg.webp"
            alt="config"
          ></img>
        </pre>
      </div>
    </section>
  );
};

export default TestInteractive;
