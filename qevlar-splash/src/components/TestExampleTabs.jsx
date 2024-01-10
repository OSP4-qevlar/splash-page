import { useState } from "react";
import testAdaptiveRate from "../assets/QevlarAdaptiveRateTestSnippet.png";
import testMainMenu from "../assets/QevlarMainMenuTestSnippet.png";
import testSQL from "../assets/QevlarSQLTestSnippet.png";
import testDepth from "../assets/QevlarDepthLimitTestSnippet.png";

import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const TestExampleTabs = () => {
  const selectedTab =
    "inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-white bg-gray-600 rounded-lg cursor-pointer";
  const deselectedTab =
    "inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-100 text-gray-900 cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white";

  const testSnippets = {
    tab0: testMainMenu,
    tab1: testAdaptiveRate,
    tab2: testSQL,
    tab3: testDepth,
  };

  function handleTabClick(tabId) {
    setActiveTab(tabId);
    setTestSnippet(testSnippets[tabId]);
  }

  const [testSnippet, setTestSnippet] = useState(testSnippets["tab0"]);
  const [activeTab, setActiveTab] = useState("tab0");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold text-center pt-10">
        Preview the testing environment
      </h1>
      <h3 className="text-xl text-center p-4">
        See an example of our testing toolkit.
      </h3>
      <div className="flex flex-col items-center p-10">
        <ul className="flex justify-center mb-4 text-l">
          {/* Tab Items */}
          <li className="m-2">
            <a
              onClick={() => handleTabClick("tab0")}
              id="tab0"
              className={activeTab === "tab0" ? selectedTab : deselectedTab}
            >
              Test Menu
            </a>
          </li>
          <li className="m-2">
            <a
              onClick={() => handleTabClick("tab1")}
              id="tab1"
              className={activeTab === "tab1" ? selectedTab : deselectedTab}
            >
              Rate Limiting
            </a>
          </li>
          <li className="m-2">
            <a
              onClick={() => handleTabClick("tab2")}
              id="tab2"
              className={activeTab === "tab2" ? selectedTab : deselectedTab}
            >
              SQL Injection
            </a>
          </li>
          <li className="m-2">
            <a
              onClick={() => handleTabClick("tab3")}
              id="tab3"
              className={activeTab === "tab3" ? selectedTab : deselectedTab}
            >
              Depth Limiting
            </a>
          </li>
        </ul>
        <div className="max-w-3xl w-full">
          <div
            className={`p-6 dark:bg-gray-800 rounded-lg ${
              inView ? "animate-fadeIn" : ""
            }`}
            ref={ref}
          >
            <img src={testSnippet} alt="Test Snippet" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestExampleTabs;
