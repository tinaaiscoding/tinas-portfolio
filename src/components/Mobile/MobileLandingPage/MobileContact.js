import React from 'react';

import classes from './MobileContact.module.css';

const MobileContact = (props) => {
  return (
    <div id={classes.mobileContact}>
      <div className={`${props.padding}`}>
        {' '}
        <h3>CONTACT</h3>
      </div>
    </div>
  );
};

export default MobileContact;
