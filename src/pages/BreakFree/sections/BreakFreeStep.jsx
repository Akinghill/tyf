import React from 'react';
import {
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AdjustSharpIcon from '@material-ui/icons/AdjustSharp';

import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  stepContainer: {
    padding: '2rem 4rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '400',
    marginBottom: '2rem',
  },
  contentContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse !important',
      alignItems: 'center',
    },
  },
  info: {
    maxWidth: '760px',
    padding: '0rem 5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0rem 2rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0rem',
    },
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  subtitle: {
    fontSize: '1.5rem',
  },
  listItem: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0rem',
      paddingRight: '0rem',
    },
  },
  listIcon: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '35px',
    },
  },
  videoContainer: {
    flex: 1,
    maxWidth: '700px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem',
    },
  },
  player: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: '200px !important',
    },
  },
  hr: {
    width: '100%',
    border: '0',
    height: '1px',
    backgroundImage:
      'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
  },
}));

const BreakFreeStep = ({ breakFreeData, reverse }) => {
  const classes = useStyles();
  return (
    <div className={classes.stepContainer} id={breakFreeData.sectionId}>
            <hr className={classes.hr} />

      <Typography className={classes.title} variant="h3">
        {breakFreeData.module}: {breakFreeData.title}
      </Typography>
      <div
        className={`${classes.contentContainer} ${
          reverse === true ? classes.reverse : null
        }`}
      >
        <div className={classes.info}>
          <Typography className={classes.subtitle} variant="h4">
            {breakFreeData.subTitle1}
          </Typography>
          <br></br>
          <Typography className={classes.subtitle} variant="h4">
            {breakFreeData.subTitle2}
          </Typography>
          <List>
            {breakFreeData.list.map((listItem) => (
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <AdjustSharpIcon />
                </ListItemIcon>
                <ListItemText primary={listItem} />
              </ListItem>
            ))}
          </List>
          <a href={breakFreeData.nextSectionId}>
            <IconButton className={classes.moreBtn}>
              <ExpandMoreIcon className={classes.expandIcon} />
            </IconButton>
          </a>
        </div>
        <div className={classes.videoContainer}>
          <ReactPlayer
            className={classes.player}
            url={breakFreeData.vidUrl}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default BreakFreeStep;
