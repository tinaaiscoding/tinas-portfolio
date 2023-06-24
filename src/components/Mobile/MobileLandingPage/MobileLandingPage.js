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

const MobileLandingPage = (props) => {

  return (
    <div id={classes.mobileLandingPage}>
      <MobileNavMenu />
 
      <MobileAboutMe />
      <TilesBg className={classes.bg} />

      <MobileSummary padding={props.padding}/>
      <MobileGallery padding={props.padding}/>
      <MobileSkills padding={props.padding}/>
      <MobileContact padding={props.padding}/>
      <MobileFooter padding={props.padding}/>
    </div>
  );
};

export default MobileLandingPage;
