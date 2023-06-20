import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './SkillAccordian.module.css';

const SkillAccordian = (props) => {
  return (
    <div id={classes.accordian}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.Summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img src={props.img} alt={props.imgName} />
          {/* <h3>{props.heading}</h3> */}
          <div className={classes.summary}>{props.children}</div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <p>{props.text}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SkillAccordian;
