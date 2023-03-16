import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={`${classes.button74} ${props.className}`} type={props.type}>{props.buttonName}</button>
  )
}

export default Button