import React from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'white',
  },
}));

export default function Popup({ handleClose, open }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <div className={classes.container}>
        <DialogTitle id="form-dialog-title">Stay Tuned</DialogTitle>
        <DialogContent className={classes.container}>
          <DialogContentText>
            The Teach You Freedom team is working tirelessly to develop systems
            to help you and your team reach their full potential.
            <br />
            <br />
            Enter your email to subsribe to get notified when new content
            releases.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
