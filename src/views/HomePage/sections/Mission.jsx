import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mission: {
    background: "rgba(0,0,0,.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '55vh'
  },
  missionContent: {
    maxWidth: "800px"
  },
  sectionTitle: {
    marginBottom: '3rem'
  }

});

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
          <Typography data-aos="fade-right" variant="h3">
            Teach You Freedom believes your mission statement goes here. Anything you've ever hoped or dreamed can be written in this space
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Mission;
