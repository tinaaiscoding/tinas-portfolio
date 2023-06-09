import React from 'react';

import classes from './MobileFooter.module.css';

const MobileFooter = (props) => {
  return (
    <div id={classes.mobileFooter}>
      <div className={`${props.padding}`}>FOOTER</div>
    </div>
  );
};

export default MobileFooter;
