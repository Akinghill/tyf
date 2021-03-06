import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Divider,
  List,
  Drawer,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
    color: theme.palette.secondary.main,
  },
  drawerPaper: {
    background: theme.palette.primary.main,
    width: '175px',
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
  drawer: {},
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
              {/* <Button color="secondary">Login</Button> */}
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
          <Link to="/breakfree">
            <Button color="secondary">Break Free</Button>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
