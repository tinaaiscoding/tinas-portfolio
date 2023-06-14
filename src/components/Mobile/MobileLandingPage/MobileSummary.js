import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MobileSummary.module.css';

const MobileSummary = (props) => {
  return (
    <div id={classes.mobileSummary}>
      <div className={`${classes.summaryText} ${props.padding}`}>
        <p>
        "I aspire to create beautiful and fun designs that are both aesthetically pleasing and functional. 
        </p>
        <p>I hope we can work together to smash goals and build amazing websites."
        </p>
        
        <Link to="/aboutme" className={classes.link}>LEARN MORE</Link>
      </div>

    </div>
  );
};

export default MobileSummary;
