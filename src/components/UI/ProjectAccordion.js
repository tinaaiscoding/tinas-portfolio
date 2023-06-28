import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';

import classes from './ProjectAccordion.module.css';

const ProjectAccordion = (props) => {
  return (
    <div id={classes.projectAccordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>{props.projectName}</h2>
        </AccordionSummary>

        <AccordionDetails>
          <div className={classes.summaryText}>{props.projectSummary}</div>
          {props.gallery}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
