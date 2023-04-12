import React, { useState, useEffect } from 'react';
import './Footer.styles.scss';
import { Link as RouterLink, } from 'react-router-dom';
import {
  Container,
  AppBar, 
  Toolbar,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Box,
  styled,
  Typography,
} from '@mui/material';

const Footer = () =>{
  return (
    <Container maxWidth={false}>
      <footer>
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