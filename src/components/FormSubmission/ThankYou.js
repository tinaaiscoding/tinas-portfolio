import React from 'react';
import MediaQuery from 'react-responsive';
import Window from '../UI/Window';
import MobileCard from '../UI/MobileCard';
import MsgSent from './MsgSent';

import classes from './ThankYou.module.css'

const ThankYou = (props) => {
  return (
    <div>
      <MediaQuery minWidth={1224}>
        <div className={classes.desktopThankYou}>
          <Window id={classes.thankYou}>
            <MsgSent className={classes.desktopMsg}/>
          </Window>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1223}>
        <div className={`${props.padding} ${classes.mobileThankYou}`}>
          <MobileCard>
            <MsgSent className={classes.mobileMsg}/>
          </MobileCard>
        </div>
      </MediaQuery>
    </div>
  );
};

export default ThankYou;
