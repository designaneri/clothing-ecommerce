import React from 'react';
import {
  Typography,
  Box
} from '@mui/material';

const AboutUs = () => {
  return (
    <>
     <div className='main-container'>
      <Box sx={{p:5, m:5}} textAlign={'center'}>
        <Typography variant="p">
          Hello this is About us page
        </Typography>
      </Box>
     </div>
    </>
  )
}
export default AboutUs;
