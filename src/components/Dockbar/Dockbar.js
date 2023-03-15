import React from 'react';
import DockbarIcon from '../UI/DockbarIcon';

import classes from './Dockbar.module.css';

import happyMac from '../../images/icons/happy-mac.png';
import resume from '../../images/icons/resume.png';
import email from '../../images/icons/email.png';
import greenTea from '../../images/icons/green-tea.png';

const Dockbar = () => {
  return (
    <div className={classes.dockbar}>
      <DockbarIcon name="Happy Mac" imgSrc={happyMac}></DockbarIcon>
      <DockbarIcon name="Resume" imgSrc={resume}></DockbarIcon>
      <DockbarIcon name="Drop a msg!" imgSrc={email}></DockbarIcon>
      <DockbarIcon name="About Me" imgSrc={greenTea}></DockbarIcon>
    </div>
  );
};

export default Dockbar;
