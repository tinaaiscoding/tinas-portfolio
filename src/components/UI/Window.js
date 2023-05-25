import React from 'react';
import Draggable from 'react-draggable';

import classes from './Window.module.css';
import 'primeicons/primeicons.css';

const Window = (props) => {
  return (
    <Draggable handle=".actionBar">
      <div
        id={props.id}
        className={`${props.className} ${classes.window}`}
        onClick={props.onWindowClick}
      >
        <div className={`${classes.actionBar} actionBar`}>
          <span
            className={`pi pi-circle-fill ${classes.red} ${classes.circleFill}`}
            onClick={props.onCloseWindow}
          ></span>
          <span
            className={`pi pi-circle-fill ${classes.amber} ${classes.circleFill}`}
          ></span>
          <span
            className={`pi pi-circle-fill ${classes.green} ${classes.circleFill}`}
          ></span>
        </div>

        <div className={`${classes.content}`}>{props.children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
