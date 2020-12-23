import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  approachFigure: {
    margin: "2rem",
    [theme.breakpoints.down('md')]: {
      left: "20%"
    },
  },
  approachText: {
    paddingLeft: '0rem',
    [theme.breakpoints.up('md')]: {
      paddingLeft: "6rem"
    },
  },
  circle: {
    position: "absolute",
    top: "50%",
    left: "60%",
    [theme.breakpoints.down('sm')]: {
      left: "44%"
    },
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    '&:after': {
      content: "''",
      display: "block",
      paddingTop: "100%",
    }
  },
  circle1: {
    background: "#fdd835",
    width: "60%",
    maxWidth: "285px",
    maxHeight: "285px",
  },
  circle2: {
    background: "#F2E297",
    width: "40%",
    maxWidth: "175px",
    maxHeight: "175px",
  },
  circle3: {
    background: "#fdd835",
    width: "25%",
    maxWidth: "110px",
    maxHeight: "110px",
  },
  circleContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: '0px',
    minWidth: "440px",
    minHeight: "285px"
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
            <Grid className={classes.approachFigure} item xs={12} md={4} data-aos="fade-right">
              <div className={classes.circleContainer}>
                <div className={`${classes.circle} ${classes.circle1}`} />
                <div className={`${classes.circle} ${classes.circle2}`} />
                <div className={`${classes.circle} ${classes.circle3}`} />
                <Typography className={classes.identityText} variant="h5">Identity</Typography>
                <Typography className={classes.proccessText} variant="h5">Process</Typography>
                <Typography className={classes.successText} variant="h5">Success</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={6} data-aos="fade-left">
              <Typography className={classes.approachText} variant="h4">  Behavior change starts at our core. Teach You Freedom believes deep identity work is needed for long lasting behavior change. </Typography>
            </Grid>
          </Grid>
      </div>
    </>
  );
};

export default Approach;
