// Import packages
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// Import icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

// Import files
import {profileImg} from '../../static/index'
import './Home.scss';

// Import constants or messages
import {HomeMessages as Messages} from './Home.constants';

function Home() {

    const socialIconProps = {
        target :"_blank",
        underline: "none" 
    };

    //render Home Component
    return (
        <>
            <Avatar
                alt="Profile_Image"
                src={profileImg}
                sx={{ width: 200, height: 200 }}
            />
            <Typography>{Messages.HEY_IM}</Typography>
            <Typography variant="h2">{Messages.NAME}</Typography>
            <Typography variant="h5">{Messages.SDE} <br/> {Messages.PASSION}</Typography>
            <Typography className="socialIcons">
                <Link 
                    {...socialIconProps}
                    href="https://www.linkedin.com/in/sreenivasulu-gattu-12750429/">
                    <LinkedInIcon/> 
                </Link>
                <Link 
                    {...socialIconProps}
                    href="mailto:nivas296@gmail.com">
                    <MailOutlineIcon />
                </Link>
                <Link 
                    {...socialIconProps}
                    href="https://github.com/sree296">
                    <GitHubIcon />
                </Link>
            </Typography>
        </>
    )
}

export default Home;