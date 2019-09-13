import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, IconButton, Divider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: 150,
      backgroundColor: '#111',
    },
    clearIcon: {
      color: '#c0c6d4',
    },
    link: {
      textDecoration: 'none',
      color: '#9d9d9d',
    },
    linkContainer: {
      color: '#c0c6d4',
      '&:hover': {
        color: 'white',
      },
      fontWeight: 400,
      fontSize: 13,
      height: '40px',
      padding: '10px 20px 10px 20px',
    },
  }),
);

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AppDrawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  return (
    <Drawer classes={{ paper: classes.drawer }} anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <IconButton onClick={() => setIsOpen(false)}>
              <ClearIcon className={classes.clearIcon} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Link to={'/'} className={classes.link}>
            <Grid container className={classes.linkContainer}>
              {'About'}
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Link to={'/experience'} className={classes.link}>
            <Grid container className={classes.linkContainer}>
              {'Experience'}
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Link to={'/projects'} className={classes.link}>
            <Grid container className={classes.linkContainer}>
              {'Projects'}
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default AppDrawer;
