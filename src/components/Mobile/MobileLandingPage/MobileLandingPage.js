import React from 'react';

import classes from './MobileLandingPage.module.css';

import TilesBg from '../../UI/TilesBg';
import MobileNavMenu from '../MobileNavMenu';
import MobileAboutMe from './MobileAboutMe';
import MobileSummary from './MobileSummary';
import MobileGallery from './MobileGallery';
import MobileSkills from './MobileSkills';
import MobileContact from './MobileContact';
import MobileFooter from './MobileFooter';

const MobileLandingPage = () => {

  return (
    <div id={classes.mobileLandingPage}>
      <MobileNavMenu />
 
      <MobileAboutMe />
      <TilesBg className={classes.bg} />

      <MobileSummary padding={classes.padding}/>
      <MobileGallery padding={classes.padding}/>
      <MobileSkills padding={classes.padding}/>
      <MobileContact padding={classes.padding}/>
      <MobileFooter padding={classes.padding}/>
    </div>
  );
};

export default MobileLandingPage;
