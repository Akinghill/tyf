import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  approach: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '55vh'
  },
  sectionTitle: {
  },
  approachContent: {
    padding: "2rem"
  },
  approachFigure: {
    margin: "2rem"
  },
  approachText: {

  },
  circle: {
    position: "absolute",
    top: "50%",
    left: "60%",
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
  },
  circle2: {
    background: "#F2E297",
    width: "40%",
  },
  circle3: {
    background: "#fdd835",
    width: "25%",
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

})

const Approach = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.approach}>
        <div className={classes.approachContent}>
          <Typography align="center" variant="h2" className={classes.sectionTitle} data-aos="flip-up">  Our Approach </Typography>
          <Grid container spacing={3} justify="center" alignItems="center">
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
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Typography className={classes.approachText} variant="h4">  Behavior change starts at our core. Teach You Freedom believes deep identity work is needed for long lasting behavior change. </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Approach;
