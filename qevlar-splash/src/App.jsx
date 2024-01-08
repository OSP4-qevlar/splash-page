import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import "./App.css"; // Your main CSS file that imports other styles
import TestSummary from "./components/TestSummary";
import Footer from "./components/Footer";
import TeamInfo from "./components/TeamInfo";
import ThreeD from "./threejsComponents/Canvas";
import TestInteractive from "./components/TestInteractive";
import TestExampleTabs from "./components/TestExampleTabs";

const App = () => {
  return (
    <div>
      <div className="canvas">
        <ThreeD />
      </div>
      <NavBar />
      <Intro />
      <Features />
      <TestExampleTabs />
      <TestSummary />
      <TestInteractive />
      <TeamInfo />
      <Footer />
    </div>
  );
};

export default App;
