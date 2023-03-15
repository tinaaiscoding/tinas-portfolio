import React, { useState } from 'react';

import TilesBg from '../UI/TilesBg';
import AboutMe from './AboutMe';
import DesktopIcons from './DesktopIcons';
import Dockbar from '../Dockbar/Dockbar';

import Resume from '../Dockbar/Resume';

const LandingPage = () => {
  const [resumeClicked, setResumeClicked] = useState(false)

  return (
    <div>
      <DesktopIcons />
      <AboutMe />
      <Dockbar setResumeClicked={setResumeClicked}/>
      <TilesBg />

      {resumeClicked && <Resume />}
    </div>
  );
};

export default LandingPage;
