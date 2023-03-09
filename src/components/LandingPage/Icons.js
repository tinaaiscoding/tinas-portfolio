import React from 'react';
import Icon from '../UI/Icon';

import classes from './Icons.module.css';

// ICONS IMAGES
import wwwFolder from '../../images/icons/www-folder.png';
import gitHubOg from '../../images/icons/github-og.png';
import githubPurple from '../../images/icons/github-purple.png';
import linkedInOg from '../../images/icons/linkedin-og.png';
import linkedInPurple from '../../images/icons/linkedin-purple.png';
import twitterOg from '../../images/icons/twitter-og.png';
import twitterPurple from '../../images/icons/twitter-purple.png';

const Icons = () => {
  return (
    <div className={classes.icons}>
      <Icon name="Projects" imgSrc={wwwFolder}></Icon>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://twitter.com/tinaiscoding';
        }}
        href="https://twitter.com/tinaiscoding"
      >
        <Icon name="Twitter" imgSrc={twitterOg}></Icon>
      </a>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://github.com/tinaaiscoding';
        }}
        href="https://github.com/tinaaiscoding"
      >
        <Icon name="GitHub" imgSrc={gitHubOg}></Icon>
      </a>

      <a
        onClick={(event) => event.preventDefault()}
        onDoubleClick={() => {
          window.location = 'https://www.linkedin.com/in/tinanhivo/';
        }}
        href=""
      >
        <Icon name="LinkedIn" imgSrc={linkedInOg}></Icon>
      </a>
    </div>
  );
};

export default Icons;
