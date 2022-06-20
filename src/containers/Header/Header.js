// Import Packages
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

// Import Styles
import './Header.scss';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Typography component="div">
            <h6 className="tracking-wider">
              GATTU
            </h6>
          </Typography>
          <List className="flex justify-between">
              <ListItem> <Link to="/home">Home</Link></ListItem>
              <ListItem> <Link to="/skills">Skills</Link></ListItem>
              <ListItem> <Link to="/projects">Projects</Link></ListItem>
              <ListItem> <Link to="/experience">Experience</Link></ListItem>
              <ListItem> <Link to="/contact">Contact</Link></ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;