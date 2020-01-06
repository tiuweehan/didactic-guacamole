import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: '100%',
      background: '#eee',
      padding: '50px 20% 50px 20%',
      alignItems: 'flex-start',
      textAlign: 'center',
      justifyContent: 'center',
    },
    header: {
      margin: 'auto',
      background: 'blue',
      justifyContent: 'center',
    },
    nusLogo: {
      marginTop: '50px',
      width: '40%',
      minWidth: '150px',
    },
  }),
);

const HomeProfile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4">Hello World!</Typography>
      <br />
      <Typography>
        My name is Wee Han, and I am a Computer Science and Applied Mathematics undergraduate at the{' '}
        <a href="https://en.wikipedia.org/wiki/National_University_of_Singapore">National University of Singapore</a>.
      </Typography>
      <img className={classes.nusLogo} src="/images/NUS.png" alt="NUS" />
      <LineBreak height={'50px'} />
      <Typography>I started programming in August 2018 and my life has changed completely since then.</Typography>
      <Typography>I enjoy learning and teaching, and also like doing DevOps related stuff.</Typography>
      <LineBreak height={'100px'} />
      <Typography>
        Find my resume{' '}
        <a href="/documents/Tiu_Wee_Han_resume.pdf" target="_blank">
          here
        </a>
        .
      </Typography>
    </div>
  );
};

export default HomeProfile;
