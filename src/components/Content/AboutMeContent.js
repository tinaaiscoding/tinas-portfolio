import React from 'react';

import classes from './AboutMeContent.module.css'

const AboutMeContent = (props) => {
  return (
    <div id={classes.aboutMeContent}>
      <h3 id={props.headingId}>ABOUT ME</h3>
      <p>
        Having developed my professional skills in customer experience roles and
        the hospitality industry for the past decade, I've reached a point where
        I'm ready for my next big adventure.
      </p>

      <p>
        That's when I stumbled upon my passion for coding. It has naturally
        become something I look forward to every day. I relish the feeling of
        accomplishment when I crack a piece of code and get to flex my creative
        thinking skills. This newfound passion led me to enrol in a software
        engineering bootcamp at General Assembly.
      </p>

      <p>
        I thrive on creating delightful designs, solving complex problems, and
        making a positive impact. From crafting fun and beautiful user
        experiences to tackling intricate challenges. I find immense fulfilment
        in using my skills to bring joy and drive meaningful change.
      </p>

      <p>
        I'm a natural explorer, always eager to dive into new experiences—
        whether it's exploring different cuisines, discovering uncharted travel
        destinations, pursuing diverse hobbies, or adopting innovative work
        methodologies. I've had the pleasure of living and working in the UK,
        and I'm open to exciting work opportunities across Australia and Europe.
        Drawing inspiration from others, I'm keen to collaborate with a
        supportive and open-minded team.
      </p>
    </div>
  );
};

export default AboutMeContent;
