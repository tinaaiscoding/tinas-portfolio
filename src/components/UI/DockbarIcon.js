import React from 'react'

import classes from './DockbarIcon.module.css'

const DockbarIcon = (props) => {
  return (
    <div className={classes.dockbarIcon}>
      <img className={classes.icon} src={props.imgSrc} alt='Folder'/>
      <p className={classes.iconName}>{props.name}</p>
    </div>
  )
}

export default DockbarIcon
