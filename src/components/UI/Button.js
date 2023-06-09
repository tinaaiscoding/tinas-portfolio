import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${classes.button74} ${props.className}`}
      type={props.type}
      onClick={props.onMsgSent}
      disabled={props.disabled}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
