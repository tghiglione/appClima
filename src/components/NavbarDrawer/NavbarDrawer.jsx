import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import './NavbarDrawer.css';
import { NavLink } from 'react-router-dom';

export default function NavbarDrawer() {
    
    const [state, setState] = useState(false);
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {
            <ListItem key={"Home"} disablePadding>
                <ListItemButton component={NavLink} to='/'>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
                </ListItemButton>
            </ListItem>
          }
        </List>
        <Divider />
        <List>
          {['Ciudades', 'Clima'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={NavLink} to={index % 2 === 0 ? "/ciudades" : "/clima"}>
                <ListItemIcon>
                  {index % 2 === 0 ? <LocationCityIcon /> : <ThermostatIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div>
        {
          <React.Fragment key="left">
            <Button onClick={toggleDrawer("left", true)}><MenuIcon color='secondary'/></Button>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>
        }
      </div>
    );
  }