import React from 'react';
import MobileCard from '../../UI/MobileCard';
import MobileNavMenu from '../MobileNavMenu';
import ProjectAccordion from '../../UI/ProjectAccordion';
import { projects } from '../../Content/projects'

import classes from './Projects.module.css';

const Projects = (props) => {

  return (
    <div>
      <MobileNavMenu />
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
    </div>
  );
};

export default Projects;
