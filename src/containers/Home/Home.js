import React from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {profileImg} from '../../static/index'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import './Home.scss';

function Home() {
    return (
        <>
            <Avatar
                alt="Profile_Image"
                src={profileImg}
                sx={{ width: 200, height: 200 }}
            />
            <Typography>Hey! I Am,</Typography>
            <Typography variant="h2">Sreeni Gattu</Typography>
            <Typography variant="h5">A Software Developer with a <br/> Passion for transforming the User Interfaces</Typography>
            <Typography className="socialIcons">
                <Link target="_blank" underline="none" href="https://www.linkedin.com/in/sreenivasulu-gattu-12750429/">
                    <LinkedInIcon/> 
                </Link>
                <Link target="_blank" underline="none" href="mailto:nivas296@gmail.com">
                    <MailOutlineIcon />
                </Link>
                <Link target="_blank" underline="none" href="https://github.com/sree296">
                    <GitHubIcon />
                </Link>
            </Typography>
        </>
    )
}

export default Home
