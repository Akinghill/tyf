import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '1rem',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.primary.main,
  },
  socials: {
    color: '#fdd835',
    fontSize: '3rem',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(50%)',
    },
  },
  copyright: {
    margin: '1rem',
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <a
              href="https://www.youtube.com/channel/UCXgqVIxurxQDl_gfu4z4otQ"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon className={classes.socials}></YouTubeIcon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.instagram.com/adam.letica/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={classes.socials}></InstagramIcon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.facebook.com/adletica12"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className={classes.socials}></FacebookIcon>
            </a>
          </Grid>
        </Grid>
        <Typography className={classes.copyright}>
          © Lumenize 2021
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
