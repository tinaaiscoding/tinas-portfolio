import React from 'react';
import MobileCard from '../../UI/MobileCard';
import ContactForm from '../../ContactForm';

import classes from './ContactMePage.module.css';

const ContactMePage = (props) => {
  return (
    <div id={classes.contactMePage} className={props.padding}>
      <MobileCard className={classes.card}>
        <ContactForm />
      </MobileCard>
    </div>
  );
};

export default ContactMePage;
