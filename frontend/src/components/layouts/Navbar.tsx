import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#24292e',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color: '#9d9d9d',
      marginLeft: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#9d9d9d',
      '&:hover': {
        color: '#ddd',
      },
    },
  }),
);

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography className={classes.title}>Tiu Wee Han</Typography>
          <Button className={classes.menuButton}>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
