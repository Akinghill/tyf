import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  footer: {
    padding: "1rem",
    height: '100px',
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    background: 'black'
  },
  socials: {
    color: '#fdd835',
    fontSize: '3rem',
    cursor: "pointer",
    '&:hover': {
      filter: "brightness(50%)"
    }
  },
  copyright: {
    margin: "1rem",
    color: "white"
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <YouTubeIcon className={classes.socials}></YouTubeIcon>
          </Grid>
          <Grid item>
            <InstagramIcon className={classes.socials}></InstagramIcon>
          </Grid>
          <Grid item>
            <FacebookIcon className={classes.socials}></FacebookIcon>
          </Grid>
        </Grid>
        <Typography className={classes.copyright}>© Teach You Freedom 2020</Typography>
      </footer>
    </>
  );
};

export default Footer;
