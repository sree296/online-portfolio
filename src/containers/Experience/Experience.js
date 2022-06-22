// Import packages
import * as React from 'react';
import Typography from '@mui/material/Typography';

// Import styles
import './Experience.scss';

// Import data
import {ExperienceData} from './Experience.data';

function Experience() {
  const expData = ExperienceData;
  return (
      <div className="container">
        {
          expData.map((org) => (
            <Typography component="div" className="step completed">
              <Typography component="div" className="v-stepper">
                <Typography component="div" className="circle">
                  <img src={org.logo} alt="value_labs_logo"/>
                </Typography>
                <Typography component="div" className="line"></Typography>
              </Typography>
              <Typography component="div" className="content">
                  <Typography>{org.timePresent}</Typography>
                  <Typography variant="h6">{org.designation}</Typography>
                  <Typography>{org.orgNameAndLocation}</Typography>
                </Typography>
            </Typography>
          ))
        }
    </div>
  )
}

export default Experience
