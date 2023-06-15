import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

import classes from './MobileCard.module.css';

const MobileCard = (props) => {
  const [showInitText, setShowInitText] = useState(true);
  const nodeRef = useRef(null);
  let displayText = {};
  let hideOverlay = {};

  const duration = 100;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  if (showInitText) {
    displayText = {display: 'block'};
    hideOverlay = {display: 'none'}
  } else {
    displayText = {display: 'none'};
    hideOverlay = {display: 'block'}
  }

  return (
    <div
      id={`${classes.mobileCard}`}
      className={`${props.className}`}
      onClick={props.onClick}
    >
      <Transition
        nodeRef={nodeRef}
        in={props.in}
        timeout={duration}
        className={classes.myNode}
        onEnter={() => setShowInitText(false)}
        onExited={() => setShowInitText(true)}
      >
        {(state) => (
          <div
            className={classes.overlay}
            ref={nodeRef}
            style={{
              ...hideOverlay,
              ...defaultStyle,
              ...transitionStyles[state],
          
            }}
          >
            <p>{props.text}</p>
          </div>
        )}
      </Transition>

      {/* <div style={showInitText && {visibility: 'hidden'}}>{props.children}</div> */}
      <div style={ displayText } className={classes.initText}>{props.children}</div>
    </div>
  );
};

export default MobileCard;
