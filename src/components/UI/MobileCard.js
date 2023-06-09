import React from 'react'

import classes from './MobileCard.module.css'

const MobileCard = (props) => {
  return (
    <div id={`${classes.mobileCard}`} className={`${props.className}`}>
      {props.children}
    </div>
  )
}

export default MobileCard;