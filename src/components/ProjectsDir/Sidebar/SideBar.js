import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { projects } from '../../Content/projects';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import classes from './SideBar.module.css';

const SideBar = (props) => {
  const [visibleTTTLeft, setVisibleTTTLeft] = useState(false);
  const [visibleNotingLeft, setVisibleNotingLeft] = useState(false);
  const [visiblePokeBattlesLeft, setVisiblePokeBattlesLeft] = useState(false);
  const [visibleVoyageLeft, setVisibleVoyageLeft] = useState(false);
  const [visibleGAHackathonLeft, setVisibleGAHackathonLeft] = useState(false);

  return (
    <div id="sidebar">
      <ul>
        <li onClick={() => setVisibleTTTLeft(true)}>TIC-TAC-TOE</li>
        <li onClick={() => setVisibleNotingLeft(true)}>NOTING</li>
        <li onClick={() => setVisiblePokeBattlesLeft(true)}>POKÉ BATTLES</li>
        <li onClick={() => setVisibleVoyageLeft(true)}>VOYAGE</li>
        <li onClick={() => setVisibleGAHackathonLeft(true)}>GA HACKTHON</li>
      </ul>

      <Sidebar
        id={classes.sidebar1}
        visible={visibleTTTLeft}
        position="left"
        onHide={() => setVisibleTTTLeft(false)}
        appendTo={document.querySelector('#sidebar')}
      >
        <h3>{projects[0].projectName}</h3>
        {projects[0].projectSummary}
      </Sidebar>

      <Sidebar
        id={classes.sidebar2}
        visible={visibleNotingLeft}
        position="left"
        onHide={() => setVisibleNotingLeft(false)}
        appendTo={document.querySelector('#sidebar')}
      >
        <h3>{projects[1].projectName}</h3>
        {projects[1].projectSummary}
      </Sidebar>

      <Sidebar
        id={classes.sidebar3}
        visible={visiblePokeBattlesLeft}
        position="left"
        onHide={() => setVisiblePokeBattlesLeft(false)}
        appendTo={document.querySelector('#sidebar')}
      >
        <h3>{projects[2].projectName}</h3>
        {projects[2].projectSummary}
      </Sidebar>

      <Sidebar
        id={classes.sidebar4}
        visible={visibleVoyageLeft}
        position="left"
        onHide={() => setVisibleVoyageLeft(false)}
        appendTo={document.querySelector('#sidebar')}
      >
        <h3>{projects[3].projectName}</h3>
        {projects[3].projectSummary}
      </Sidebar>

      <Sidebar
        id={classes.sidebar4}
        visible={visibleGAHackathonLeft}
        position="left"
        onHide={() => setVisibleGAHackathonLeft(false)}
        appendTo={document.querySelector('#sidebar')}
      >
        <h3>{projects[4].projectName}</h3>
        {projects[4].projectSummary}
      </Sidebar>
    </div>
  );
};

export default SideBar;
