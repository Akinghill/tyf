import React from 'react';
import { Typography, makeStyles, Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles({
  postSection: {
    minHeight: '55vh',
    padding: "2rem"
  },
  recentsTitle: {
    paddingTop: "5rem",
    marginBottom: "2rem"
  },
  gridContainer: {
    padding: "0rem 0rem"
  },
  paperCard: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "275px",
    background: "rgba(0,0,0,.2)",
    marginBottom: '1rem'
  },
  postTitle: {
    alignSelf: 'flex-start',
  },
  frame: {
    border: "0px",
    width: '100%',
    height: "200px",
    marginBottom: "5px"
  },
  date: {
    fontFamily: 'sans-serif',
    alignSelf: 'flex-end',
    margin: '0px',
    marginBottom: "5px"
  }
});

const RecentPosts = () => {
  const classes = useStyles()
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(mdScreen)

  return (
    <>
      <div className={classes.postSection}>
        <div>
          <Typography className={classes.recentsTitle} align='center' variant='h2'> Recent Posts </Typography>
          <Grid container className={classes.gridContainer} justify='space-evenly' direction={mdScreen ? "column" : "row"} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paperCard} elevation={3}>
                <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/jtEw9FcuQuk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className={classes.date}>12-19-20</p>
                <Typography variant='h5' className={classes.postTitle}>Increase Productivity Now</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paperCard} elevation={3}>
                <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/r4WDyDTPIgY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className={classes.date}>12-19-20</p>
                <Typography variant='h5' className={classes.postTitle}>Why You Can't Change</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paperCard} elevation={3}>
                <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/nh1x33ZrT0M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className={classes.date}>11-14-20</p>
                <Typography variant='h5' className={classes.postTitle}>Start Before You're Ready</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
