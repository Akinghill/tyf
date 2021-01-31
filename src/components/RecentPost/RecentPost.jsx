import React from 'react';
import ReactPlayer from 'react-player';
import {
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  recentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '4rem',
    maxWidth: '1500px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      alignItems: 'center',
    },
  },
  videoContainer: {
    flex: 1,
    maxWidth: '700px',
    display: 'flex',
    justifyContent: 'center',
  },
  player: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: '200px !important',
    },
  },
  postInfo: {
    flex: 1,
    padding: '0rem 3rem',
    maxWidth: '700px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0rem',
      width: '80%',
    },
  },
  date: {
    fontSize: '1.25rem',
    marginLeft: 'auto',
    marginTop: '2rem',
  },
  postTitle: {
    maxWidth: '80%',
    display: 'inline',
  },
  postCopy: {
    marginTop: '2rem',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  titleContainer: {
    width: '100%',
  },
}));

const RecentPost = ({ postData, reverse }) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={`${classes.recentContainer} ${
          reverse === true ? classes.reverse : null
        }`}
      >
        <div className={classes.videoContainer}>
          <ReactPlayer
            className={classes.player}
            url={postData.vidUrl}
            controls
          />
        </div>
        <div className={classes.postInfo}>
          <div className={classes.titleContainer}>
            <Typography variant="h5" className={classes.postTitle}>
              {postData.postTitle}
            </Typography>
          </div>
          <Typography variant="body1" className={classes.postCopy}>
            {postData.postCopy}
          </Typography>{' '}
          <Typography variant="span" className={classes.date}>
            {postData.postDate}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
