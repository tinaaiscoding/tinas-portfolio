import React, { useState } from 'react';

import classes from './ProjectsDir.module.css';

import Window from '../UI/Window';
import Gallery from './Gallery/Gallery';
import ProjectIcons from './ProjectIcons';

const ProjectsDir = (props) => {
  const [defaultSlide, setDefaultSlide] = useState(true);
  const [tttClicked, setTttClicked] = useState(false)
  const [notingClicked, setNotingClicked] = useState(false)
  const [pokeBattlesClicked, setPokeBattlesClicked] = useState(false)
  const [voyageClicked, setVoyageClicked] = useState(false)

  return (
    <Window className={classes.projectsDir} onCloseWindow={props.onCloseWindow} onWindowClick={props.onWindowClick}>
      <div className={classes.grid}>
        <div className={classes.sidebar}>
          <ul>
            <li>ALL PROJECTS</li>
            <li>TIC-TAC-TOE</li>
            <li>NOTING</li>
            <li>POKÉ BATTLES</li>
            <li>VOYAGE</li>
          </ul>
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
