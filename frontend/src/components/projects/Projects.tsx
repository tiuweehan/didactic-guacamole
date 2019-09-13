import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';

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
        <Grid item xs={12}>
          <Grid container className={classes.header}>
            <h3>SMU-SMIF Website</h3>
          </Grid>
        </Grid>
        <Typography className={classes.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi possimus, ab reiciendis
          est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit soluta similique
          debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi possimus, ab
          reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit soluta
          similique debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi
          possimus, ab reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit
          soluta similique debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto inventore quasi
          possimus, ab reiciendis est odio quisquam repudiandae, minus consectetur, quo sunt maiores officia harum fugit
          soluta similique debitis.
        </Typography>
      </Grid>
    </div>
  );
};

export default Projects;
