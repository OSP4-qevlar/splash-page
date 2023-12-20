import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import "./App.css"; // Your main CSS file that imports other styles
import TestSummary from "./components/TestSummary";
import Footer from "./components/Footer";
import TeamInfo from "./components/TeamInfo";
import TestInteractive from "./components/TestInteractive";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Features />
      <TestSummary />
      <TeamInfo />
      <Footer />
    </div>
  );
};

export default App;
