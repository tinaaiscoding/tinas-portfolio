import React from 'react';
import SkillAccordion from '../../UI/SkillAccordion';

import classes from './MobileSkills.module.css';

import code from '../../../images/icons/code.png';
import communication from '../../../images/icons/communication.png';
import design from '../../../images/icons/design.png';
import study from '../../../images/icons/study.png';
import problemSolve from '../../../images/icons/problemSolve.png';

const MobileSkills = (props) => {
  const skills = [
    {
      imgName: 'Code',
      img: code,
      text: `The websites I create are built with a variety of tech
            including, but not limited to, HTML, CSS, Javascript, React,
            Ruby, Express. The websites incorporate responsive designs and
            can include databases. To create and manage databases, I've
            worked with PostgreSQL, cloud-based Firebase and Supabase.`,
      list: (
        <ul>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>NODE.JS</li>
          <li>RUBY</li>
          <li>RAILS</li>
          <li>EXPRESS</li>
          <li>POSTGRESQL</li>
          <li>FIREBASE</li>
        </ul>
      ),
    },
    {
      imgName: 'Communication',
      img: communication,
      text: `I'm an emphatic listener and genuinely want to understand the
            problem and goals of a project. I can confidently communicate both
            written and verbally. I like to set clear goals with the outcome
            and design process before I start my work and I will regularly
            review my plans.`,
      list: (
        <ul>
          <li>EXCELLECT VERBAL & WRITTEN</li>
          <li>EMPATHETIC</li>
          <li>SET CLEAR GOALS</li>
          <li>ALWAYS UNDERSTAND</li>
          <li>TEAM WORK</li>
        </ul>
      ),
    },
    {
      imgName: 'Design',
      img: design,
      text: `Design process is something I take quite seriously. I break down
            my projects by creating wireframes on Figma, creating
            inspirational mood boards, organising my actions in Trello. Users
            will definitely judge a website by it's look over how usable it
            is, so I want to tackle this issue by incorporating both in my
            websites. To be aesthetically pleasing AND usability.`,
      list: (
        <ul>
          <li>FIGMA</li>
          <li>TRELLO</li>
          <li>WIREFRAMES</li>
          <li>TRENDY DESIGNS</li>
          <li>MOOD BOARDS</li>
          <li>DESIGN REVIEWS</li>
        </ul>
      ),
    },
    {
      imgName: 'Study',
      img: study,
      text: `Constantly on the lookout for better ways to improve my skills
            personally and professionally. Since taking the coding bootcamp
            with General Assembly, I am curious to explore design principles
            and UI/UX. I like challenge myself by stepping out of my comfort
            zone because it's rewarding to see the growth in my abilities.`,
      list: (
        <ul>
          <li>CONSTANLY LEARNING</li>
          <li>TRENDING TECH</li>
          <li>CURIOUS NATURE</li>
        </ul>
      ),
    },
    {
      imgName: 'Problem Solve',
      img: problemSolve,
      text: `I possess strong analytical skills to understand complex
            requirements and break them down into manageable components. I
            like to create unique design concepts, explore unconventional
            approaches, and find creative ways to address user experience or
            visual challenges.`,
      list: (
        <ul>
          <li>LOGICAL REASONING</li>
          <li>PROBLEM SOLVING</li>
          <li>RESEARCH</li>
          <li>CREATIVITY</li>
        </ul>
      ),
    },
  ];

  return (
    <div id={classes.mobileSkills}>
      <div className={props.padding}>
        {skills.map((skill, index) => {
          return (
            <SkillAccordion
              key={index}
              imgName={skill.imgName}
              img={skill.img}
              text={skill.text}
            >
              {skill.list}
            </SkillAccordion>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSkills;
