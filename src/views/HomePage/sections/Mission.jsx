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
      <div className={classes.mission}>
        <div className={classes.missionContent}>
          <Typography
            className={classes.sectionTitle}
            data-aos="fade-left"
            variant="h2"
          > Our Mission </Typography>
          <Typography className={classes.missionCopy} data-aos="fade-right" variant="h3">
            Teach You Freedom believes your mission statement goes here. Anything you've ever hoped or dreamed can be written in this space
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Mission;
