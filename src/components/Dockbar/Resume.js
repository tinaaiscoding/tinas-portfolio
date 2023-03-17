import React from 'react'

// import resume from '../../images/resume.svg'
import {ReactComponent as ResumeSvg} from '../../images/resume.svg'

import Window from '../UI/Window'
import classes from './Resume.module.css'

const Resume = (props) => {
  return (
    <Window className={classes.resume} onCloseWindow={props.onCloseWindow}>
      {/* <img className={classes.resumeSvg} src={resume} alt="" /> */}
      <ResumeSvg></ResumeSvg>
    </Window>
  )
}

export default Resume