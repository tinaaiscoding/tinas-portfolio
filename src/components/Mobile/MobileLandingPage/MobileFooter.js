import React from 'react';

import classes from './MobileFooter.module.css';

// ICONS IMAGES
import gitHub from '../../../images/icons/github-purple1.png';
import linkedIn from '../../../images/icons/linkedin-purple1.png';
import twitter from '../../../images/icons/twitter-purple1.png';

const MobileFooter = (props) => {
  return (
    <div id={classes.mobileFooter}>
      <div className={classes.icons}>
        <a href="https://github.com/tinaaiscoding">
          <img src={gitHub} alt="github-logo" />
        </a>
        <a href="https://www.linkedin.com/in/tinanhivo/">
          <img src={linkedIn} alt="linkedin-logo" />
        </a>
        <a href="https://twitter.com/tinaiscoding">
          <img src={twitter} alt="twitter-logo" />
        </a>
      </div>
      <p>© Tina's Portfolio 2023 </p>
    </div>
  );
};

export default MobileFooter;
