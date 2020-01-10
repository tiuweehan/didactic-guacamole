import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      background: '#eee',
      padding: '50px 20% 20px 20%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
    },
    header: {
      margin: 'auto',
      background: 'blue',
      justifyContent: 'center',
    },
    nusLogo: {
      marginTop: '50px',
      width: '100%',
      maxWidth: '300px',
    },
    buffer: {
      display: 'flex',
      flexGrow: 1,
    },
  }),
);

const HomeProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4">Hello World!</Typography>

      <LineBreak height={'30px'} />

      <Typography>
        My name is Wee Han, and I am a Computer Science and Applied Mathematics undergraduate at the{' '}
        <a href="https://en.wikipedia.org/wiki/National_University_of_Singapore">National University of Singapore</a>.
      </Typography>

      <img className={classes.nusLogo} src={'/images/NUS.png'} alt={'NUS'} />

      <LineBreak height={'40px'} />
      <Typography>I started programming in August 2018 and have not looked back since.</Typography>

      <LineBreak height={'10px'} />
      <Typography>I enjoy learning and teaching as well as doing DevOps related stuff.</Typography>

      <LineBreak height={'10px'} />
      <Typography>
        Find my resume{' '}
        <a href="/documents/Tiu_Wee_Han_resume.pdf" target="_blank">
          here
        </a>
        .
      </Typography>

      <div className={classes.buffer} />

      <Typography>Copyright © 2020 Tiu Wee Han</Typography>
    </div>
  );
};

export default HomeProfile;
