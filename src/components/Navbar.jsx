import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Divider,
  List,
  ListItem,
  Drawer,
  Toolbar,
  Button,
  IconButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoIcon from '../assets/logo-icon.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  },
  logoIcon: {
    maxWidth: 70,
    maxHeight: 70,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  closeIcon: {
    color: 'white',
  },
  drawerPaper: {
    background: '#2a2929',
    color: 'white',
  },
  menuIcon: {
    color: 'white',
  },
  mobileNav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {smScreen ? (
            <>
              <div className={classes.mobileNav}>
                <Link to="/">
                  <img src={logoIcon} alt="logo" className={classes.logoIcon} />
                </Link>
                <IconButton
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={classes.menuButton}
                  color="secondary"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </>
          ) : (
            <>
              <Link to="/">
                <img src={logo} alt="logo" className={classes.logo} />
              </Link>
              <div className={classes.title}></div>
            </>
          )}

          {!smScreen && (
            <>
              <Link to="/breakfree">
                <Button color="secondary">Break Free</Button>
              </Link>
              <Button color="secondary">About</Button>
              <Button color="secondary">Login</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.closeIcon} onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Login', 'Break Free', 'About'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <AccountBoxIcon className={classes.menuIcon} />}
                {index === 1 && (
                  <Brightness7Icon className={classes.menuIcon} />
                )}
                {index === 2 && <InfoIcon className={classes.menuIcon} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
