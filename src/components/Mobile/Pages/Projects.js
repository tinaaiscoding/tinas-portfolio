import React, { useState } from 'react';
import MobileCard from '../../UI/MobileCard';
import NotingGallery from '../../ProjectsDir/Gallery/NotingGallery';
import PokeBattlesGallery from '../../ProjectsDir/Gallery/PokeBattlesGallery';
import TTTGallery from '../../ProjectsDir/Gallery/TTTGallery';
import VoyageGallery from '../../ProjectsDir/Gallery/VoyageGallery';
import ProjectAccordion from '../../UI/ProjectAccordion';

import classes from './Projects.module.css';

const Projects = (props) => {
  const [projects, setProjects] = useState([
    {
      projectName: 'Tic-Tac-Toe',
      projectSummary: 'game',
      projectGallery: <TTTGallery className={classes.gallery} />,
    },
    {
      projectName: 'Noting',
      projectSummary: 'note',
      projectGallery: <NotingGallery className={classes.gallery} />,
    },
    {
      projectName: 'PokeBattles',
      projectSummary: 'game',
      projectGallery: <PokeBattlesGallery className={classes.gallery} />,
    },
    {
      projectName: 'Voyage',
      projectSummary: 'planner',
      projectGallery: <VoyageGallery className={classes.gallery} />,
    },
  ]);

  return (
    <div id={classes.projectsPage} className={props.padding}>
      <MobileCard>
        <h3>PROJECTS</h3>
        {projects.map((project, index) => {
          return (
            <ProjectAccordion
              key={index}
              projectName={project.projectName}
              projectSummary={project.projectSummary}
              gallery={project.projectGallery}
            />
          );
        })}
      </MobileCard>
    </div>
  );
};

export default Projects;
