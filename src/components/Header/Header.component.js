import React, { useState, useEffect } from 'react';
import './Header.styles.scss';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar, 
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Box,
  styled,
  Typography, Avatar, Menu, Divider, ListItemIcon,Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Logout from '@mui/icons-material/LogoutOutlined';

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
const CustomMenuItem = styled(MenuItem)(({theme}) =>({
  fontSize: 14
}))

const DrawerMenuItems = styled(RouterLink)(({theme})=>({
  color: 'black',
  textDecoration: 'none'
}))

const Header = () =>{
  const headersData=[
    {
      id: 1,
      label: "Home",
      link: "/"
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
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  const { mobileView, drawerOpen } = state;
  const [scrolled, setScrolled] = useState(false);
  var lastScrollTop = 0;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
    // const handleDrawerOpen = () =>
    // setState((prevState) => ({ ...prevState, drawerOpen: true }));
    // const handleDrawerClose = () =>
    //   setState((prevState) => ({ ...prevState, drawerOpen: false }));
      
    return (
      <HeaderWrap className={`header ${scrolled ? "scrolled" : ""}`}>
        <HeaderInner justifyContent={'space-between'}>
       <Box sx={{display:'flex'}}>
            <IconButton
              {...{
                edge: 'start',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: toggleDrawer('left', true),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              className='menu-drawer'
            >
              <Typography variant='h6'>
                Menu
              </Typography>
              <div>{getDrawerChoices('left')}</div>
            </Drawer>
            <img src='img/logo-small.png' className='logo-small'/>
        </Box>
        <Box sx={{display:'flex', alignItems: 'center'}}>
            <RouterLink to={`tel:001235678`}><LocalPhoneOutlinedIcon sx={{fill: 'black', verticalAlign:'middle'}}/></RouterLink>
            <Box className='text-right'>
              <Button
                color='black'
                variant="text"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2, minWidth: 'auto' }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleOutlinedIcon/>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.15))',
                    mt: 1.5,
                    minWidth: '120px',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {/* <CustomMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </CustomMenuItem> */}
                <CustomMenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </CustomMenuItem>
             </Menu>
               
                 
            </Box>
        </Box>
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
            <div className='text-right'>
              <Button
              color='black'
                variant="text"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleOutlinedIcon sx={{mr: 1,verticalAlign:'middle'}}/> Aneri Shah
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.15))',
                    mt: 1.5,
                    minWidth: '120px',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {/* <CustomMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </CustomMenuItem> */}
                <CustomMenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </CustomMenuItem>
             </Menu>
               
                 
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
    return headersData.map(({ label, link }) => {
      return (
        <DrawerMenuItems onClick={toggleDrawer('left', false)} to={link} key={label} color='black' sx={{color: 'black', textDecoration: 'none'}}>
          <MenuItem disableRipple>{label}</MenuItem>
        </DrawerMenuItems>
      );
    });
  };
  
  return (
    <>
    <header>
      <AppBar>
          {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
    </>
  );
}
export default Header;
