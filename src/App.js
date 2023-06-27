import React from 'react';
import MediaQuery from 'react-responsive';
import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css'

import LandingPage from './components/LandingPage/LandingPage';
import MobileLandingPage from './components/Mobile/MobileLandingPage/MobileLandingPage';
import AboutMe from './components/Mobile/Pages/AboutMe';
import Projects from './components/Mobile/Pages/Projects';
import ContactMe from './components/Mobile/Pages/ContactMePage';
import Credits from './components/Mobile/Pages/Credits';

function App() {
  return (
    <div className="App">
      <MediaQuery minWidth={1224}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutme" element={<LandingPage />}></Route>
          <Route path="/projects" element={<LandingPage />}></Route>
          <Route path="/contactme" element={<LandingPage />}></Route>
          <Route path="/credits" element={<LandingPage />}></Route>
        </Routes>
      </MediaQuery>

      <MediaQuery maxWidth={1223}>

        <Routes>
          <Route path="/" element={<MobileLandingPage padding={classes.padding} />}></Route>
          <Route path="/aboutme" element={<AboutMe padding={classes.padding} />}></Route>
          <Route path="/projects" element={<Projects padding={classes.padding} />}></Route>
          <Route path="/contactme" element={<ContactMe padding={classes.padding} />}></Route>
          <Route path="/credits" element={<Credits padding={classes.padding} />}></Route>
        </Routes>
      </MediaQuery>
    </div>
  );
}

export default App;
