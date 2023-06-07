import React from 'react';

import classes from './MobileAboutMe.module.css';

const MobileAboutMe = () => {
  return (
    <div id={classes.mobileAboutMe}>
      <div className={classes.header}>
        <h3>Hi,</h3>
        <h2>I'm Tina!</h2>
      </div>
      
      <button className={classes.button74}>SAY HI BACK</button>

    </div>
  );
};

export default MobileAboutMe;
