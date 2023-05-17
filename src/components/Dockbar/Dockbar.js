import React from 'react';
import DockbarIcon from './DockbarIcon';

import classes from './Dockbar.module.css';

import happyMac from '../../images/icons/happy-mac.png';
import resume from '../../images/icons/resume.png';
import email from '../../images/icons/email.png';
import onigiri from '../../images/icons/onigiri.png';

const Dockbar = (props) => {
  const openMacHandler = () => {
    console.log('hello');
  };

  const openResumeHandler = () => {
    props.setResumeVisible(true);
    props.setResumeActive(true);
    props.setAboutMeActive(false);
    props.setContactMeActive(false);
    props.setCreditsActive(false);
    props.setProjectsDirActive(false);
  };

  const openContactMeFormHandler = () => {
    props.setContactMeVisible(true);
    props.setContactMeActive(true);
    props.setAboutMeActive(false);
    props.setResumeActive(false);
    props.setCreditsActive(false);
    props.setProjectsDirActive(false);
  };

  const openAboutMeHandler = () => {
    props.setAboutMeVisible(true);
    props.setAboutMeActive(true);
    props.setContactMeActive(false);
    props.setResumeActive(false);
    props.setCreditsActive(false);
    props.setProjectsDirActive(false);
  };

  return (
    <div className={classes.dockbar}>
      <DockbarIcon
        name="Happy Mac"
        imgSrc={happyMac}
        onIconClick={openMacHandler}
      ></DockbarIcon>
      <DockbarIcon
        name="Resume"
        imgSrc={resume}
        onIconClick={openResumeHandler}
      ></DockbarIcon>
      <DockbarIcon
        name="Drop a msg!"
        imgSrc={email}
        onIconClick={openContactMeFormHandler}
      ></DockbarIcon>
      <DockbarIcon
        name="About Me"
        imgSrc={onigiri}
        onIconClick={openAboutMeHandler}
      ></DockbarIcon>
    </div>
  );
};

export default Dockbar;
