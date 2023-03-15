import React from 'react';
import classes from './Window.module.css';
import 'primeicons/primeicons.css';

const Window = (props) => {
  return (
    <div className={`${classes.window} ${props.className}`}>
      <div className={classes.actionBar}>
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
  );
};

export default Window;
