// import { LuShieldCheck } from "react-icons/lu";
import { PiAlienBold } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { PiGraphDuotone } from "react-icons/pi";
import { GrDocumentConfig } from "react-icons/gr";


// ...other imports as necessary

const featuresLine1 = [
  {
    Icon: PiAlienBold,
    title: "Assess Vulnerability",
    description: "Target a multitude of DoS attacks, malicious SQL/NoSQL injections, and more."
  },
  // {
  //   Icon: LuShieldCheck,
  //   title: "Malicious Injection",
  //   description:
  //     "Our tests will return back whether or not an injection is successful.",
  // },
  {
    Icon: FaPencilAlt,
    title: "Custom Error Logging",
    description:
      "Get error messages from your API directly in your terminal.",
  },
  // {
  //   Icon: LuShieldCheck,
  //   title: "Adaptive Rate Limiting",
  //   description:
  //     "Set a rate and an increase level in config and test your API at specified query rates.",
  // },
  // {
  //   Icon: LuShieldCheck,
  //   title: "Query Depth Limiting",
  //   description:
  //     "Send nested queries to your API at a level you set beforehand.",
  // },
  {
    Icon: FaTerminal,
    title: "Runs from the Terminal",
    description:
      "Run tests in your CLI, automatically adjusted to your configuration file.",
  },
  // {
  //   Icon: LuShieldCheck,
  //   title: "Query Batching",
  //   description:
  //     "Check your API's ability to filter out attacks that are batched to run at specified levels.",
  // },
  // {
  //   Icon: PiGraphDuotone,
  //   title: "Works On Any API",
  //   description:
  //     "Compatible with any API structure that can handle GraphQL queries.",
  // },
  // {
  //   Icon: GrDocumentConfig,
  //   title: "One Config File",
  //   description:
  //     "Configure your API URL, rate limits, parameters, and specific query information in one file.",
  // },
  // ... add other features here
];

const featuresLine2 = [
  {
    Icon: PiGraphDuotone,
    title: "Works On Any API",
    description:
      "Compatible with any API structure that can handle GraphQL queries.",
  },
  {
    Icon: GrDocumentConfig,
    title: "One Config File",
    description:
      "Configure your API URL, rate limits, parameters, and specific query information in one file.",
  },

];

const TestSummary = () => {
  return (
    <div className="section-solid" id="testsummary">
      <section className="section">
        <div className="test-summary">
          <h1>Complete Library Of Tests</h1>
          <h4>
            Our library contains everything you need to test your API against
            malicious GraphQL queries.
          </h4>
          <div className="features-list">
            {featuresLine1.map((feature, index) => (
              <div key={index} className="feature-item">
                <feature.Icon className="feature-icon" />
                <div className="feature-text">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="features-list2">
            {featuresLine2.map((feature, index) => (
              <div key={index} className="feature-item">
                <feature.Icon className="feature-icon" />
                <div className="feature-text">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <footer className="features-footer">
            See the full list of details related to our testing library on our
            Github page.
          </footer>
        </div>
      </section>
    </div>
  );
};

export default TestSummary;
