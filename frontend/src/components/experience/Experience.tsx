import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import ExperiencePostTemplate from './ExperiencePostTemplate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      padding: '30px 0px 30px 0px',
      [theme.breakpoints.up('sm')]: {
        padding: '55px 10% 55px 10%',
      },
      [theme.breakpoints.up('md')]: {
        padding: '80px 20% 80px 20%',
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
      <ExperiencePostTemplate
        image={'/images/NUS.png'}
        header={'Teaching Assistant'}
        workplace={'National University of Singapore'}
        startDate={'August 2019'}
        text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi possimus, ab reiciendis
        est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit soluta similique
        debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi possimus, ab
        reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit soluta
        similique debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi
        possimus, ab reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit
        soluta similique debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi
        possimus, ab reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit
        soluta similique debitis.`}
      />
    </div>
  );
};

export default Experience;
