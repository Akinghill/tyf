import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import MeditationIcon from '../../../components/icons/MeditationIcon'
import PsychologyIcon from '../../../components/icons/PsychologyIcon'
import BrainIcon from '../../../components/icons/BrainIcon'
import PhysicalIcon from '../../../components/icons/PhysicalIcon'
import MoneyIcon from '../../../components/icons/MoneyIcon';


const useStyles = makeStyles({
  support: {
    background: "rgba(0,0,0,.2)",
    paddingTop: "5rem",
    minHeight: '55vh'
  },
  sectionTitle: {
    marginBottom: "3rem",
    maxWidth: "800px",
    margin: "auto"
  },
  supportContent: {
    padding: "2rem"
  },
  supportFigure: {
    margin: "2rem"
  },
  approachText: {
    verticalAlign: "center"
  },
  icon: {
    fontSize: "8rem",
    background: "#fdd835",
    borderRadius: "50%",
    padding: "1rem"
  }
});

const Support = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.support}>
        <Typography align='center' variant="h2" className={classes.sectionTitle} data-aos="flip-up"> Supported Through Ongoing Accountability and Education </Typography>
        <Grid container spacing={9} alignItems="center" justify='center'>
          <Grid item sm={12} md={4} data-aos="flip-down" >
            <Typography align='right' variant="h3">Leads to sustainable, long term results in the 5 big areas</Typography>
          </Grid>
          <Grid item sm={12} md={4} >
            <Grid container alignItems="center">
              <Grid item sm={4} data-aos="flip-left" data-aos-delay="300">
                <MeditationIcon className={classes.icon} ></MeditationIcon>
                <MoneyIcon viewBox="-45 -45 600 600" className={classes.icon} ></MoneyIcon>
              </Grid>
              <Grid item sm={4} data-aos="flip-left" data-aos-delay="250">
                <BrainIcon viewBox="-50 -70 600 600" className={classes.icon}></BrainIcon>
              </Grid>
              <Grid item sm={4} data-aos="flip-left" data-aos-delay="500">
                <PhysicalIcon viewBox="-50 -60 650 650" className={classes.icon}></PhysicalIcon>
                <PsychologyIcon className={classes.icon}></PsychologyIcon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Support;
