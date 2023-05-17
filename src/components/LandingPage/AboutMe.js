import React from 'react';
import Window from '../UI/Window';
import classes from './AboutMe.module.css';

const AboutMe = (props) => {
  return (
    <Window
      onCloseWindow={props.onCloseWindow}
      onWindowClick={props.onWindowClick}
      style={props.style}
    >
      <div id={classes.aboutMe}>
        <div className={classes.aboutMeHeader}>
          <div className={classes.typewriter}>
            <h2>Hi, I'm Tina!</h2>
          </div>
        </div>

        <a href="#about-me-section">
          <span
            className={`material-symbols-outlined ${classes.bounceArrow} ${classes.bounce}`}
          >
            expand_more
          </span>
        </a>

        <h3 id="about-me-section">ABOUT ME</h3>

        <div className={classes.aboutMeContent}>
          <p>
            Having built my professional skills in customer experience roles and
            the hospitality industry over the past 10 years, I decided it was
            time for my next adventure.
          </p>

          <p>
            That's how I discovered my love for coding. It has naturally become
            something I look forward to every day. I enjoy the feeling of
            accomplishment every time I get a piece of code to work, and the
            chance to apply my creative thinking skills. This led me to enrol in
            a software engineering bootcamp at General Assembly.
          </p>

          <p>
            As a software engineer, I aspire to create beautiful and fun
            designs. I want to create meaningful work that makes people smile
            and have a useful impact on their business. To have a proud moment
            to say, “Yea, I made all that!”
          </p>

          <p>
            I love exploring new things whether that'd be food, places to
            travel, hobbies, skills, ways of thinking, or ways of working. I
            have really enjoyed my experience living and working in the UK and
            I'm open to any opportunities for work in Europe. I take lots of
            inspiration from others and hope to work with a supportive and open
            team.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default AboutMe;
