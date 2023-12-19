import NavBar from './components/NavBar'
import Intro from './components/Intro';
import Features from './components/Features';
import './App.css'; // Your main CSS file that imports other styles
import TestSummary from './components/TestSummary';

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Intro />
      <Features />
      <TestSummary />
    </div>
  );
}

export default App;

