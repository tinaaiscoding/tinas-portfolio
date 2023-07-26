import React from 'react';

import ContactForm from '../../Content/ContactForm';

import classes from './MobileContact.module.css';

const MobileContact = (props) => {
  return (
    <div id="contact">
      <div className={`${props.padding}`} id={classes.mobileContact}>
        <ContactForm />
      </div>
    </div>
  );
};

export default MobileContact;
