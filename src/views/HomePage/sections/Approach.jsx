import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import approachImg from '../../../assets/approach-diagram.png'

const useStyles = makeStyles((theme) => ({
  approach: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '55vh',
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
      padding: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '2rem',
      display: "block",
    },
  },
  sectionTitle: {
    [theme.breakpoints.up('lg')]: {
      width: "100%",
    },
  },
  approachText: {
    paddingLeft: '0rem',
    [theme.breakpoints.up('md')]: {
      paddingLeft: "6rem"
    },
  },
  approachFigure: {
    width: '100%',
  },
  identityText: {
    top: "10%",
    position: 'absolute'
  },
  proccessText: {
    top: "40%",
    position: 'absolute'
  },
  successText: {
    top: "75%",
    position: 'absolute'
  }

}))

const Approach = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <div className={classes.approach}>
        <Typography align="center" variant="h2" className={classes.sectionTitle} data-aos="flip-up">  Our Approach </Typography>
        <Grid container spacing={!mdScreen ? 3 : 0} justify="center" alignItems="center">
          <Grid item xs={12} md={4} data-aos="fade-right">
            <img className={classes.approachFigure} src={approachImg} alt='approach'></img>
          </Grid>
          <Grid item xs={12} sm={8} md={6} data-aos="fade-left">
            <Typography className={classes.approachText} variant="h4">Most people fail to change because they focus on changing the wrong things. We help you create deep identity-based change that produces sustainable behaviors and long term results.</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Approach;
