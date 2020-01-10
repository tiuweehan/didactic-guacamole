import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 8,
    },
    subheader: {
      textAlign: 'center',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 18,
      fontWeight: 300,
      color: '#888',
      marginBottom: 10,
    },
    subsubheader: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 16,
      fontWeight: 400,
      color: '#666',
    },
  }),
);

interface Props {
  header: string;
  subheader: string;
  subsubheader: string;
}

const DetailsCardHeader: React.FC<Props> = ({ header, subheader, subsubheader }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>{header}</div>
      <div className={classes.subheader}>{subheader}</div>
      <div className={classes.subsubheader}>{subsubheader}</div>
    </div>
  );
};

export default DetailsCardHeader;
