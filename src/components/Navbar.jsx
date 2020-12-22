import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography color="secondary" variant="h6" className={classes.title}>
            Teach You Freedom
          </Typography>
          {
            !smScreen &&
            (
              <>
                <Button color="secondary">Break Free</Button>
                <Button color="secondary">About</Button>
                <Button color="secondary">Login</Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
