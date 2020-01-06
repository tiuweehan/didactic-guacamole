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
      color: '#555',
      padding: '20px 12% 0px 12%',
      textAlign: 'center',
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
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/Bullseye.png'}
            name={'Bullseye'}
            application={'iOS Application'}
            dateRange={'December 2019 – December 2019'}
          >
            <Typography className={classes.text}>
              Bullseye is a simple game I developed to learn the basics of Swift and SwiftUI.
            </Typography>
          </ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/AlgoBase.jpg'}
            name={'AlgoBase'}
            application={'Desktop Application'}
            dateRange={'August 2019 – November 2019'}
          >
            <Typography className={classes.text}>
              AlgoBase is a one-stop algorithm management platform, designed for students preparing for technical
              interviews.
            </Typography>
            <Typography className={classes.text}>
              AlgoBase is written in Java and uses JavaFX as its GUI library.
            </Typography>
          </ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/SMU-SMIF.png'}
            name={'SMU-SMIF Website'}
            application={'Web Application'}
            dateRange={'July 2019 – Present'}
          ></ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/TWH.png'}
            name={'This Website'}
            application={'Web Application'}
            dateRange={'July 2019 – Present'}
          ></ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/AUN-QA.jpg'}
            name={'AUN-QA Web Portal'}
            application={'Web Application'}
            dateRange={'May 2019 – September 2019'}
          ></ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProjectCard
            displayPictureUrl={'/images/SAC-NL.jpg'}
            name={'SAC-NL Web Portal'}
            application={'Web Application'}
            dateRange={'May 2019 – September 2019'}
          ></ProjectCard>
          <LineBreak height={'15px'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
