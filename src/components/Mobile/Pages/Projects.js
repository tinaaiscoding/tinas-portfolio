import React from 'react';
import MobileCard from '../../UI/MobileCard';
import NotingGallery from '../../ProjectsDir/Gallery/NotingGallery';
import PokeBattlesGallery from '../../ProjectsDir/Gallery/PokeBattlesGallery';
import TTTGallery from '../../ProjectsDir/Gallery/TTTGallery';
import VoyageGallery from '../../ProjectsDir/Gallery/VoyageGallery';

import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div id={classes.projectsPage}>
      <MobileCard>
        <h3>PROJECTS</h3>
        <TTTGallery className={classes.gallery}/>
        <NotingGallery className={classes.gallery}/>
        <PokeBattlesGallery className={classes.gallery}/>
        <VoyageGallery className={classes.gallery}/>
      </MobileCard>
    </div>
  );
};

export default Projects;
