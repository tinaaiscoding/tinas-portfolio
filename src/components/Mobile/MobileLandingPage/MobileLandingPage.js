import React, { useState } from 'react';

import classes from './MobileLandingPage.module.css';

import TilesBg from '../../UI/TilesBg';
import MobileNavMenu from '../MobileNavMenu';
import MobileAboutMe from './MobileAboutMe';
import MobileSummary from './MobileSummary';
import MobileGallery from './MobileGallery';

const MobileLandingPage = () => {

  return (
    <div id={classes.mobileLandingPage}>
      <MobileNavMenu />
 
      <MobileAboutMe />
      <TilesBg className={classes.bg} />

      <MobileSummary />
      <MobileGallery />
    </div>
  );
};

export default MobileLandingPage;
