import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      opacity: 0.9,
    },
    icon: {
      marginLeft: '5px',
      marginRight: '5px',
      opacity: 0.5,
      '&:hover': {
        opacity: 0.95,
        cursor: 'pointer',
      },
    },
  }),
);

const HomeAbout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={12}>
        <h1 style={{ fontSize: 50 }}>Tiu Wee Han</h1>
        <FontAwesomeIcon className={classes.icon} icon={['fab', 'github']} size={'3x'} />
        <FontAwesomeIcon className={classes.icon} icon={['fab', 'linkedin']} size={'3x'} />
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
