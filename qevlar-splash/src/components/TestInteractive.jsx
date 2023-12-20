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
          <code ref={codeRef} className="javascript">
            {`{
  "API_URL": "http://localhost:5000/graphql",
  "TOP_FIELD": "house",
  "SUB_FIELD": "charactersInHouse",
  "QUERY_LIMIT": 50,
  "WINDOW": 1000,
  "QUERY_DEPTH_LIMIT": 7
}`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default TestInteractive;
