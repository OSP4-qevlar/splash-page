import { useState } from "react";
import testAdaptiveRate from "../assets/QevlarAdaptiveRateTestSnippet.png";
import testMainMenu from "../assets/QevlarMainMenuTestSnippet.png";
import testSQL from "../assets/QevlarSQLTestSnippet.png";
import testDepth from "../assets/QevlarDepthLimitTestSnippet.png";

const TestExampleTabs = () => {
  //shortening tailwindCSS styles for tab components
  const selectedTab =
    "inline-flex text-sm items-center px-6 py-3 text-white bg-red-600 rounded-lg active dark:bg-tertiary cursor-pointer";
  const deselectedTab =
    "inline-flex text-sm items-center px-6 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer";

  const testSnippets = {
    tab0: testMainMenu,
    tab1: testAdaptiveRate,
    tab2: testSQL,
    tab3: testDepth,
  };

  //to change state of tabs when clicked
  function handleTabClick(tabId) {
    setActiveTab(tabId);
    setTestSnippet(testSnippets[tabId]);
  }

  const [testSnippet, setTestSnippet] = useState(testSnippets["tab0"]);
  const [activeTab, setActiveTab] = useState("tab0");

  return (
    <section className="">
      <h1 className="text-white text-center">
        Preview the testing environment
      </h1>
      <h3 className="text-center text-tertiary p-4 text-xl">
        See an example of our testing toolkit.
      </h3>
      <div className="flex justify-center items-center snap-center content-center p-10">
        <div className="flex w-4/5 justify-center items-center flex-wrap">
          <ul className="flex font-medium text-gray-500 dark:text-gray-400">
            <div>
              <li className="m-2">
                <a
                  onClick={(e) => handleTabClick(e.target.id)}
                  id="tab0"
                  className={activeTab === "tab0" ? selectedTab : deselectedTab}
                  aria-current="page"
                >
                  <svg
                    className="w-4 h-4 me-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Test Menu
                </a>
              </li>
            </div>
            <li className="m-2">
              <a
                onClick={(e) => handleTabClick(e.target.id)}
                id="tab1"
                className={activeTab === "tab1" ? selectedTab : deselectedTab}
              >
                <svg
                  className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                Rate Limiting
              </a>
            </li>
            <li className="m-2">
              <a
                onClick={(e) => handleTabClick(e.target.id)}
                id="tab2"
                className={activeTab === "tab2" ? selectedTab : deselectedTab}
              >
                <svg
                  className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                </svg>
                SQL Injection
              </a>
            </li>
            <li className="m-2">
              <a
                onClick={(e) => handleTabClick(e.target.id)}
                id="tab3"
                className={activeTab === "tab3" ? selectedTab : deselectedTab}
              >
                <svg
                  className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                  <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
                </svg>
                Depth Limiting
              </a>
            </li>
          </ul>
          <div className="max-w-3xl w-xl">
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg min-w-30">
              <img src={testSnippet} className="min-w-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestExampleTabs;
