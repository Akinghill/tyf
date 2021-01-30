import React from 'react';
import {
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import RecentPost from '../../../components/RecentPost/RecentPost';

import { recentPostData } from '../../../data/recentPostData';

const useStyles = makeStyles((theme) => ({
  postSection: {
    minHeight: '55vh',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  recentsTitle: {
    paddingTop: '5rem',
    marginBottom: '2rem',
  },
}));

const RecentPosts = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.postSection}>
        <div>
          <Typography
            className={classes.recentsTitle}
            align="center"
            variant="h2"
          >
            Recent Posts
          </Typography>
          {recentPostData.map((postData, i) => (
            <RecentPost postData={postData} reverse={i%2===0 ? false: true}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
