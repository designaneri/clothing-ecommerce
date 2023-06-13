import React from 'react';
import Footer from '../../components/Footer/Footer.component';
import {
  Typography,
  Box
} from '@mui/material';

const Shop = () => {
  return (
    <>
     <div className='main-container'>
        <Box sx={{p:5, m:5}} textAlign={'center'}>
          <Typography variant="p">
            Hello this is shopping page
          </Typography>
        </Box>
     </div>
    </>
  )
}
export default Shop;
