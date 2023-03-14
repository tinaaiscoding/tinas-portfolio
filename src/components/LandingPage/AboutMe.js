import React from 'react';
import Window from '../UI/Window';
import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <Window className={classes.aboutMe}>
      <div className={classes.aboutMeHeader}>
        <div className={classes.typewriter}>
          <h2>Hi, I'm Tina!</h2>
        </div>
      </div>

      <span
        className={`material-symbols-outlined ${classes.bounceArrow} ${classes.bounce}`}
      >
        expand_more
      </span>

      <section className={classes.aboutMeContent}>
        <h3>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          pulvinar etiam non quam lacus suspendisse faucibus. Non quam lacus
          suspendisse faucibus interdum posuere lorem. Auctor urna nunc id
          cursus metus aliquam eleifend. Nunc consequat interdum varius sit amet
          mattis vulputate enim. Egestas purus viverra accumsan in nisl nisi
          scelerisque eu. Arcu non sodales neque sodales ut etiam sit. Sit amet
          mauris commodo quis imperdiet massa tincidunt. Phasellus egestas
          tellus rutrum tellus pellentesque.
        </p>
        <br />
        <p>
          Cursus in hac habitasse platea dictumst. Quis hendrerit dolor magna
          eget est lorem ipsum. Id leo in vitae turpis massa sed elementum
          tempus egestas. Sed libero enim sed faucibus turpis in eu mi. Mauris
          cursus mattis molestie a iaculis. Amet cursus sit amet dictum sit amet
          justo. Venenatis urna cursus eget nunc scelerisque viverra mauris in
          aliquam. Egestas purus viverra accumsan in nisl nisi scelerisque.
          Maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc
          scelerisque viverra mauris.
        </p>
      </section>
    </Window>
  );
};

export default AboutMe;
