import React from 'react';
import Draggable from 'react-draggable';

import classes from './Window.module.css';
import 'primeicons/primeicons.css';

const Window = (props) => {
  return (
    <Draggable handle='.actionBar'>
      <div className={`${classes.window} ${props.className}`}>
        <div className={`${classes.actionBar} actionBar`}>
          <span
            className={`pi pi-circle-fill ${classes.red} ${classes.circleFill}`}
          ></span>
          <span
            className={`pi pi-circle-fill ${classes.amber} ${classes.circleFill}`}
          ></span>
          <span
            className={`pi pi-circle-fill ${classes.green} ${classes.circleFill}`}
          ></span>
        </div>

        {props.children}
      </div>
    </Draggable>
  );
};

export default Window;
