import React from 'react';
import DesktopIcon from '../UI/DesktopIcon';

import classes from './DesktopIcons.module.css';

// ICONS IMAGES
import wwwFolder from '../../images/icons/www-folder.png';
import gitHubOg from '../../images/icons/github-og.png';
import linkedInOg from '../../images/icons/linkedin-og.png';
import twitterOg from '../../images/icons/twitter-og.png';
import trash from '../../images/icons/trash.png';

const DesktopIcons = () => {
  return (
    <div className={classes.icons}>
      <div className="left-icons">
        <DesktopIcon name="Projects" imgSrc={wwwFolder}></DesktopIcon>

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
          href=""
        >
          <DesktopIcon name="LinkedIn" imgSrc={linkedInOg}></DesktopIcon>
        </a>
      </div>

      <div className="right-DesktopIcons">
        <DesktopIcon name="My Life" imgSrc={trash}></DesktopIcon>
      </div>
    </div>
  );
};

export default DesktopIcons;
