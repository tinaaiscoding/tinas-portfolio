import React from 'react';

import Window from '../UI/Window';
import Gallery from './Gallery';
import ProjectIcons from './ProjectIcons';
import classes from './ProjectsDir.module.css';

const ProjectsDir = () => {
  return (
    <Window className={classes.projectsDir}>
      <div className={classes.grid}>
        <div className={classes.sidebar}>
          <ul>
            <li>ALL PROJECTS</li>
            <li>TIC-TAC-TOE</li>
            <li>NOTING</li>
            <li>POKE BATTLES</li>
            <li>VOYAGE</li>
          </ul>
        </div>

        <div className={classes.gallery}>
          <Gallery></Gallery>
        </div>

        <div className={classes.projectIcons}> 
          <ProjectIcons></ProjectIcons>
        </div>
      </div>
    </Window>
  );
};

export default ProjectsDir;
