import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from './AppDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    webAppBar: {
      backgroundColor: '#050505',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    mobileAppBar: {
      backgroundColor: '#050505',
      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
      color: '#9d9d9d',
      marginLeft: theme.spacing(2),
    },
    buffer: {
      flexGrow: 1,
    },
    menuButton: {
      textTransform: 'none',
      color: '#9d9d9d',
      '&:hover': {
        color: '#ddd',
      },
    },
    link: {
      textDecoration: 'none',
      color: '#9d9d9d',
    },
    hamburger: {
      color: '#9d9d9d',
    },
  }),
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.webAppBar}>
        <Toolbar variant="dense">
          <Typography className={classes.title}>Tiu Wee Han</Typography>
          <Link to="/" className={classes.link}>
            <Button className={classes.menuButton}>About</Button>
          </Link>
          <Link to="/experience" className={classes.link}>
            <Button className={classes.menuButton}>Experience</Button>
          </Link>
          <Link to="/projects" className={classes.link}>
            <Button className={classes.menuButton}>Projects</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={classes.mobileAppBar}>
        <Toolbar variant="dense">
          <div className={classes.buffer}></div>
          <Link to="/" className={classes.link}>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className={classes.hamburger} />
            </IconButton>
          </Link>
          <AppDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
