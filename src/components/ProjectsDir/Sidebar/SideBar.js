import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import classes from './SideBar.module.css';

const SideBar = (props) => {
  const [visibleTTTLeft, setVisibleTTTLeft] = useState(false);
  const [visibleNotingLeft, setVisibleNotingLeft] = useState(false);
  const [visiblePokeBattlesLeft, setVisiblePokeBattlesLeft] = useState(false);
  const [visibleVoyageLeft, setVisibleVoyageLeft] = useState(false);

  

  return (
    <div>
      <div className={classes.sidebar}>
        <ul>
          <li>ALL PROJECTS</li>
          <li onClick={() => setVisibleTTTLeft(true)}>TIC-TAC-TOE</li>
          <li onClick={() => setVisibleNotingLeft(true)}>NOTING</li>
          <li onClick={() => setVisiblePokeBattlesLeft(true)}>POKÉ BATTLES</li>
          <li onClick={() => setVisibleVoyageLeft(true)}>VOYAGE</li>
        </ul>

        <Sidebar
          id={classes.sidebar1}
          visible={visibleTTTLeft}
          position="left"
          onHide={() => setVisibleTTTLeft(false)}
        >
          <h3>TIC-TAC-TOE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>

        <Sidebar
        id={classes.sidebar2}
          visible={visibleNotingLeft}
          position="left"
          onHide={() => setVisibleNotingLeft(false)}
        >
          <h3>NOTING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>

        <Sidebar
        id={classes.sidebar3}
          visible={visiblePokeBattlesLeft}
          position="left"
          onHide={() => setVisiblePokeBattlesLeft(false)}
        >
          <h3>POKÉ BATTLES</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>

        <Sidebar
        id={classes.sidebar4}
          visible={visibleVoyageLeft}
          position="left"
          onHide={() => setVisibleVoyageLeft(false)}
        >
          <h3>VOYAGE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;
