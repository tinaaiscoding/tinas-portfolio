import React from 'react';
import MobileCard from '../../UI/MobileCard';
import NotingGallery from '../../ProjectsDir/Gallery/NotingGallery';
import PokeBattlesGallery from '../../ProjectsDir/Gallery/PokeBattlesGallery';
import TTTGallery from '../../ProjectsDir/Gallery/TTTGallery';
import VoyageGallery from '../../ProjectsDir/Gallery/VoyageGallery';
import ProjectAccordion from '../../UI/ProjectAccordion';

import classes from './Projects.module.css';

const Projects = (props) => {
  const projects = [
    {
      projectName: 'TIC-TAC-TOE',
      projectGallery: <TTTGallery className={classes.gallery} />,
      projectSummary: (
        <div>
          <p>
            This was my first project with General Assembly. The requirement was
            to recreate the classic Tic-Tac-Toe with JavaScript.
          </p>

          <p>
            Just like how the classic Tic-Tae-Toe game is played, the main
            objective is to get three tokens in a row, either horizontally,
            vertically, or diagonally. Additionally, players can enter their
            names and view the scoreboard.
          </p>

          <p>
            I was super proud of the way everything turned out. I had so much
            fun building this project. I would laugh and celebrate when
            something worked out as I had intended. The Super Mario theme made
            it way more enojoyable to build.
          </p>
        </div>
      ),
    },
    {
      projectName: 'NOTING',
      projectGallery: <NotingGallery className={classes.gallery} />,
      projectSummary: (
        <div>
          <p>
            NOTING is a note-taking app incorporating CRUD features. This was
            built with Ruby and the Sinatra library.
          </p>
          <p>
            Users can sign up and log in where they will be able to access and
            view their notes, create new notes or edit current notes. The app is
            available for non-users, however, notes are only temporarily on the
            dashboard and will disappear when the app is closed.
          </p>
        </div>
      ),
    },
    {
      projectName: 'POKÉ BATTLES',
      projectGallery: <PokeBattlesGallery className={classes.gallery} />,
      projectSummary: (
        <div>
          <p>
            PokéBattles was the first group project I've ever collaborated on.
            The objective was to create a RESTful Single-Page Application(SPA)
            incorporating CRUD functionalities.
          </p>
          <p>
            We decided to build a mini version of the classic Pokémon game. As a
            user, the goal of the game is to win battles to evolve the Pokémon
            and then have the ability to attain more Pokémon to complete the
            Pokédex.
          </p>
          <p>
            Truly one of my favourite experiences working as a team. The level
            of communication and enthusiasm from all team members was something
            else. We did a lot of pair programming and learnt about my teammates
            and how to work with them harmoniously. Unintentionally, I became
            (somewhat) the team leader, however, my intentions were only to make
            sure we stayed on track and in line with our goals. I was so happy
            to provide support to my team.
          </p>
        </div>
      ),
    },
    {
      projectName: 'VOYAGE',
      projectGallery: <VoyageGallery className={classes.gallery} />,
      projectSummary: (
        <div>
          <p>
            This is the last project with the General Assembly Bootcamp. We were
            given the opportunity to showcase our skills and creativity in an
            app of our choice.
          </p>
          <p>
            The app is a holiday-packing planner. It incoporates three different
            APIs. The idea was to use unrelated topics and make them relatable.
          </p>
          <p>External:</p>
          <p>- Weather API</p>
          <p>- Location API</p>
          <p>Internal:</p>
          <p>- Clothing API</p>
          <p>
            The app's main features will be for users to select their holiday
            destination, view the average weather of the destinations, and
            produce a simple clothes packing guide. The app also features a
            world map displaying pins for the selected destination.
          </p>
        </div>
      ),
    },
  ];

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
