import React from 'react';
import MobileCard from '../../UI/MobileCard';
import ContactMeFrom from '../MobileLandingPage/MobileContact';

import classes from './ContactMePage.module.css';

const ContactMePage = (props) => {
  return (
    <div id={classes.contactMePage} className={props.padding}>
      <MobileCard className={classes.card}>
        <ContactMeFrom />
      </MobileCard>
    </div>
  );
};

export default ContactMePage;
