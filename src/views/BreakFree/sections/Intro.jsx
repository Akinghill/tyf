import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  intro: {
    marginTop: '74px',
    padding: '2rem 4rem',
    // minHeight: '70vh',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  introTitle: {
    marginBottom: "2rem"
  },
  imagePlaceholder: {
    margin: '1rem',
    backgroundColor: "gray",
    width: "400px",
    height: "300px",
  }
});

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.intro}>
      <Typography className={classes.introTitle} variant="h3"> Breaking Free: The process of removing mental and emotional barriers keeping you from your authentic self and allowing you to create a compelling future. </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4} >
          <div className={classes.imagePlaceholder}>
            <img src="https://fakeimg.pl/400x300/" alt=''/>

          </div>
        </Grid>
          <Grid item xs={8} >
            <Typography variant="h4">We all have dreams...but we’ve lost so much certainty...</Typography>
            <br></br>
            <Typography variant="h4">SHPEEEL</Typography>
          </Grid>
        </Grid>
    </div>
  );
};

export default Intro;
