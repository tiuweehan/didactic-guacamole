import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { EmailProfile, FacebookProfile, GitHubProfile, LinkedInProfile } from '../profiles';
import StarField from '../styles/StarField';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      opacity: 0.9,
      position: 'relative',
      top: '-6vh',
    },
    title: {
      fontSize: 50,
    },
  }),
);

const HomeAbout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <StarField />
      <Grid item xs={12}>
        <h1 className={classes.title}>{'Tiu Wee Han'}</h1>
        <GitHubProfile url={'https://github.com/tiuweehan'} />
        <LinkedInProfile url={'https://www.linkedin.com/in/wee-han/'} />
        <EmailProfile url={'weehan@u.nus.edu'} />
        <FacebookProfile url={'https://www.facebook.com/Weegieee'} />
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
