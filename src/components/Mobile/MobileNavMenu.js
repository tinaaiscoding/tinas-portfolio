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
      <div className={classes.menuIcon}>
        {menuActive ? (
          <p>
            <span
              onClick={deactivateMenuHandler}
              class="material-symbols-outlined"
            >
              close
            </span>
          </p>
        ) : (
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
