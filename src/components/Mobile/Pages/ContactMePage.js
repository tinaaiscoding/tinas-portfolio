import React from 'react';
import MobileCard from '../../UI/MobileCard';
import ContactForm from '../../Content/ContactForm';
import MobileNavMenu from '../MobileNavMenu';

import classes from './ContactMePage.module.css';

const ContactMePage = (props) => {
  return (
    <div>
      <MobileNavMenu />
      <div id={classes.contactMePage} className={props.padding}>
        <MobileCard>
          <ContactForm />
        </MobileCard>
      </div>
    </div>
  );
};

export default ContactMePage;
