import React from 'react';
import ProjectIcon from './ProjectIcon';

import classes from './ProjectIcons.module.css';

import ttt from '../../images/icons/ttt.png';
import noting from '../../images/icons/noting1.png';
import pokebattles from '../../images/icons/pokebattles.png';
import voyage from '../../images/icons/voyage.png';

const ProjectIcons = () => {
  return (
    <div className={classes.projectIcons}>
      <ProjectIcon
        name="Tic-Tac-Toe"
        imgSrc={ttt}
        // onIconClick={openMacHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="NOTING"
        imgSrc={noting}
        // onIconClick={openMacHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="Poké Battles"
        imgSrc={pokebattles}
        // onIconClick={openMacHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="voyage"
        imgSrc={voyage}
        // onIconClick={openMacHandler}
      ></ProjectIcon>
    </div>
  );
};

export default ProjectIcons;
