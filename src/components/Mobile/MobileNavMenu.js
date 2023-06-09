import React, { useState } from 'react';

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
      {menuActive && (
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
            <li><span className={classes.listText}> ABOUT ME</span></li>
            <li><span className={classes.listText}>PROJECTS</span></li>
            <li><span className={classes.listText}>RESUME</span></li>
            <li><span className={classes.listText}>CONTACT ME</span></li>
          </ul>
        </div>
      )}

      <div className={classes.menuIcon}>
        {!menuActive && (
          <p>
            <span
              onClick={activateMenuHandler}
              className={`material-symbols-outlined`}
            >
              menu
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MobileNavMenu;
