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
                <Toolbar>
                    <Box sx={{display:{md:'none'}}}>
                        <NavbarDrawer/>
                    </Box>  
                <Typography variant="h6" component={NavLink} to="/" sx={{ flexGrow: 1 }}>
                    ClimaFinder
                </Typography>
                <Box sx={{display:{xs:'none', md:'block'}}}>
                    <Button color="inherit" component={NavLink} to="/ciudades">Ciudades</Button>
                    <Button color="inherit" component={NavLink} to="/clima">Clima</Button>
                </Box>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Navbar;