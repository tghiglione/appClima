import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";
import './Weather.css';


const api_url="http://api.weatherapi.com/v1/current.json?key=8c22e78c155b4de3a35210218230604 &q=";

const Weather=()=>{

    const [city,setCity]=useState("");
    const [loading,setLoading]=useState(false);
    const [error, setError]=useState({
        error:false,
        message:"",
    });
    const [weather,setWeather]=useState({
        city:"",
        country:"",
        temp:"",
        condition:"",
    });

    const onSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError({
            error:false,
            message:"",
        });
        try{
            if(!city.trim()) throw {message: "el campo es obligatorio"};
            const resp = await fetch(`${api_url}${city}`);
            const data = await resp.json();
            setWeather({
                city:data.location.name,
                country:data.location.country,
                temp:data.current.temp_c,
                condition:data.current.condition.code,
                icon:data.current.condition.icon,
                condition_text:data.current.condition.text
            });
        }
        catch(error){
            console.log("hubo un error",error);
            setError({
                error:true,
                message:error.message,
            });
        }finally{
            setLoading(false);
        }
    }
    return(
        <Container maxWidth="xs" sx={{mt:2}}>
            <Typography variant="h2" component="h1" sx={{textAlign:"center"}}>App Clima</Typography>
            <Box component="form" autoComplete="off" onSubmit={onSubmit}>
                <TextField id="city" label="Ciudad" variant="outlined" required fullWidth sx={{mt:3}}
                value={city} onChange={(e)=>setCity(e.target.value)}
                error={error.error} helperText={error.message}>Ciudad</TextField>
                <LoadingButton type="submit" variant="contained" loading={loading} loadingIndicator="Cargando..." fullWidth sx={{mt:2}}>Buscar</LoadingButton>
            </Box>

            {
                weather.city && (
                    <Box sx={{mt:3, display:"grid", gap:2, textAlign:"center"}}>
                        <Typography variant="h4">
                            {weather.city}, {weather.country}
                        </Typography>
                        <Typography variant="h5">
                            Temperatura actual: {weather.temp}°C 
                        </Typography>
                        <Box component="img" alt={weather.condition_text} src={weather.icon} sx={{margin:"auto"}}/>
                    </Box>
                )
            }
        </Container>
        
    )  
}

export default Weather;