import React from 'react'
import { CSSTransition } from 'react-transition-group';

import classes from './MobileCard.module.css'

const MobileCard = (props) => {
  return (
    <div id={`${classes.mobileCard}`} className={`${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default MobileCard;