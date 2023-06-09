import React from 'react';
import MediaQuery from 'react-responsive';

import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import MobileLandingPage from './components/Mobile/MobileLandingPage/MobileLandingPage';

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={1224}>
        <LandingPage />
      </MediaQuery>

      <MediaQuery maxWidth={1223}>
        <MobileLandingPage />
      </MediaQuery>
    </div>
  );
}

export default App;
