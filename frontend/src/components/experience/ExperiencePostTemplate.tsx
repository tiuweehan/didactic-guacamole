import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    imageContainer: {
      justifyContent: 'center',
      margin: '20px 0px 20px 0px',
    },
    image: {
      minWidth: '200px',
      width: '30%',
    },
    headerContent: {
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
    },
    header: {
      justifyContent: 'center',
      margin: '0px 0px 0px 0px',
    },
    subheader: {
      margin: '2px 0px 15px 0px',
      color: '#666',
    },
    text: {
      textAlign: 'justify',
      fontSize: '16px',
      lineHeight: 1.5,
    },
  }),
);

interface ExperiencePostData {
  image?: string;
  header: string;
  workplace?: string;
  startDate: string;
  endDate: string;
}

const ExperiencePostTemplate: React.FC<ExperiencePostData> = ({
  image,
  header,
  workplace,
  startDate,
  endDate,
  children,
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className={classes.imageContainer}>
          <img src={image} alt={''} className={classes.image} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid className={classes.headerContent}>
          <h2 className={classes.header}>{header}</h2>
          {workplace && <Typography variant="subtitle1">{workplace}</Typography>}
          <h3 className={classes.subheader}>{startDate + ' — ' + endDate}</h3>
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};

export default ExperiencePostTemplate;
