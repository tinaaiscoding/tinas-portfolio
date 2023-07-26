import React from 'react';
import Window from '../UI/Window';
import CreditsContent from '../Content/CreditsContent';

import classes from './Credits.module.css';

const Credits = (props) => {
  return (
    <Window
      id={classes.creditsWindow}
      className={props.className}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
      actionBar={classes.actionBar}
      content={classes.content}
    >
      <div className={classes.credits}>
        <CreditsContent />
      </div>
    </Window>
  );
};

export default Credits;
