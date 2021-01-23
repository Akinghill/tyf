import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

import breakfreeImg1 from '../../../assets/breakfree-1.jpeg';
import { bfCopy } from '../../../data/breakfreeCopy';

const useStyles = makeStyles((theme) => ({
  sectionPad: {
    height: '95px',
    [theme.breakpoints.down('xs')]: {
      height: '74px',
    },
  },
  introContainer: {
    position: 'relative',
    display: 'flex',
    height: '80vh',
  },
  introLeft: {
    position: 'absolute',
    padding: '2rem',
    top: 0,
    bottom: -30,
    clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0 100%)',
    width: '60%',
    zIndex: '10',
    background: theme.palette.secondary.main,
    boxShadow: '5px 6px 8px rgba(0, 0, 0, 0.25)',
  },
  introRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '60%',
    zIndex: '0',
    backgroundImage: `url(${breakfreeImg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  leftContainer: {
    width: '100%',
    zIndex: 10,
    filter: 'drop-shadow(5px 6px 8px rgba(0, 0, 0, 0.25))',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '400',
  },
  intro: {
    width: '50%',
    paddingTop: '1rem',
    paddingLeft: '3rem',
    letterSpacing: '2px',
    lineHeight: '30px',
  },
  subIntro: {
    fontWeight: '400',
    marginTop: '4rem',
    fontSize: '2rem',
    paddingLeft: '3rem',
    width: '60%',
  },
  introCopy2: {
    width: '65%',
    paddingTop: '2rem',
    paddingLeft: '6rem',
    letterSpacing: '2px',
    lineHeight: '30px',
  },
}));

const NewIntro = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sectionPad} />
      <div className={classes.introContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.introLeft}>
            <Typography variant="h1" className={classes.title}>
              Breaking Free:
            </Typography>
            <Typography className={classes.intro}>{bfCopy.intro}</Typography>
            <Typography variant="h2" className={classes.subIntro}>
              We all have dreams, <br /> but we've lost so much certainty{' '}
            </Typography>
            <Typography className={classes.introCopy2}>
              Spheel Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ex cum esse dolorum dolorem, iusto consectetur tempore cumque nam
              nostrum quo itaque, quibusdam odio eaque ipsam! Vitae soluta unde
              velit voluptas.
            </Typography>
          </div>
        </div>
        <div className={classes.introRight}>
          {/* <img src={breakfreeImg1} alt="freedom"/> */}
        </div>
      </div>
    </>
  );
};

export default NewIntro;
