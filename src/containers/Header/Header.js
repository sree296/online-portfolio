// Import packages
import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Import styles
import './Header.scss';

// Import strings
import {HeaderMessages as Messages} from './Header.constants';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Typography component="div">
            <h6 className="tracking-wider">
              {Messages.NAME}
            </h6>
          </Typography>
          <List className="flex justify-between">
              <ListItem> <Link to="/home">{Messages.HOME}</Link></ListItem>
              <ListItem> <Link to="/skills">{Messages.SKILLS}</Link></ListItem>
              <ListItem> <Link to="/projects">{Messages.PROJECTS}</Link></ListItem>
              <ListItem> <Link to="/experience">{Messages.EXPERIENCE}</Link></ListItem>
              <ListItem> <Link to="/contact">{Messages.CONTACT}</Link></ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;