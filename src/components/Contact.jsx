import React from 'react';
import { makeStyles, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactSection: {
    background: 'rgba(0,0,0,.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: '1rem',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  contactText: {
    textAlign: 'center',
    flex: 1,
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '90%',
  },
  textInput: {
    width: '340px',
  },
  btn: {
    alignSelf: 'center',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.contactSection}>
      <div className={classes.formContainer}>
        <Typography className={classes.contactText}>
          Interested in <strong>FREE</strong> access to the Lumenize program?
          We’re looking for committed individuals who are interested in beta
          testing the program this Fall. If thats you, sign up below!
        </Typography>
        <div className={classes.form}>
          <TextField
            className={classes.textInput}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
          />
          <Button color="secondary" variant="contained" className={classes.btn}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
