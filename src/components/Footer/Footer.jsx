import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import { Box, Typography } from "@mui/material";

const Footer=()=>{
    return(    
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:5, p:5, borderTop:2}}>
            <a href="https://www.linkedin.com/in/tomasghigione/"  target='_blank'>
                <LinkedInIcon fontSize="large" color="secondary"/>
            </a>
            <Typography variant="h6" color="primary">Tomas Ghiglione</Typography>
        </Box>   
    )
}

export default Footer;