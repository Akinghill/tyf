import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AdjustSharpIcon from '@material-ui/icons/AdjustSharp';

import { bfCopy } from '../../../data/breakfreeCopy';

const useStyles = makeStyles({
  step1: {
    marginTop: '3rem',
    padding: '2rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  step1Title: {
    marginBottom: '2rem',
  },
  imagePlaceholder: {
    margin: '1rem',
    backgroundColor: 'gray',
    width: '400px',
    height: '300px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '400',
  },
});

const Step2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.step1} id="danceWithFear2">
      <Typography className={classes.title} variant="h3">
        Step 1: {bfCopy.step1.title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Typography variant="h4">
            There’s only one thing keeping you from where you are and where you
            want to go - Fear.
          </Typography>
          <br></br>
          <Typography variant="h4">
            By the end of this first step on your breakthrough journey you will
            be able to..
          </Typography>

          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AdjustSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Understand what fear is and how it works" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Learn how and where your fear is holding you back" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AdjustSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Develop tools and tactics to overcome and move through fear" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.imagePlaceholder}>
            <img src="https://fakeimg.pl/400x300/" alt="" />
          </div>
        </Grid>
      </Grid>
      <a href="#danceWithFear">
        <IconButton className={classes.moreBtn}>
          <ExpandMoreIcon className={classes.expandIcon} />
        </IconButton>
      </a>
    </div>
  );
};

export default Step2;
