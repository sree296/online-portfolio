import * as React from 'react';
import Typography from '@mui/material/Typography';
import ctsLogo from '../../static/img/org/cts.jfif';
import capLogo from '../../static/img/org/capgemini.jfif';
import vlLogo from '../../static/img/org/vl.jfif';
import cdkLogo from '../../static/img/org/cdk.jfif';

import './Experience.scss';

function Experience() {
  return (
    <div className="container">
    <div className="step active">
      <div className="v-stepper">
        <div className="circle">
          <img src={cdkLogo} alt="cdk_logo"/>
        </div>
        <div className="line"></div>
      </div>

      <div className="content">
        <Typography>Aug 2016 - Present</Typography>
        <Typography variant="h6">Lead Software Engineer</Typography>
        <p>CDK Global, Hyderabad, India</p>
      </div>
  </div>
  
  <div className="step completed">
    <div className="v-stepper">
      <div className="circle">
        <img src={vlLogo} alt="value_labs_logo"/>
      </div>
      <div className="line"></div>
    </div>

    <div className="content">
        <Typography>Sep 2015 - Aug 2016</Typography>
        <Typography variant="h6">Senior Software Engineer</Typography>
        <p>Value Labs, Hyderabad, India</p>
      </div>
  </div>
  
  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">
          <img src={capLogo} alt="capgemini_logo"/>
        </div>
        <div className="line"></div>
      </div>

      <div className="content">
        <Typography>Jan 2015 - Aug 2015</Typography>
        <Typography variant="h6">Consultant Software Engineer</Typography>
        <p>Capgemini, Hyderabad, India</p>
      </div>
  </div>
  
  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">
          <img src={ctsLogo} alt="cts_logo"/>
        </div>
        <div className="line"></div>
      </div>

      <div className="content">
        <Typography>Nov 2010 - Dec 2014</Typography>
        <Typography variant="h6">Associate Software Engineer</Typography>
        <p>Cognizant, Hyderabad, India</p>
      </div>
  </div>
  
</div>

  )
}

export default Experience
