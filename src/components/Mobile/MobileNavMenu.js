import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './MobileNavMenu.module.css';

const MobileNavMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const activateMenuHandler = () => {
    setMenuActive(true);
  };

  const deactivateMenuHandler = () => {
    setMenuActive(false);
  };

  return (
    <div id={classes.mobileNavMenu}>
      {menuActive ? (
        <div className={classes.mobileNavItems}>
          <ul>
            <li className={classes.crossIcon}>
              <span
                onClick={deactivateMenuHandler}
                className={`material-symbols-outlined`}
              >
                close
              </span>
            </li>
            <li>
            <Link to="/" className={classes.listText}>HOME</Link>
            </li>
            <li>
            <Link to="/aboutme" className={classes.listText}>ABOUT ME</Link>
            </li>
            <li>
               <Link to="/projects"  className={classes.listText}>PROJECTS</Link>
            </li>
            <li>
               <Link to="/contactme"  className={classes.listText}>CONTACT ME</Link>
            </li>
            <li>
               <Link to="/credits"  className={classes.listText}>CREDITS</Link>
            </li>
          </ul>

          <div className={classes.backdrop} onClick={deactivateMenuHandler}></div>
        </div>
      ) : (
        <div className={classes.menuIcon}>
          <p>
            <span
              onClick={activateMenuHandler}
              className={`material-symbols-outlined`}
            >
              menu
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
