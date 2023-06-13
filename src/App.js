import './styles/_app.scss';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';
import {Route, Routes, Outlet,Navigate } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.component';
import AboutUs from './pages/AboutUs/AboutUs.component';
import Login from './pages/Login/Login.component';


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
const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const LoginLayout = ({ children }) => {
  return (
    <div>
     <Outlet />
    </div>
  );
};
const App = () => {
  const isLoggedIn = true; 
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={isLoggedIn ? <CommonLayout /> : <Navigate to="/login" />}>
          <Route index element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>
        </Route>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
