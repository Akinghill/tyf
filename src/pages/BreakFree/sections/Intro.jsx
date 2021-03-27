import React from 'react';
import {
  Typography,
  IconButton,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

import breakfreeImg1 from '../../../assets/breakfree-1.jpeg';
import { breakFreeData } from '../../../data/breakFreeData';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    minHeight: '600px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '665px'
    },
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      top: '0px',
      width: '100%',
      height: '110%',
      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
      position: 'static',
      paddingTop: "1rem",
      paddingLeft: "1rem",
      boxSizing: 'border-box',
      padding: '0rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '34vh',
      position: 'relative',
      top: '50px',
    },
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
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0',
      width: '100%',
    },
  },
  subIntro: {
    fontWeight: '400',
    marginTop: '4rem',
    fontSize: '2rem',
    paddingLeft: '3rem',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0',
      width: '100%',
    },
  },
  introCopy2: {
    width: '65%',
    paddingTop: '2rem',
    paddingLeft: '6rem',
    letterSpacing: '2px',
    lineHeight: '30px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0',
      width: '100%',
      paddingBottom: '1rem',
    },
  },
  expandIcon: {
    fontSize: '2rem',
    color: 'rgba(0,0,0,.8)',
  },
  moreBtn: {
    alignSelf: 'flex-start',
  },
}));

const Intro = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className={classes.sectionPad} />
      <div className={classes.introContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.introLeft}>
            <Typography variant="h1" className={classes.title}>
              Breaking Free:
            </Typography>
            <Typography className={classes.intro}>
              {breakFreeData.intro}
            </Typography>
            <Typography variant="h2" className={classes.subIntro}>
              We all have dreams, <br /> but we've lost so much certainty{' '}
            </Typography>
            <Typography className={classes.introCopy2}>
              Spheel Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Ex cum esse dolorum dolorem, iusto consectetur tempore cumque nam
              nostrum quo itaque, quibusdam odio eaque ipsam! Vitae soluta unde
              velit voluptas.
            </Typography>
            <a href="#step1">
              <IconButton className={classes.moreBtn}>
                <ExpandMoreIcon className={classes.expandIcon} />
              </IconButton>
            </a>
          </div>
        </div>
        {!smScreen ? (
          <div className={classes.introRight}>
            {/* <img src={breakfreeImg1} alt="freedom"/> */}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Intro;
