import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
    },
    nusLogo: {
      marginTop: '50px',
      width: '40%',
      minWidth: '150px',
    },
  }),
);

const HomeProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4">Hello World!</Typography>
      <br />
      <Typography>
        My name is Wee Han, and I am a Computer Science and Applied Mathematics undergraduate at the{' '}
        <a href="https://en.wikipedia.org/wiki/National_University_of_Singapore">National University of Singapore</a>.
      </Typography>
      <img className={classes.nusLogo} src="/images/NUS.png" />
      <Typography></Typography>
    </div>
  );
};

export default HomeProfile;
