import React from 'react';

import classes from './MsgSent.module.css';
import onigiri2 from '../../../images/onigiri2.png';

const MsgSent = () => {
  return (
    <div className={classes.msgSent}>
      <img src={onigiri2} alt="" />
      
      <div className={classes.textBox}>
        <p>Thank you for your message! </p>
        <p>I'll be in touch soon.</p>
      </div>
    </div>
  );
};

export default MsgSent;
