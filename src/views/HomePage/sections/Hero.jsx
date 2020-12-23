import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  hero: {
    minHeight: '90vh',
    backgroundImage: 'url("./tyf/img/hero-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  heroText: {
    color: "#000",
    fontWeight: 900
  },
  heroContent: {
    position: "relative",
    bottom: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  }
});

const Hero = (props) => {
  const {  sectionName } = props
  const classes = useStyles();

  return (
    <>
      <div className={classes[sectionName]}>
        <div className={classes.heroContent}>
          <Typography align="center" variant="h1" style={{ "color": "white" }}>Are you ready?</Typography>
          <Button size="large" variant='contained' color="secondary" className={classes.cta}>Break Free</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;

