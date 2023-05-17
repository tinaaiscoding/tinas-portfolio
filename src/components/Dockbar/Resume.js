import React from 'react';

import resume from '../../images/resume.png';

import Window from '../UI/Window';
import classes from './Resume.module.css';

const Resume = (props) => {
  return (
    <Window
      id={classes.resumeWindow}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      <div className={classes.resume}>
        <img className={`${classes.resumeImg}`} src={resume} alt="" />
      </div>
    </Window>
  );
};

export default Resume;
