import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '50px',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '10%',
        paddingRight: '10%',
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '20%',
        paddingRight: '20%',
      },
    },
  }),
);

const Experience: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Experience:</h1>
    </div>
  );
};

export default Experience;
