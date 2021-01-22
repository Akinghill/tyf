import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import MeditationIcon from '../../../components/icons/MeditationIcon'
// import PsychologyIcon from '../../../components/icons/PsychologyIcon'
// import BrainIcon from '../../../components/icons/BrainIcon'
// import PhysicalIcon from '../../../components/icons/PhysicalIcon'
// import MoneyIcon from '../../../components/icons/MoneyIcon';
import SupportCard from '../../../components/SupportCard/SupportCard';

import { supportData } from '../../../components/SupportCard/supportCardData';

const useStyles = makeStyles((theme) => ({
  support: {
    background: 'rgba(0,0,0,.2)',
    padding: '5rem 2rem',
    minHeight: '55vh',
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
}));

const Support = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        <Grid container spacing={4} alignItems="center" justify="center">
          {
          supportData.map((card) => (
            <Grid item sm={12} md={4}>
              <SupportCard cardData={card} />
            </Grid>
          ))
          }

          {/* <Grid item sm={12} md={4}>
            <SupportCard/>
          </Grid>
          <Grid item sm={12} md={4}>
            <SupportCard/>
          </Grid>
          <Grid item sm={12} md={4}>
            <SupportCard/>
          </Grid> */}
          {/* <Grid item sm={12} md={4} data-aos="flip-down" >
            <Typography className={classes.supportCopy} variant="h3">Leads to sustainable, long term results in the 5 big areas</Typography>
          </Grid>
          <Grid item sm={12} md={4} >
            <Grid container alignItems="center" justify='center'>
              <Grid className={classes.iconContainer} item sm={4} data-aos="flip-left" data-aos-delay="300">
                <MeditationIcon className={classes.icon} ></MeditationIcon>
                <MoneyIcon viewBox="-45 -45 600 600" className={classes.icon} ></MoneyIcon>
              </Grid>
              <Grid className={classes.iconContainer} item sm={4} data-aos="flip-left" data-aos-delay="250">
                <BrainIcon viewBox="-50 -70 600 600" className={classes.icon}></BrainIcon>
              </Grid>
              <Grid className={classes.iconContainer} item sm={4} data-aos="flip-left" data-aos-delay="500">
                <PhysicalIcon viewBox="-50 -60 650 650" className={classes.icon}></PhysicalIcon>
                <PsychologyIcon className={classes.icon}></PsychologyIcon>
              </Grid>
            </Grid> */}
          {/* </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default Support;
