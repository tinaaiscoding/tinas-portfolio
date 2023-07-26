import React from 'react';
import ProjectIcon from './ProjectIcon';

import classes from './ProjectIcons.module.css';

import ttt from '../../images/icons/ttt.png';
import noting from '../../images/icons/noting1.png';
import pokebattles from '../../images/icons/pokebattles.png';
import voyage from '../../images/icons/voyage.png';
import hackathon from '../../images/icons/hackathon.png';

const ProjectIcons = (props) => {
  const showTTTHandler = () => {
    props.setDefaultSlide(false);
    props.setTttClicked(true);
    props.setNotingClicked(false);
    props.setPokeBattlesClicked(false);
    props.setVoyageClicked(false);
    props.setGAHackathonClicked(false);
  };

  const showNotingHandler = () => {
    props.setDefaultSlide(false);
    props.setTttClicked(false);
    props.setNotingClicked(true);
    props.setPokeBattlesClicked(false);
    props.setVoyageClicked(false);
    props.setGAHackathonClicked(false);
  };

  const showPokeBattlesHandler = () => {
    props.setDefaultSlide(false);
    props.setTttClicked(false);
    props.setNotingClicked(false);
    props.setPokeBattlesClicked(true);
    props.setVoyageClicked(false);
    props.setGAHackathonClicked(false);
  };

  const showVoyageHandler = () => {
    props.setDefaultSlide(false);
    props.setTttClicked(false);
    props.setNotingClicked(false);
    props.setPokeBattlesClicked(false);
    props.setVoyageClicked(true);
    props.setGAHackathonClicked(false);
  };

  const showGAHackathonHandler = () => {
    props.setDefaultSlide(false);
    props.setTttClicked(false);
    props.setNotingClicked(false);
    props.setPokeBattlesClicked(false);
    props.setVoyageClicked(false);
    props.setGAHackathonClicked(true);
  };
  return (
    <div className={`${classes.projectIcons} ${classes.scrollbar}`}>
      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://tinaaiscoding.github.io/tic_tac_toe/';
        }}
        href="https://tinaaiscoding.github.io/tic_tac_toe/"
      >
        <ProjectIcon
          name="Tic-Tac-Toe"
          imgSrc={ttt}
          onIconClick={showTTTHandler}
        ></ProjectIcon>
      </a>
      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://tinaaiscoding.github.io/tic_tac_toe/';
        }}
        href="https://tinaaiscoding.github.io/tic_tac_toe/"
      >
        <ProjectIcon
          name="NOTING"
          imgSrc={noting}
          onIconClick={showNotingHandler}
        ></ProjectIcon>
      </a>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://pokebattles.mitch-obrien.com/';
        }}
        href="https://pokebattles.mitch-obrien.com/"
      >
        <ProjectIcon
          name="Poké Battles"
          imgSrc={pokebattles}
          onIconClick={showPokeBattlesHandler}
        ></ProjectIcon>
      </a>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'http://tinas-voyage.surge.sh/';
        }}
        href="http://tinas-voyage.surge.sh/"
      >
        <ProjectIcon
          name="voyage"
          imgSrc={voyage}
          onIconClick={showVoyageHandler}
        ></ProjectIcon>
      </a>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://jetia.vercel.app/';
        }}
        href="https://jetia.vercel.app/"
      >
        <ProjectIcon
          name="GA Hackathon"
          imgSrc={hackathon}
          onIconClick={showGAHackathonHandler}
        ></ProjectIcon>
      </a>
    </div>
  );
};

export default ProjectIcons;
