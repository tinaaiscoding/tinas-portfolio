import React from 'react';
import MobileCard from '../../UI/MobileCard.js';
import MobileNavMenu from '../MobileNavMenu';

import classes from './AboutMe.module.css';

const AboutMe = (props) => {
  return (
    <div>
      <MobileNavMenu />
      <div id={classes.aboutMePage} className={props.padding}>
        <MobileCard>
          <h3>ABOUT ME</h3>
          <p>
            Having built my professional skills in customer experience roles and
            the hospitality industry over the past 10 years, I decided it was
            time for my next adventure. That's how I discovered my love for
            coding. It has naturally become something I look forward to every
            day. I enjoy the feeling of accomplishment every time I get a piece
            of code to work, and the chance to apply my creative thinking
            skills. This led me to enrol in a software engineering bootcamp at
            General Assembly.
          </p>
          <br />
          <p>
            As a software engineer, I aspire to create beautiful and fun
            designs. I want to create meaningful work that makes people smile
            and have a useful impact on their business. To have a proud moment
            to say, “Yea, I made all that!”.
          </p>
          <br />
          <p>
            I love exploring new things whether that'd be food, places to
            travel, hobbies, skills, ways of thinking, or ways of working. I
            have really enjoyed my experience living and working in the UK and
            I'm open to any opportunities for work in Europe. I take lots of
            inspiration from others and hope to work with a supportive and open
            team.
          </p>
        </MobileCard>
      </div>
    </div>
  );
};

export default AboutMe;
