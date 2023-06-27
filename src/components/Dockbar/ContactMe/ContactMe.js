import React from 'react';
import Window from '../../UI/Window';
import ContactForm from './ContactForm';

import classes from './ContactMe.module.css';

const ContactMe = (props) => {
  return (
    <Window
      id={classes.contactMe}
      className={props.className}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      <ContactForm className={classes.form}/>
    </Window>
  );
};

export default ContactMe;
