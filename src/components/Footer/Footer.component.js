import React, { useState, useEffect } from 'react';
import './Footer.styles.scss';
import { Link as RouterLink, } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const Footer = () =>{
  return (
    <Container maxWidth={false}>
      <footer>
          <Box justifyContent='center' display='flex' sx={{mb: 3}}>
              <img src='img/logo.png' className='logo-outer'/>
          </Box>
          <ul>
            <li>
              <Typography variant='p'>Munich</Typography>
            </li>
            <li>
              <Typography variant='p'>New York</Typography>
            </li>
            <li>
              <Typography variant='p'>London</Typography>
            </li>
          </ul>
      </footer>
    </Container>
  )

}
export default Footer;