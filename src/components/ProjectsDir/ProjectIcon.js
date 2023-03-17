import React from 'react';

import classes from './ProjectIcon.module.css';

const ProjectIcon = (props) => {
  return (
    <div className={classes.projectIcon} onDoubleClick={''}>
      <img className={classes.icon} src={props.imgSrc} alt={props.name} />
      <p className={classes.iconName}>{props.name}</p>
    </div>
  );
};

export default ProjectIcon;
