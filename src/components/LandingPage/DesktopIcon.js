import React from 'react'

import classes from './DesktopIcon.module.css'

const DesktopIcon = (props) => {
  return (
    <div className={classes.desktopIcon}>
      <img className={classes.icon} src={props.imgSrc} alt={props.name}/>
      <p className={classes.iconName}>{props.name}</p>
    </div>
  )
}

export default DesktopIcon
