import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Window from '../UI/Window';
import classes from './AboutMe.module.css';
import AboutMeContent from '../Content/AboutMeContent';

const AboutMe = (props) => {
  return (
    <Window
      id={classes.aboutMeWindoow}
      className={props.className}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
      actionBar=""
      content=""
    >
      <div id={classes.aboutMe}>
        <div className={classes.aboutMeHeader}>
          <div className={classes.typewriter}>
            <h2>Hi, I'm Tina!</h2>
          </div>
        </div>

        <HashLink smooth to="/#about-me-section">
          <span
            className={`material-symbols-outlined ${classes.bounceArrow} ${classes.bounce}`}
          >
            expand_more
          </span>
        </HashLink>

        <div className={classes.aboutMeContent}>
          <AboutMeContent headingId="about-me-section" />
        </div>
      </div>
    </Window>
  );
};

export default AboutMe;
