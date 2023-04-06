import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import './Navbar.css';
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";



const Navbar=()=>{
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: {md:'space-between'}}}>
                    <Box sx={{display:{md:'none'}}}>
                        <NavbarDrawer/>
                    </Box>  
                <Typography className="logo" variant="h5" color="inherit" component={NavLink} to="/appClima/" >
                    CityMapper
                </Typography>
                <Box sx={{display:{xs:'none', md:'block'},mr:{md:10}}}>
                    <Button sx={{mr:5}} color="inherit" component={NavLink} to="/ciudades">Ciudades</Button>
                    <Button color="inherit" component={NavLink} to="/clima">Clima</Button>
                </Box>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Navbar;