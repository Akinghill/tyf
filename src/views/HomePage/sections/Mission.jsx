import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mission: {
    background: "rgba(0,0,0,.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '55vh'
  },
  missionContent: {
    maxWidth: "800px",
    padding: "2rem"
  },
  sectionTitle: {
    marginBottom: '3rem',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: "1rem"
    },
  },
  missionCopy: {
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem"
    },
  }

}));

const Mission = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mission} id="mission">
        <div className={classes.missionContent}>
          <Typography
            className={classes.sectionTitle}
            data-aos="fade-left"
            variant="h2"
          > Our Mission </Typography>
          <Typography className={classes.missionCopy} data-aos="fade-right" variant="h4">
          Teach You Freedom believes every single one of us has a unique purpose to serve. That's why we're on a mission to help you remove the mental and emotional barriers keeping you stuck, and close the gap between where you are and where you want to be.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Mission;
