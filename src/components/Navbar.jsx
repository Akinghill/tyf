import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Divider, List, ListItem, Drawer, Toolbar, Typography, Button, IconButton, ListItemText, ListItemIcon, useMediaQuery } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';

import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  closeIcon: {
    color: "white"
  },
  drawerPaper: {
    background: "#2a2929",
    color: "white"
  },
  menuIcon: {
    color: "white"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography color="secondary" variant="h6" className={classes.title}>
            Teach You Freedom
          </Typography>
          {
            !smScreen &&
            (
              <>
                <Link to='/breakfree'>
                  <Button color="secondary">Break Free</Button>
                </Link>
                <Button color="secondary">About</Button>
                <Button color="secondary">Login</Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.closeIcon} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Login', 'Break Free', 'About'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon classList>
                {index === 0 && <AccountBoxIcon className={classes.menuIcon} />}
                {index === 1 && <Brightness7Icon className={classes.menuIcon} />}
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
