import React from 'react';

import MobileCard from '../../UI/MobileCard';
import MobileSkill from './MobileSkill';

import classes from './MobileSkills.module.css';

import bread from '../../../images/bread-test.png';

const MobileSkills = (props) => {
  return (
    <div id={classes.mobileSkills}>
      <div className={props.padding}>
        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'bread'} img={bread}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'bread'} img={bread}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'bread'} img={bread}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'bread'} img={bread}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sodales ut etiam sit amet nisl.
            </p>
          </MobileSkill>
        </MobileCard>

        <MobileCard className={classes.skill}>
          <MobileSkill imgName={'bread'} img={bread}>
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
