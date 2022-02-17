import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './nav.css';


function Navbar() {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="Nav">
          <Toolbar className="Toolbar">
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">TV Shows</Button>
            <Button color="inherit">People</Button>
            <Button color="inherit">More</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
  export default Navbar;