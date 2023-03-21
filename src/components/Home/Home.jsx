import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import './Home.css';


const Home=()=>{
    return(
        <Container sx={{mt:5}}>
            <Typography variant="h1"> Bienvenidos a ClimaFinder</Typography>
        </Container>
        
    )  
}

export default Home;