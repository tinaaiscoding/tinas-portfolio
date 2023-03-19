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

  return (
    <Window
      className={classes.projectsDir}
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
    >
      <div className={classes.grid}>
        <div className={classes.sidebar}>
          <SideBar />
        </div>

        <div className={classes.gallery}>
          <Gallery
            defaultSlide={defaultSlide}
            tttClicked={tttClicked}
            notingClicked={notingClicked}
            pokeBattlesClicked={pokeBattlesClicked}
            voyageClicked={voyageClicked}
          ></Gallery>
        </div>

        <div className={classes.projectIcons}>
          <ProjectIcons
            setDefaultSlide={setDefaultSlide}
            setTttClicked={setTttClicked}
            setNotingClicked={setNotingClicked}
            setPokeBattlesClicked={setPokeBattlesClicked}
            setVoyageClicked={setVoyageClicked}
          ></ProjectIcons>
        </div>
      </div>
    </Window>
  );
};

export default ProjectsDir;
