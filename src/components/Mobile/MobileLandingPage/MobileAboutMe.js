import React from 'react';


import MobileCard from '../../UI/MobileCard';

import classes from './MobileAboutMe.module.css';

const MobileAboutMe = () => {
  return (
    <div id={classes.mobileAboutMe}>
      <MobileCard className={classes.header}>
        <h4>Hi,</h4>
        <h2>I'm Tina!</h2>
      </MobileCard>
      
      <a href="#" className={classes.button74}>SAY HI BACK</a>


    </div>
  );
};

export default MobileAboutMe;
