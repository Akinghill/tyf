import React from 'react';
import { Typography, Card, makeStyles } from '@material-ui/core';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  supportCard: {
    padding: '1rem',
    minHeight: '290px',
    maxWidth: '312px',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      minHeight: '280px',
    },
  },
  supportCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '400px',
  },
  supportCardTitle: {
    textAlign: 'center',
    letterSpacing: '3px',
    lineHeight: '35px',
    fontSize: '2rem',
  },
  supportCardContent: {
    margin: '1rem',
    textAlign: 'center',
  },
  supportCardIcon: {
    fontSize: '3rem',
  },
}));

const SupportCard = ({ cardData }) => {
  const { title, content, icon } = cardData;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.supportCard} raised>
        <div className={classes.supportCardContainer}>
          <Typography className={classes.supportCardTitle}>{title}</Typography>
          <Typography className={classes.supportCardContent}>
            {content}
          </Typography>
          {icon === 'alarm' ? (
            <AccessAlarmIcon className={classes.supportCardIcon} />
          ) : icon === 'computer' ? (
            <ComputerIcon className={classes.supportCardIcon} />
          ) : (
            <div>
              <PersonIcon className={classes.supportCardIcon} />
              <PersonIcon className={classes.supportCardIcon} />
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default SupportCard;
