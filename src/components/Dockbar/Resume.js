import React from 'react';

import resume from '../../images/resume.png';

import Window from '../UI/Window';
import classes from './Resume.module.css';

const Resume = (props) => {
  return (
    <Window
      className={`${classes.resume}`}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      <img className={`${classes.resumeImg}`} src={resume} alt="" />
    </Window>
  );
};

export default Resume;
