import React from 'react';
import DesktopIcon from './DesktopIcon';

import classes from './DesktopIcons.module.css';

// ICONS IMAGES
import wwwFolder from '../../images/icons/www-folder.png';
import gitHubOg from '../../images/icons/github-og.png';
import linkedInOg from '../../images/icons/linkedin-og.png';
import twitterOg from '../../images/icons/twitter-og.png';
import trash from '../../images/icons/trash.png';
import credits2 from '../../images/icons/credits2.png';

const DesktopIcons = (props) => {
  const openProjectDirHandler = () => {
    props.setProjectsDirVisible(true);
    props.setProjectsDirActive(true);
    props.setCreditsActive(false);
    props.setContactMeActive(false);
    props.setAboutMeActive(false);
  };

  const openCreditsHandler = () => {
    props.setCreditsVisible(true);
    props.setCreditsActive(true);
    props.setProjectsDirActive(false);
    props.setContactMeActive(false);
    props.setAboutMeActive(false);
  };

  return (
    <div>
      <div className={classes.leftDesktopIcons}>
        <DesktopIcon
          name="Projects"
          imgSrc={wwwFolder}
          dblClickHandler={openProjectDirHandler}
        ></DesktopIcon>

        <a
          onClick={(event) => event.preventDefault()}
          onDoubleClick={() => {
            window.location = 'https://twitter.com/tinaiscoding';
          }}
          href="https://twitter.com/tinaiscoding"
        >
          <DesktopIcon name="Twitter" imgSrc={twitterOg}></DesktopIcon>
        </a>

        <a
          onClick={(event) => event.preventDefault()}
          onDoubleClick={() => {
            window.location = 'https://github.com/tinaaiscoding';
          }}
          href="https://github.com/tinaaiscoding"
        >
          <DesktopIcon name="GitHub" imgSrc={gitHubOg}></DesktopIcon>
        </a>

        <a
          onClick={(event) => event.preventDefault()}
          onDoubleClick={() => {
            window.location = 'https://www.linkedin.com/in/tinanhivo/';
          }}
          href="https://www.linkedin.com/in/tinanhivo/"
        >
          <DesktopIcon name="LinkedIn" imgSrc={linkedInOg}></DesktopIcon>
        </a>
      </div>

      <div className={classes.rightDesktopIcons}>
        <DesktopIcon name="Trash Can" imgSrc={trash}></DesktopIcon>
        <DesktopIcon
          name="Credits"
          imgSrc={credits2}
          dblClickHandler={openCreditsHandler}
        ></DesktopIcon>
      </div>
    </div>
  );
};

export default DesktopIcons;
