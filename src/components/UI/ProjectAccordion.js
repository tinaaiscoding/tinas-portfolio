import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';

import classes from './ProjectAccordion.module.css';

const ProjectAccordion = (props) => {
  return (
    <div id={classes.projectAccordion}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.summaryContent}>{props.projectName}</div>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
          <p>{props.projectSummary}</p>
          {/* TODO: ADD GALLERY */}
          {props.gallery}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
