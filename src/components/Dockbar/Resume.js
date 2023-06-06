import React from 'react';

import resume from '../../images/resume.png';

import Window from '../UI/Window';
import classes from './Resume.module.css';

const Resume = (props) => {
  return (
    <Window
      id={classes.resumeWindow}
      className={props.className}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
      actionBar={classes.actionBar}
      content={classes.content}
    >
      <div className={classes.resume}>
        <img className={`${classes.resumeImg}`} src={resume} alt="" />
      </div>
    </Window>
  );
};

export default Resume;
