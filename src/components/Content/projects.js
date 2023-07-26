import NotingGallery from '../ProjectsDir/Gallery/NotingGallery';
import PokeBattlesGallery from '../ProjectsDir/Gallery/PokeBattlesGallery';
import TTTGallery from '../ProjectsDir/Gallery/TTTGallery';
import VoyageGallery from '../ProjectsDir/Gallery/VoyageGallery';
import GAHackathonGallery from '../ProjectsDir/Gallery/GAHackathonGallery';

import classes from './projects.module.css';

export const projects = [
  {
    projectName: 'TIC-TAC-TOE',
    projectGallery: <TTTGallery id={classes.gallery} />,
    projectSummary: (
      <div>
        <p>
          This was my first project with General Assembly where we were tasked
          with recreating the classic game of Tic-Tac-Toe using HTML, CSS and
          JavaScript.
        </p>

        <p>
          Following the familiar rules of Tic-Tac-Toe, the primary objective was
          for players to strategically align three tokens in a row, whether
          horizontally, vertically, or diagonally. As an added feature, players
          could personalize the experience by entering their names and keeping
          track of their scores on the scoreboard.
        </p>

        <p>
          I couldn't help but feel a tremendous sense of pride in the final
          outcome of this project. Building the game was an absolute delight,
          and I found myself laughing and celebrating whenever a feature worked
          exactly as intended. Incorporating the Super Mario theme added an
          extra layer of enjoyment to the development process, making it all the
          more rewarding.
        </p>

        <p>
          Overall, this project not only allowed me to showcase my skills but
          also brought a lot of excitement and amusement throughout the
          development process.
        </p>
      </div>
    ),
  },
  {
    projectName: 'NOTING',
    projectGallery: <NotingGallery id={classes.gallery} />,
    projectSummary: (
      <div>
        <p>
          NOTING is a comprehensive note-taking application that seamlessly
          integrates CRUD functionalities. The app was developed using Ruby and
          the Sinatra library.
        </p>

        <p>
          Upon signing up and logging in, users gain access to a personalized
          dashboard where they can conveniently view, create, and edit their
          notes. For non-registered users, the app offers limited functionality,
          allowing them to access the dashboard temporarily. However, any notes
          created by non-users will be automatically removed once the app is
          closed.
        </p>

        <p>
          The app's design aims to provide a smooth and efficient note-taking
          experience, catering to both registered and non-registered users'
          needs.
        </p>
      </div>
    ),
  },
  {
    projectName: 'POKÉ BATTLES',
    projectGallery: <PokeBattlesGallery id={classes.gallery} />,
    projectSummary: (
      <div>
        <p>
          PokéBattles marked my first ever group project, and it turned out to
          be an exhilarating experience. The main objective was to develop a
          RESTful Single-Page Application (SPA) that incorporated CRUD
          functionalities.
        </p>

        <p>
          Our collective decision led us to create a mini version of the classic
          Pokémon game. In our version, users engage in battles to evolve their
          Pokémon and unlock more Pokémons to complete their Pokédex.
        </p>
        <p>
          Working as a team on this project was genuinely one of my favorite
          experiences. The level of communication and enthusiasm from all team
          members was exceptional. We frequently engaged in pair programming,
          which not only enhanced our technical skills but also fostered a
          deeper understanding of each team member's strengths and working
          styles.
        </p>

        <p>
          I found myself unintentionally taking on the role of a team leader. I
          focused on ensuring that we stayed on track and kept our goals in
          clear sight. I was also able to provide support and guidance to the
          team and derived immense satisfaction from witnessing the harmonious
          collaboration among all team members.
        </p>

        <p>
          All in all, the experience with PokéBattles was a memorable and
          rewarding journey, allowing us to grow both as individuals and as a
          cohesive team.
        </p>
      </div>
    ),
  },
  {
    projectName: 'VOYAGE',
    projectGallery: <VoyageGallery id={classes.gallery} />,
    projectSummary: (
      <div>
        <p>
          This project marks the final leg of my General Assembly Bootcamp
          journey, offering an exciting opportunity to unleash my creativity and
          skills in developing an app of choice.
        </p>
        <p>
          My chosen app is a holiday-packing planner, seamlessly integrating
          three diverse APIs. This includes two external APIs - one for Weather
          and another for Location, along with an internal Clothing API. I
          wanted to blend unrelated topics to create something relatable and
          useful for users.
        </p>
        <p>
          The primary functionalities of our app empower users to effortlessly
          select their desired holiday destination, access the average weather
          information for those locations, and receive a practical
          clothes-packing guide. Additionally, the app boasts an interactive
          world map, adorned with pins marking the chosen destinations.
        </p>
        <p>
          With these features combined, my holiday-packing planner offers an
          intuitive and user-friendly experience, making vacation preparation a
          breeze.
        </p>
      </div>
    ),
  },
  {
    projectName: 'GA HACKATHON',
    projectGallery: <GAHackathonGallery id={classes.gallery} />,
    projectSummary: (
      <div>
        <p>
          Participating in General Assembly Australia's first hackathon was an
          intense but rewarding experience. As the lead developer on the team, I
          took on multiple responsibilities, including leading the web
          development, completing the landing page, managing the team.{' '}
        </p>
        <p>
          The biggest challenged I faced teaching another team member how to
          work with React while juggling my own tasks, but I embraced the
          opportunity and ensured that we delivered a well-executed and
          mobile-responsive website. The hackathon emphasized the importance of
          adaptability and teamwork, and I am proud of how we pulled together to
          create a successful project despite the challenges we encountered.
        </p>
      </div>
    ),
  },
];
