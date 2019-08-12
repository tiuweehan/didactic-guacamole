import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      height: '100vh',
      overflowX: 'hidden',
      overflowY: 'auto',
      perspective: '2px',
    },
    section: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      textShadow: '0 0 5px #000',
    },
    parallax: {
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateZ(-2px) scale(2)',
        backgroundSize: '100%',
        zIndex: -1,
      },
    },
    static: {
      background: 'gray',
    },
    bg1: {
      '&:after': {
        backgroundImage: "url('/images/kitten.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
      },
    },
  }),
);

const Parallax: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.wrapper}>
      <section className={`${classes.section} ${classes.parallax} ${classes.bg1}`}>
        <h1 style={{ fontSize: 50 }}>Tiu Wee Han</h1>
      </section>
      <section className={`${classes.section} ${classes.static}`}>
        <h1>{'Welcome to my website!'}</h1>
      </section>
    </main>
  );
};

export default Parallax;
