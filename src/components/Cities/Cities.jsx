import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardCity from "../CardCity/CardCity";
import './Cities.css';

const Cities=()=>{
    const ciudades=[
        {
            nombre:"Buenos aires",
            descripcion:"La Ciudad de Buenos Aires o Ciudad Autónoma de Buenos Aires ―también llamada Capital Federal por ser sede del gobierno federal― es la capital de la República Argentina. Está situada en la región centro-este del país, sobre la orilla occidental del Río de la Plata, en plena llanura pampeana.",
            imagen:"https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
        },
        {
            nombre:"Paris",
            descripcion:"París, una de las más bonitas ciudades del mundo, seduce en primer lugar por su excepcional patrimonio arquitectónico y cultural. Un patrimonio vivo, que no deja de modernizarse y enriquecerse. París es también la capital de la gastronomía, de la moda y de las compras; una ciudad donde siempre ocurre algo",
            imagen:"https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        },
        {
            nombre:"Londres",
            descripcion:"Londres, la capital del Reino Unido y de Inglaterra, es la ciudad más grande de Gran Bretaña y de Europa. Fue fundada por los romanos hace casi dos mil años, sobre ambas orillas del río Támesis. Entre 1831 y 1925 fue la ciudad más grande del mundo. Actualmente es gobernada por un alcalde y una asamblea local.",
            imagen:"https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        },
        {
            nombre:"Madrid",
            descripcion:"Madrid es una ciudad cosmopolita, fiel a sus costumbres, cultura y a su arte, pero a su vez es un lugar moderno, alberga centros culturales, económicos y políticos de primer orden en Europa. Su oferta cultural y de ocio abarca desde la entrada gratuita a museos hasta los ambientes VIP más exclusivos.",
            imagen:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/D5C3IGPISRFT5LG4TBWI6AG7BI.jpg",
        },
        {
            nombre:"Roma",
            descripcion:"Roma es una ciudad italiana, capital de la región del Lacio y de Italia. Con una población de 2 857 321 habitantes,​ es el municipio más poblado de Italia y la tercera ciudad más poblada de la Unión Europea.​ Por antonomasia, se la conoce desde la Antigüedad como la Urbe",
            imagen:"https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
        },
        {
            nombre:"Rio de Janeiro",
            descripcion:"Es uno de los principales centros económicos, de recursos culturales y financieros de Brasil. Es conocida internacionalmente por sus iconos culturales y paisajes, como el Pan de Azúcar, la estatua del Cristo Redentor, las playas de Copacabana e Ipanema, el Estadio de Maracaná y la celebración del Carnaval.",
            imagen:"https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73",
        },

    ];
    return(
        <Container>
            <Typography variant="h4" color="primary" sx={{textAlign:"center", p:5}}>Principales ciudades del mundo</Typography>
            <Grid container spacing={2} sx={{justifyItems:"center"}}>
                {
                    ciudades.map(ciudad=>{
                        return(
                            <CardCity city={ciudad}/>
                        )
                    })
                }
            </Grid>
        </Container>
        
    )  
}

export default Cities;