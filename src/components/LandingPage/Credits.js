import React from 'react';
import Window from '../UI/Window';

import classes from './Credits.module.css';

const Credits = (props) => {
  return (
    <Window
      id={classes.creditsWindow}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      <div className={classes.credits}>
        <h3>CREDITS</h3>

        <div className={classes.creditsContent}>
          <a href="https://react.dev/">REACT</a>
          <a href="https://www.pinterest.com.au/tinaunicorn/portfolio/">
            PINTEREST MOOD BOARD
          </a>
          <a href="https://www.canva.com/">CANVA</a>
          <a href="https://www.figma.com/">FIGMA</a>
          <a href="https://www.npmjs.com/package/react-draggable">
            DRAGGABLE COMPONENTS
          </a>
          <a href="https://herotofu.com/">CONTACT ME FORMS</a>
          <a href="https://icons8.com/">ICONS</a>
          <a href="https://www.behance.net/gallery/93884721/Event-App">
            COLOUR PALETTE
          </a>
          <a href="https://css-tricks.com/snippets/css/typewriter-effect/">
            TYPEWRITING ANIMATION
          </a>
          <a href="http://cssstars.com/mac-os-dock-menu-css3/">
            DOCKBAR ANIMATION
          </a>
          <a href="https://getcssscan.com/css-buttons-examples">
            BUTTON STYLES
          </a>
        </div>
      </div>
    </Window>
  );
};

export default Credits;
