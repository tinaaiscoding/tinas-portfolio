import React, { useState } from 'react';

import classes from './MobileLandingPage.module.css';

import TilesBg from '../UI/TilesBg';
import AboutMeMobile from './MobileAboutMe';
// import ContactMeFormMobile from '../LandingPage/DesktopIconsntactMeForm/ContactMeForm';
// import ProjectsMobile from '../ProjectsDir/ProjectsDir';
// import CreditsMobile from '../LandingPage/Credits';

const MobileLandingPage = () => {

  return (
    <div id={classes.mobileLandingPage}>
    <div>
      <AboutMeMobile />
      <TilesBg className={classes.bg} />
    </div>

    <div>
      <h2>test</h2>
    </div>
    </div>
  );
};

export default MobileLandingPage;
