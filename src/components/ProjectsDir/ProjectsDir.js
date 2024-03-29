import React, { useState } from 'react';
import Window from '../UI/Window';
import Gallery from './Gallery/Gallery';
import ProjectIcons from './ProjectIcons';
import SideBar from './Sidebar/SideBar';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import classes from './ProjectsDir.module.css';

const ProjectsDir = (props) => {
  const [defaultSlide, setDefaultSlide] = useState(true);
  const [tttClicked, setTttClicked] = useState(false);
  const [notingClicked, setNotingClicked] = useState(false);
  const [pokeBattlesClicked, setPokeBattlesClicked] = useState(false);
  const [voyageClicked, setVoyageClicked] = useState(false);
  const [GAHackathonClicked, setGAHackathonClicked] = useState(false);

  return (
    <Window
      id={classes.projectsDirWindow}
      className={props.className}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      actionBar={classes.actionBar}
      content={classes.content}
    >
      <div className={classes.projectsDir}>
        <div className={classes.grid}>
          <div className={classes.sidebarDiv}>
            <SideBar />
          </div>

          <div className={classes.projectContent}>
            <div className={classes.gallery}>
              <Gallery
                defaultSlide={defaultSlide}
                tttClicked={tttClicked}
                notingClicked={notingClicked}
                pokeBattlesClicked={pokeBattlesClicked}
                voyageClicked={voyageClicked}
                GAHackathonClicked={GAHackathonClicked}
              />
            </div>

            <div className={classes.projectIcons}>
            <span class="material-symbols-outlined">chevron_left</span>
              <ProjectIcons
                setDefaultSlide={setDefaultSlide}
                setTttClicked={setTttClicked}
                setNotingClicked={setNotingClicked}
                setPokeBattlesClicked={setPokeBattlesClicked}
                setVoyageClicked={setVoyageClicked}
                setGAHackathonClicked={setGAHackathonClicked}
              />
              <span class="material-symbols-outlined">navigate_next</span>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default ProjectsDir;
