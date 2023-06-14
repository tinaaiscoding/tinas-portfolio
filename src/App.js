import React from 'react';
import MediaQuery from 'react-responsive';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import MobileLandingPage from './components/Mobile/MobileLandingPage/MobileLandingPage';
import AboutMe from './components/Mobile/Pages/AboutMe';
import Projects from './components/Mobile/Pages/Projects';
import ContactMe from './components/Mobile/Pages/ContactMe';

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={1224}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </MediaQuery>

      <MediaQuery maxWidth={1223}>

        <Routes>
          <Route path="/" element={<MobileLandingPage />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>
      </MediaQuery>
    </div>
  );
}

export default App;
