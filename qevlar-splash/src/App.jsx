import React from 'react';
import GitHubButton from 'react-github-btn';
import NavBar from './components/NavBar'
import Intro from './components/Intro';
import TestSummary from './components/TestSummary'
import './App.css'; // Your main CSS file that imports other styles

const App = () => {

  return (
    <div>
      <NavBar />
      <Intro />
      {/* ... other components go here ... */}
      <TestSummary />
    </div>
  );
}

export default App;

