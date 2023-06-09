import React from 'react'

import classes from './MobileSkill.module.css'

const MobileSkill = (props) => {
  return (
    <div id={classes.mobileSkill}>
      <img className={classes.skillImg} src={props.img} alt={props.imgName} />
      <p className={classes.skillText}>{props.children}</p>
    </div>
  )
}

export default MobileSkill
