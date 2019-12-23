import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import LineBreak from 'components/layouts/utils/LineBreak';

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
    header: {
      justifyContent: 'center',
    },
    text: {
      textAlign: 'justify',
      fontSize: '16px',
      lineHeight: 1.5,
    },
  }),
);

const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          Projects
        </Typography>
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            displayPictureUrl={'/images/Bullseye.png'}
            name={'Bullseye'}
            application={'iOS Application'}
            dateRange={'December 2019 – December 2019'}
          />
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            displayPictureUrl={'/images/SMU-SMIF.png'}
            name={'SMU-SMIF Website'}
            application={'Web Application'}
            dateRange={'July 2019 – August 2019'}
          />
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            displayPictureUrl={'/images/TWH.png'}
            name={'This Website'}
            application={'Web Application'}
            dateRange={'July 2019 – August 2019'}
          />
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            displayPictureUrl={'/images/AUN-QA.jpg'}
            name={'AUN-QA Web Portal'}
            application={'Web Application'}
            dateRange={'May 2019 – August 2019'}
          />
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            displayPictureUrl={'/images/AUN-QA.jpg'}
            name={'SAC-NL Web Portal'}
            application={'Web Application'}
            dateRange={'May 2019 – September 2019'}
          />
          <LineBreak height={'15px'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
