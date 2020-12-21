import React from 'react';
import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

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
    padding: "0rem 2rem"
  },
  paperCard: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,0,0,.2)"
  },
  postTitle: {
    alignSelf: 'flex-start',
    textDecoration: "underline"
  },
  frame: {
    border: "0px",
    width: '355px',
    height: "200px",
    marginBottom: "1rem"
  }
});

const RecentPosts = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.postSection}>
        <div>
          <Typography className={classes.recentsTitle} align='center' variant='h2'> RecentPosts </Typography>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item sm={12} md={4}>
              <Paper className={classes.paperCard} elevation={3}>
              <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/jtEw9FcuQuk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Typography variant='h5' className={classes.postTitle}>Increase Productivity NOW</Typography>
              </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper className={classes.paperCard} elevation={3}>
              <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/jtEw9FcuQuk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Typography variant='h5' className={classes.postTitle}>Increase Productivity NOW</Typography>
              </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper className={classes.paperCard} elevation={3}>
              <iframe className={classes.frame} title="Recent Post 1" src="https://www.youtube.com/embed/jtEw9FcuQuk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Typography variant='h5' className={classes.postTitle}>Increase Productivity NOW</Typography>
              </Paper>
            </Grid>
      
          </Grid>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
