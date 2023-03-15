import React from 'react'

import resume from '../../images/resume.svg'

import Window from '../UI/Window'
import classes from './Resume.module.css'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = () => {
  return (
    <Window className={classes.resume}>
      <img className={classes.resumeSvg} src={resume} alt="" />
    </Window>
  )
}

export default Resume