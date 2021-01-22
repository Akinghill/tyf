import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import hero from '../../../assets/hero-bg.jpeg';

const useStyles = makeStyles({
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
  },
  heroText: {
    color: '#000',
    paddingTop: '6rem',
    width: '60%',
  },
  heroContent: {
    position: 'relative',
    bottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cta: {
    padding: '.5rem 2rem',
    margin: '1rem',
    fontSize: '2rem',
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
});

const Hero = (props) => {
  const { sectionName } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes[sectionName]}>
        <div className={classes.heroContent}>
          <Typography
            className={classes.heroText}
            align="center"
            variant="h1"
            style={{ color: 'white' }}
          >
            Are you ready to break free?
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.cta}
          >
            I'm ready
          </Button>
          <a className={classes.learnMoreArea} href="#mission">
            {/* <Typography variant="h5" className={classes.learnMore}>
              Learn more
            </Typography> */}
            <ExpandMoreIcon className={classes.learnMoreIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
