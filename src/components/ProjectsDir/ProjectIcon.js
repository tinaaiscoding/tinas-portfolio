import React from 'react';

import classes from './ProjectIcon.module.css';

const ProjectIcon = (props) => {
  return (
    <div className={classes.projectIcon} onClick={props.onIconClick}>
      <img className={classes.icon} src={props.imgSrc} alt={props.name} />
      <p className={classes.iconName}>{props.name}</p>
    </div>
  );
};

export default ProjectIcon;
