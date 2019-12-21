import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '30px',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '55px',
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '20%',
        paddingRight: '20%',
        paddingTop: '80px',
      },
    },
    title: {
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

const ProjectsPostTemplate: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className={classes.header}>
          <h3>SMU-SMIF Website</h3>
        </Grid>
      </Grid>
      <Typography className={classes.text}></Typography>
    </Grid>
  );
};

export default ProjectsPostTemplate;
