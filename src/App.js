import './styles/_global.scss';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import HeartIcon from '@mui/icons-material/FavoriteBorder';
import {
  IconButton,
  Grid,
  Button,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useState, useEffect } from 'react';

let theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    black: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    subtitle1: {
      fontSize: 10,
      fontWeight: 500,
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
      '@media (min-width:600px)': {
        fontSize: 11,
      },
    },
    subtitle2: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 600,
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
      '@media (min-width:600px)': {
        fontSize: 20,
      },  
    },
    body1: {
      fontSize: 12,
    },
    h1: {
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
      letterSpacing: '-1.2px',
      fontSize: 20,
      fontWeight: 600,
      '@media (min-width:600px)': {
        fontSize: 24,
      },  
    },
    h4: {
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
      letterSpacing: '-1.2px',
    },
    h6: {
      fontFamily: ['Libre Baskerville', 'serif'].join(','),
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  const essentialItems = [
    {
      id: 1,
      title: 'Anna',
      img: 'img1.webp',
      description: 'Oxford Woolen Coat - Brown',
      price: '1,190.00',
    },
    {
      id: 2,
      title: 'BEXLEY',
      img: 'img2.webp',
      description: 'Bexley Wool Rich Coat',
      price: '2,190.00',
    },
    {
      id: 3,
      title: 'Mount Blanc',
      img: 'img3.webp',
      description: 'Roger Herringbone Overcoat',
      price: '2,990.00',
    },
    {
      id: 4,
      title: 'Arrow',
      img: 'img4.webp',
      description: 'Blake Wool Rich Blazer',
      price: '1,879.00',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className='main-container'>
        <Splide hasTrack={false} aria-label='My Favorite Images'>
          <SplideTrack>
            <SplideSlide>
              <img src='img/bannerImage2.jpg' alt='Image 1' />
              <div className='banner-box'>
                <div className='bannerinner-box'>
                  <Typography variant='subtitle1' sx={{ mb: 2 }}>
                    New Collection
                  </Typography>
                  <Typography variant='subtitle2' sx={{ mb: 3 }}>
                    Summer-Mellon Dress
                  </Typography>
                  <Typography variant='body1'>
                    Upgrade your wardrobe with a variation of styles and fits that
                    are both feminine and relaxed.
                  </Typography>
                  <div>
                    <Button
                      color='black'
                      disableElevation
                      size='large'
                      sx={{ mt: 3 }}
                      variant='contained'
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <img src='img/bannerImage3.jpg' alt='Image 2' />
              <div className='banner-box'>
                <div className='bannerinner-box'>
                  <Typography variant='subtitle1' sx={{ mb: 2 }}>
                    New Collection
                  </Typography>
                  <Typography variant='subtitle2' sx={{ mb: 3 }}>
                    Summer-Mellon Dress
                  </Typography>
                  <Typography variant='body1'>
                    Upgrade your wardrobe with a variation of styles and fits that
                    are both feminine and relaxed.
                  </Typography>
                  <div>
                    <Button
                      color='black'
                      disableElevation
                      size='large'
                      sx={{ mt: 3 }}
                      variant='contained'
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className='splide__progress'>
            <div className='splide__progress__bar' />
          </div>
        </Splide>
        <Container maxWidth={false}>
          <Typography variant='h4' sx={{ mt: 3 }} align='center'>
            Discover the Essentials
          </Typography>
          <section>
            <div className='card-container'>
              <Grid container spacing={3}>
                {essentialItems.map(({ id, title, img, description, price }) => (
                  <Grid item lg={3} key={id} flexGrow={1}>
                    <div className='feature-card card'>
                      <div className='card-img-wrapper'>
                        <img src={'img/' + img} />
                        <Button
                          disableElevation
                          color='black'
                          fullWidth
                          variant='contained'
                          className='add-to-cart-btn'
                        >
                          Add to Cart
                        </Button>
                      </div>
                      <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='space-between'
                      >
                        <Typography
                          variant='body1'
                          sx={{ fontWeight: 700, textTransform: 'uppercase' }}
                        >
                          {title}
                        </Typography>
                        <IconButton aria-label='delete' size='small'>
                          <HeartIcon fontSize='inherit' />
                        </IconButton>
                      </Box>
                      <Typography variant='body1'>{description}</Typography>
                      <Typography
                        variant='body1'
                        sx={{ fontWeight: 700, textTransform: 'uppercase' }}
                      >
                        Rs. {price}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </section>
          <section>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <div className='offset-images'>
                  <img src='img/img1.webp' className='image1' />
                  <img src='img/img2.webp' className='image2' />
                </div>
              </Grid>
              <Grid item sm={6} alignSelf='center'>
                <Typography variant='h4' sx={{ mb: 3 }}>
                  Follow us on Instagram
                </Typography>
                <Typography variant='p' sx={{ fontSize: 18 }}>
                  Better outfit for every occasion and even better accessory{' '}
                  <br /> to match it all.
                </Typography>
                <div>
                  <Button
                    color='black'
                    disableElevation
                    size='large'
                    sx={{ mt: 3 }}
                    variant='contained'
                  >
                    @BrandName
                  </Button>
                </div>
              </Grid>
            </Grid>
          </section>
        </Container>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
