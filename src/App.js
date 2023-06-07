import React from 'react';
import MediaQuery from 'react-responsive';

import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import MobileLandingPage from './components/Mobile/MobileLandingPage';

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={1224}>
        <LandingPage />
      </MediaQuery>

      <MediaQuery minWidth={200}>
        <MobileLandingPage />
      </MediaQuery>
    </div>
  );
}

export default App;
