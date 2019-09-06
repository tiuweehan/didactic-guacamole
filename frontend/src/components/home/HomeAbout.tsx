import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/Starfield.css';

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
    link: {
      color: 'white',
    },
  }),
);

const HomeAbout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
      <Grid item xs={12}>
        <h1 style={{ fontSize: 50 }}>Tiu Wee Han</h1>
        <a href="https://github.com/tiuweehan" target="_blank" rel="noopener noreferrer" className={classes.link}>
          <FontAwesomeIcon className={classes.icon} icon={['fab', 'github']} size={'3x'} />
        </a>
        <a
          href="https://www.linkedin.com/in/wee-han/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <FontAwesomeIcon className={classes.icon} icon={['fab', 'linkedin']} size={'3x'} />
        </a>
      </Grid>
    </Grid>
  );
};

export default HomeAbout;
