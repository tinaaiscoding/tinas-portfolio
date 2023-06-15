import React, { useState } from 'react';

import MobileCard from '../../UI/MobileCard';
import MobileSkill from './MobileSkill';

import classes from './MobileSkills.module.css';

import code from '../../../images/icons/code.png';
import communication from '../../../images/icons/communication.png';
import design from '../../../images/icons/design.png';
import study from '../../../images/icons/study.png';
import fix from '../../../images/icons/fix.png';

const MobileSkills = (props) => {
  const [codeClicked, setCodeClicked] = useState(false);
  const [commClicked, setCommClicked] = useState(false);
  const [designClicked, setDesignClicked] = useState(false);
  const [studyClicked, setStudyClicked] = useState(false);
  const [fixClicked, setFixClicked] = useState(false);

  const codeText = ` The websites I create are built with a variety of tech
  including, but not limited to, HTML, CSS, Javascript, React,
  Ruby, Express. The websites incorporate responsive designs and
  can include databases. To create and manage databases, I've
  worked with PostgreSQL, cloud-based Firebase and Supabase.`;

  const commText = `I'm an emphatic listener and genuinely want to understand the
  problem and goals of a project. I can confidently communicate both
  written and verbally. I like to set clear goals with the outcome
  and design process before I start my work and I will regularly
  review my plans.`;

  const designText = `Design process is something I take quite seriously. I break down
  my projects by creating wireframes on Figma, creating
  inspirational mood boards, organising my actions in Trello. Users
  will definitely judge a website by it's look over how usable it
  is, so I want to tackle this issue by incorporating both in my
  websites. To be aesthetically pleasing AND usability.`;

  const studyText = `Constantly on the lookout for better ways to improve my skills
  personally and professionally. Since taking the coding bootcamp
  with General Assembly, I am curious to explore design principles
  and UI/UX. I like challenge myself by stepping out of my comfort
  zone because it's rewarding to see the growth in my abilities.`;

  const fixText = `I possess strong analytical skills to understand complex
  requirements and break them down into manageable components. I
  like to create unique design concepts, explore unconventional
  approaches, and find creative ways to address user experience or
  visual challenges.`;

  const codeClickHandler = () => {
    setCodeClicked((current) => !current);
  };

  const commClickHandler = () => {
    setCommClicked((current) => !current);
  };

  const designlickHandler = () => {
    setDesignClicked((current) => !current);
  };

  const studyClickHandler = () => {
    setStudyClicked((current) => !current);
  };

  const fixClickHandler = () => {
    setFixClicked((current) => !current);
  };

  return (
    <div id={classes.mobileSkills}>
      <div className={props.padding}>
        <MobileCard
          className={classes.skill}
          onClick={codeClickHandler}
          text={codeText}
          in={codeClicked}
        >
          <MobileSkill imgName={'code'} img={code}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
            </ul>
          </MobileSkill>
        </MobileCard>

        <MobileCard
          className={classes.skill}
          onClick={commClickHandler}
          text={commText}
          in={commClicked}
        >
          <MobileSkill
            imgName={'communication'}
            img={communication}
          ></MobileSkill>
        </MobileCard>

        <MobileCard
          className={classes.skill}
          onClick={designlickHandler}
          text={designText}
          in={designClicked}
        >
          <MobileSkill imgName={'design'} img={design}></MobileSkill>
        </MobileCard>

        <MobileCard
          className={classes.skill}
          onClick={studyClickHandler}
          text={studyText}
          in={studyClicked}
        >
          <MobileSkill imgName={'study'} img={study}></MobileSkill>
        </MobileCard>

        <MobileCard
          className={classes.skill}
          onClick={fixClickHandler}
          text={fixText}
          in={fixClicked}
        >
          <MobileSkill imgName={'fix'} img={fix}></MobileSkill>
        </MobileCard>
      </div>
    </div>
  );
};

export default MobileSkills;
