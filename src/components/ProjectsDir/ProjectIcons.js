import React from 'react';
import ProjectIcon from './ProjectIcon';

import classes from './ProjectIcons.module.css';

import ttt from '../../images/icons/ttt.png';
import noting from '../../images/icons/noting1.png';
import pokebattles from '../../images/icons/pokebattles.png';
import voyage from '../../images/icons/voyage.png';

const ProjectIcons = (props) => {
  const showTTTHandler = () => {
    props.setDefaultSlide(false)
    props.setTttClicked(true)
    props.setNotingClicked(false)
    props.setPokeBattlesClicked(false)
    props.setVoyageClicked(false)
  };

  const showNotingHandler = () => {
    props.setDefaultSlide(false)
    props.setTttClicked(false)
    props.setNotingClicked(true)
    props.setPokeBattlesClicked(false)
    props.setVoyageClicked(false)
  };

  const showPokeBattlesHandler = () => {
    props.setDefaultSlide(false)
    props.setTttClicked(false)
    props.setNotingClicked(false)
    props.setPokeBattlesClicked(true)
    props.setVoyageClicked(false)
  };

  const showVoyageHandler = () => {
    props.setDefaultSlide(false)
    props.setTttClicked(false)
    props.setNotingClicked(false)
    props.setPokeBattlesClicked(false)
    props.setVoyageClicked(true)
  };
  return (
    <div className={classes.projectIcons}>
      <ProjectIcon
        name="Tic-Tac-Toe"
        imgSrc={ttt}
        onIconClick={showTTTHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="NOTING"
        imgSrc={noting}
        onIconClick={showNotingHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="Poké Battles"
        imgSrc={pokebattles}
        onIconClick={showPokeBattlesHandler}
      ></ProjectIcon>

      <ProjectIcon
        name="voyage"
        imgSrc={voyage}
        onIconClick={showVoyageHandler}
      ></ProjectIcon>
    </div>
  );
};

export default ProjectIcons;
