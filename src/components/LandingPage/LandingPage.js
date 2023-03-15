import React from 'react';

import TilesBg from '../UI/TilesBg';
import AboutMe from './AboutMe';
import DesktopIcons from './DesktopIcons';
import Dockbar from '../Dockbar/Dockbar';

import Resume from '../Dockbar/Resume';

const LandingPage = () => {
  return (
    <div>
      <DesktopIcons />
      <AboutMe />
      <Dockbar />
      <TilesBg />
    </div>
  );
};

export default LandingPage;
