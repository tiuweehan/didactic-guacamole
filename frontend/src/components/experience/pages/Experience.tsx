import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      padding: '30px 0px 30px 0px',
      [theme.breakpoints.up('md')]: {
        padding: '55px 10% 55px 10%',
      },
    },
    title: {
      justifyContent: 'center',
      color: '#666',
    },
    headerContent: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      margin: '0px 0px 0px 0px',
    },
    subheader: {
      margin: '2px 0px 15px 0px',
      color: '#666',
    },
    text: {
      textAlign: 'justify',
      fontSize: '16px',
      lineHeight: 1.5,
    },
  }),
);

const Experience: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.title}>
        <Typography variant="h3">Experience</Typography>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <ExperienceCard
            displayPictureUrl={'/images/NUS.png'}
            role={'Teaching Assistant'}
            company={'National University of Singapore'}
            dateRange={'August 2019 – November 2019'}
          ></ExperienceCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExperienceCard
            displayPictureUrl={'/images/CVWO.png'}
            role={'Software & DevOps Engineer'}
            company={'Computing for Voluntary Welfare Organisations (CVWO)'}
            dateRange={'May 2019 – August 2019'}
          ></ExperienceCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ExperienceCard
            displayPictureUrl={'/images/CSI.png'}
            role={'Teaching Assistant'}
            company={'Cancer Science Institute (CSI)'}
            dateRange={'January 2019 – May 2019'}
          ></ExperienceCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
