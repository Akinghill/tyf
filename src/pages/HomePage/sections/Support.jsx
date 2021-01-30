import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

import SupportCard from '../../../components/SupportCard/SupportCard';

import { supportData } from '../../../components/SupportCard/supportCardData';

const useStyles = makeStyles((theme) => ({
  support: {
    background: 'rgba(0,0,0,.2)',
    padding: '5rem 2rem',
    minHeight: '55vh',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem',
    },
  },
  sectionTitle: {
    marginBottom: '3rem',
    maxWidth: '800px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.75rem',
    },
  },
  supportContent: {
    padding: '2rem',
  },
  supportFigure: {
    margin: '2rem',
  },
  approachText: {
    verticalAlign: 'center',
  },
  icon: {
    fontSize: '8rem',
    background: '#fdd835',
    borderRadius: '50%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
  },
  supportCopy: {
    textAlign: 'right',
    padding: '0rem 2rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '2rem',
    },
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    width: '100%',
    maxWidth: '850px',
    margin: 'auto'
  }
}));

const Support = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.support}>
        <Typography
          align="center"
          variant="h2"
          className={classes.sectionTitle}
          data-aos="flip-up"
        >
          Support Through Ongoing Accountability and Education
        </Typography>
        <Grid className={classes.gridContainer} container spacing={4} alignItems="center" justify="center">
          {supportData.map((card) => (
            <Grid item sm={12} md={4} key={card.title}>
              <SupportCard cardData={card} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Support;
