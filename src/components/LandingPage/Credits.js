import React from 'react';

import Window from '../UI/Window';

const Credits = (props) => {
  return (
    <Window
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      Credits
    </Window>
  );
};

export default Credits;
