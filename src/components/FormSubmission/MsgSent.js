import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MsgSent.module.css';
import onigiri2 from '../../images/onigiri2.png';

const MsgSent = (props) => {
  return (
    <div className={`${classes.msgSent} ${props.className}`}>
      <img src={onigiri2} alt="" />
      
      <div className={classes.textBox}>
        <p>Thank you for your message! </p>
        <p>I'll be in touch soon.</p>

        <Link to="/" className={classes.link}>HOME</Link>
      </div>
    </div>
  );
};

export default MsgSent;
