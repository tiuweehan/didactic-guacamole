import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// import { div } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      background: '#eee',
      padding: '50px 20% 50px 20%',
      alignItems: 'flex-start',
      textAlign: 'center',
      justifyContent: 'center',
    },
    header: {
      margin: 'auto',
      background: 'blue',
      justifyContent: 'center',
    }
  }
));

const HomeProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant='h4'>Hello World!</Typography>
      &nbsp;
      <Typography> My name is Wee Han, and I am a Computer Science and Applied Mathematics student at the National University of Singapore.</Typography>
    </div>
  );
}

export default HomeProfile;
