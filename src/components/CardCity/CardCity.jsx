import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import './CardCity.css';

const CardCity =({city})=>{
    return(
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="240"
                        image={city.imagen}
                        alt={city.nombre}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="secondary">
                            {city.nombre}
                        </Typography>
                        <Typography variant="body2" color="primary">
                            {city.descripcion}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
    )
};

export default CardCity;
