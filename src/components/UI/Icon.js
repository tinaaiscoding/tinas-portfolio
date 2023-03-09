import React from 'react'

import classes from './Icon.module.css'

const Icon = (props) => {
  return (
    <div className={classes.iconWrapper}>
      <img className={classes.icon} src={props.imgSrc} alt='Folder'/>
      <p className={classes.iconName}>{props.name}</p>
    </div>
  )
}

export default Icon
