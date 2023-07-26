import React from 'react';
import MobileCard from '../../UI/MobileCard.js';
import MobileNavMenu from '../MobileNavMenu';
import AboutMeContent from '../../Content/AboutMeContent.js';

import classes from './AboutMe.module.css';

const AboutMe = (props) => {
  return (
    <div id={classes.aboutMePage}>
      <MobileNavMenu />
      <div id={classes.aboutMe} className={props.padding}>
        <MobileCard>
          <AboutMeContent />
        </MobileCard>
      </div>
    </div>
  );
};

export default AboutMe;
