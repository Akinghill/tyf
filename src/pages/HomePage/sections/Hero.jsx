import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Popup from '../../../components/Popup/Popup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import hero from '../../../assets/hero-bg.jpeg';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: 'darkgray',
    minHeight: '90vh',
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
    '&::before': {
      content: '" "',
      position: 'absolute',
      display: 'block',
      height: "90vh",
      width: '100%',
      background: 'rgba(0,0,0,0.5)',
    },
  },
  heroText: {
    color: '#fff',
    paddingTop: '6rem',
    width: '60%',
    [theme.breakpoints.down('md')]: {
      fontSize: '5rem',
      width: '75%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
      width: '90%',
    },
  },
  heroContent: {
    position: 'relative',
    bottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem',
  },
  cta: {
    cursor: 'pointer',
    padding: '.5rem 2rem',
    margin: '1rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  learnMoreArea: {
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
  },
  learnMore: {
    margin: '1rem',
    marginBottom: '0px',
  },
  learnMoreIcon: {
    color: 'white',
    fontSize: '3rem',
  },
}));

const Hero = (props) => {
  const { sectionName } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes[sectionName]}>
        <div className={classes.heroContent}>
          <Typography className={classes.heroText} align="center" variant="h1">
            Are You Ready To Break Free?
          </Typography>
          <Link to="/breakfree">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              className={classes.cta}
            >
              Take Action
            </Button>
          </Link>
          <a className={classes.learnMoreArea} href="#mission">
            <ExpandMoreIcon className={classes.learnMoreIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
