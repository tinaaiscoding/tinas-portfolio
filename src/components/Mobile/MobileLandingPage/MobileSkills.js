import React from 'react';

import MobileCard from '../../UI/MobileCard';
import MobileSkill from './MobileSkill';

import classes from './MobileSkills.module.css';

import code from '../../../images/icons/code.png';
import communication from '../../../images/icons/communication.png';
import design from '../../../images/icons/design.png';
import study from '../../../images/icons/study.png';
import teamwork from '../../../images/icons/teamwork.png';

const MobileSkills = (props) => {
  return (
    <div id={classes.mobileSkills}>
      <div className={props.padding}>
        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'code'} img={code}>
            <p>
              The websites I create are built with a variety of tech including, but not limited to, HTML, CSS, Javascript, React, Ruby, Express. The websites incorporate responsive designs and can include databases. To create and manage databases, I've worked with PostgreSQL, cloud-based Firebase and Supabase.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'communication'} img={communication}>
            <p>
            I'm an emphatic listener and genuinely want to understand the problem and goals of a project. I can confidently communicate both written and verbally. I like to set clear goals with the outcome and design process before I start my work and I will regularly review my plans.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'design'} img={design}>
            <p>
            Design process is something I take quite seriously. I break down my projects by creating wireframes on Figma, creating inspirational mood boards, organising my actions in Trello. Users will definitely judge a website by it’s look over how usable it is, so I want to tackle this issue by incorporating both in my websites. To be aesthetically pleasing AND usability.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'study'} img={study}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'teamwork'} img={teamwork}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>
      </div>
    </div>
  );
};

export default MobileSkills;
