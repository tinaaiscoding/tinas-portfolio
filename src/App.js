import React from 'react';
import './App.css';
import TilesBg from './components/UI/TilesBg';
import AboutMe from './components/LandingPage/AboutMe';
import Icons from './components/LandingPage/Icons';

function App() {
  return (
    <div className="App">
      <Icons />
      <AboutMe />
      <TilesBg />
    </div>
  );
}

export default App;
