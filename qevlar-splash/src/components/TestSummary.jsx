import { PiAlienBold } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { PiGraphDuotone } from "react-icons/pi";
import { GrDocumentConfig } from "react-icons/gr";

const featuresLine1 = [
  {
    Icon: PiAlienBold,
    title: "Assess Vulnerability",
    description:
      "Target a multitude of DoS attacks, malicious SQL/NoSQL injections, and more.",
  },
  {
    Icon: FaPencilAlt,
    title: "Custom Error Logging",
    description: "Get error messages from your API directly in your terminal.",
  },
  {
    Icon: FaTerminal,
    title: "Runs from the Terminal",
    description:
      "Run tests in your CLI, automatically adjusted to your configuration file.",
  },
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
    <div className="bg-dark">
      <section className="section">
        <div className="test-summary">
          <h1>Complete Library Of Tests</h1>
          <h4>
            Our library contains everything you need to test your API against
            malicious GraphQL queries.
          </h4>

          <div className="grid md:grid-cols-3 gap-4">
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

          <div className="grid grid-cols-2 gap-4 justify-items-center md:justify-items-stretch">
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
