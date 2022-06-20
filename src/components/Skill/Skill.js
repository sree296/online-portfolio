import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Skill.scss';

function Skill(props) {
  const {skillSet} = props;
  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth:'1200px', margin:'0 auto' }}>
        <Grid container spacing={2}>
            {
              skillSet.map( (skill) => (
                <Grid item xs={12} md={6} lg={4}>
                  <Card className="skillCard">
                      <CardContent sx={{padding:'16px'}} className="skillWrapper">
                        <img src={skill.img} alt="skills_logo" />
                        <Typography gutterBottom variant="h4" component="div">
                          {skill.name}
                        </Typography>
                      </CardContent>
                  </Card>
                </Grid>
              ))
            }
        </Grid>
      </Box>
    </>
  )
}

export default Skill
