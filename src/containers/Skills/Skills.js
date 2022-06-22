// Import packages
import React from 'react'
import { Typography } from '@mui/material';

// Import components
import { Skill } from '../../components/index';

// Import images
import {
  reactLogo,
  jsLogo,
  tsLogo,
  sassLogo,
  htmlLogo,
  css3Logo,
  muiLogo,
  bootstrapLogo,
  agileLogo,
} from '../../static/index';

function Skills() {

  const skillSet = [
    { img: reactLogo, name: 'React JS', value:'react'},
    {img: jsLogo, name: 'JavaScript', value:'javascript'},
    {img: tsLogo, name: 'TypeScript', value:'typescript'},
    {img: sassLogo, name: 'SASS', value:'sass'},
    {img: htmlLogo, name: 'HTML5', value:'html'},
    {img: css3Logo, name: 'CSS3', value:'css'},
    {img: muiLogo, name: 'Material UI', value:'material'},
    {img: bootstrapLogo, name: 'Bootstrap', value:'bootstrap'},
    {img: agileLogo, name: 'Agile', value: 'agile'},
  ];

  // render component
  return (
    <div>
      <Typography 
        variant="h2" 
        sx={{paddingBottom:'2rem'}}>
          Skills
      </Typography>
      <Skill skillSet={skillSet}/>
    </div>
  )
}

export default Skills
