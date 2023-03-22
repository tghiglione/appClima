import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import './Home.css';


const Home=()=>{
    return(
        <Container sx={{mt:5}}>
            <Typography variant="h2" component="h1" sx={{textAlign:"center"}}> Bienvenidos a CityMapper</Typography>
            <Typography sx={{textAlign:"center", mt:7}}>¡Bienvenidos a la app de turismo numero 1! En la sección "clima" podrás consultar el clima
            de cualquier ciudad que desees. En el apartado de "ciudades" podrás inspeccionar las principales ciudades de América con sus reseñas. Adéntrate en el mundo del turismo</Typography>
        </Container>
        
    )  
}

export default Home;