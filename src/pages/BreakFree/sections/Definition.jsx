import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: 'auto',
    minHeight: '30vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  word: {
    flex: 1,
  },
  pronunciation: {
    color: 'rgba(0,0,0,.7)',
    textAlign: 'center',
  },
  definition: {
    flex: 4,
    padding: '4rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem'
    },
  },
  // definitionContent: {
  //   padding: '2rem',
  // },

  // sectionTitle: {
  //   marginBottom: '3rem',
  //   textAlign: 'center',
  //   [theme.breakpoints.down('md')]: {
  //     marginBottom: '1rem',
  //   },
  // },
  // definitionCopy: {
  //   [theme.breakpoints.down('md')]: {
  //     fontSize: '1.5rem',
  //   },
  // },
}));

const Definition = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container} id="">
        <div className={classes.word}>
          <Typography className={classes.word} variant="h2">
            break·through
          </Typography>
          <Typography className={classes.pronunciation}>
            /ˈbrākˌTHro͞o/
          </Typography>
        </div>

        <Typography className={classes.definition} variant="p">
          The moment a mental or emotional block is removed and the path forward is illuminated
        </Typography>
      </div>
    </>
  );
};

export default Definition;
