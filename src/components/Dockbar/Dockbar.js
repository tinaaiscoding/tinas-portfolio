import React, { useState } from 'react';
import DockbarIcon from '../UI/DockbarIcon';

import classes from './Dockbar.module.css';

import happyMac from '../../images/icons/happy-mac.png';
import resume from '../../images/icons/resume.png';
import email from '../../images/icons/email.png';
import onigiri from '../../images/icons/onigiri.png';

const Dockbar = (props) => {
  const openResumeHandler = () => {
    props.setResumeClicked(true)
  }

  const openContactMeFormHandler = () => {
    props.setContactMeClicked(true)
  }

  const openMacHandler = () => {
    console.log('mac')
  }

  return (
    <div className={classes.dockbar}>
      <DockbarIcon name="Happy Mac" imgSrc={happyMac} onIconClick={openMacHandler}></DockbarIcon>
      <DockbarIcon name="Resume" imgSrc={resume} onIconClick={openResumeHandler}></DockbarIcon>
      <DockbarIcon name="Drop a msg!" imgSrc={email} onIconClick={openContactMeFormHandler}></DockbarIcon>
      <DockbarIcon name="About Me" imgSrc={onigiri}></DockbarIcon>
    </div>
  );
};

export default Dockbar;
 