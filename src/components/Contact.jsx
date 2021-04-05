import React from 'react';
import { makeStyles, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactSection: {
    height: '150px',
    background: 'rgba(0,0,0,.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: '1rem',
    width: '500px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contactText: {
    textAlign: 'center',
    flex: 1,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.contactSection}>
      <div className={classes.formContainer}>
        <Typography className={classes.contactText}>
          Sign up to recieve the newsletter!
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <Button color="secondary" variant="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
