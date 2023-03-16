import React from 'react'

import resume from '../../images/resume.svg'

import Window from '../UI/Window'
import classes from './Resume.module.css'

const Resume = (props) => {
  return (
    <Window className={classes.resume} onCloseWindow={props.onCloseWindow}>
      <img className={classes.resumeSvg} src={resume} alt="" />
    </Window>
  )
}

export default Resume