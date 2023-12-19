import { LuShieldCheck } from "react-icons/lu";
import { PiAlienBold } from "react-icons/pi";
// ...other imports as necessary


const features = [
    {
      Icon: LuShieldCheck,
      title: "Malicious Injection",
      description: "Runs a fake malicious injection test based on inputted parameters."
    },
    {
      Icon: PiAlienBold,
      title: "Field Duplication",
      description: "Check your API's ability to filter out field duplication attacks."
    },
    {
      Icon: LuShieldCheck,
      title: "Field Duplication",
      description: "Check your API's ability to filter out field duplication attacks."
    },
    {
      Icon: LuShieldCheck,
      title: "Field Duplication",
      description: "Check your API's ability to filter out field duplication attacks."
    },
    {
        Icon: LuShieldCheck,
        title: "Malicious Injection",
        description: "Runs a fake malicious injection test based on inputted parameters."
    },
    {
        Icon: LuShieldCheck,
        title: "Field Duplication",
        description: "Check your API's ability to filter out field duplication attacks."
    },
    {
        Icon: LuShieldCheck,
        title: "Field Duplication",
        description: "Check your API's ability to filter out field duplication attacks."
    },
    {
        Icon: LuShieldCheck,
        title: "Field Duplication",
        description: "Check your API's ability to filter out field duplication attacks."
    },
    // ... add other features here
  ];

const TestSummary = () => {
  return (
    <section className='section'>
    <div className="test-summary">
      <h1>Native Features</h1>
      <h4>Our library contains everything you need to test your API against malicious GraphQL queries.</h4>
      <div className="features-list">
        {features.map((feature, index) => (
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
        See the full list of native APIs in our docs, including Maps, SQLite, Contacts, Secure Storage, and many more.
      </footer>
    </div>
    </section>
  );
};

export default TestSummary;
