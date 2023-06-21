import React from 'react';
import { HashLink } from 'react-router-hash-link';
import MobileCard from '../../UI/MobileCard';
import Button from '../../UI/Button';

import classes from './MobileAboutMe.module.css';

const MobileAboutMe = () => {
  return (
    <div id={classes.mobileAboutMe}>
      <MobileCard className={classes.header}>
        <h4>Hi,</h4>
        <h2>I'm Tina!</h2>
      </MobileCard>
      
      <HashLink smooth to="/#contact"><Button className={classes.button} buttonName='SAY HI BACK'></Button></HashLink>
  


    </div>
  );
};

export default MobileAboutMe;
