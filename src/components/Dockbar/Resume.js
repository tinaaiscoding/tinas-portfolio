import React from 'react';

import { ReactComponent as ResumeSvg } from '../../images/resume.svg';

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
      <ResumeSvg></ResumeSvg>
    </Window>
  );
};

export default Resume;
