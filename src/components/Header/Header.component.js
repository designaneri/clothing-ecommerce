import React, { useState, useEffect } from 'react';
import './Header.styles.scss';
import { Link as RouterLink, } from 'react-router-dom';
import {
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
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const HeaderWrap = styled(Box)(({ theme }) => ({
  background: 'white',
  position:'static',
  color: '#222',
  padding: '0 30px'
}));
const HeaderInner = styled(Box)(({ theme }) => ({
  padding: '15px 0',
  display: 'flex',
  alignItems:'center'
}));
const Header = () =>{
  const headersData=[
    {
      id: 1,
      label: "Home",
      href: "/Home"
    },
    {
      id: 2,
      label: "Shop",
      link: "/Shop"
    },
    {
      id: 3,
      label: "About Us",
      link: "/AboutUs"
    }
  ]
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });
  const { mobileView, drawerOpen } = state;
  const [scrolled, setScrolled] = useState(false);
  var lastScrollTop = 0;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    const handleScroll = () => {
      // if (window.scrollY > 0) {
      //   setScrolled(true);
      // }
      // else{
      //   setScrolled(false);
      // }
      if (window.scrollY > 160) {
        if(window.scrollY < lastScrollTop) {
          setScrolled(false);
        }
        else if(window.scrollY > lastScrollTop) {
          setScrolled(true);
        }
    }
      lastScrollTop = window.scrollY;
    };
    window.addEventListener('resize', () => setResponsiveness());
    window.addEventListener("scroll", () => handleScroll());
    
    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
      window.removeEventListener("scroll", () => handleScroll());
    };
  }, []);
  const displayMobile = () => {
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <HeaderWrap className={`header ${scrolled ? "scrolled" : ""}`}>
        <HeaderInner justifyContent={'start'}>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          className='menu-drawer'
        >
          <Typography variant='h6'>
            Menu
          </Typography>
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <img src='img/logo-small.png' className='logo-small'/>
      </HeaderInner>
      </HeaderWrap>
    );
  };
  const displayDesktop = () => {
    return (
      <HeaderWrap className={`header-outer ${scrolled ? "scrolled" : ""}`}>
        <HeaderInner justifyContent={'space-between'} className={`header-top ${scrolled ? "scrolled" : ""}`}>
            <div>
              <a href={`tel:00-123-5678`}><LocalPhoneOutlinedIcon sx={{verticalAlign:'middle'}}/> 00-123-5678</a>
            </div>
            <div>
                {/* <Typography variant='h1'>Statement Piece</Typography> */}
                <img src='img/logo.png' className='logo-outer'/>
            </div>
            <div>
                <AccountCircleOutlinedIcon sx={{verticalAlign:'middle'}}/> Aneri Shah 
            </div>
        </HeaderInner>
        <HeaderInner justifyContent={'center'} className={`header-bottom ${scrolled ? "scrolled" : ""}`}>
          {/* <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
            }}
          >
            <MenuIcon />
          </IconButton> */}
          {getDrawerChoices()}
        </HeaderInner>
      </HeaderWrap>
    );
  };
  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link disableRipple
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem disableRipple>{label}</MenuItem>
        </Link>
      );
    });
  };
  
  return (
    <header>
      <AppBar>
          {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
export default Header;
