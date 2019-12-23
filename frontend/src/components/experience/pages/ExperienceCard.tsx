import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: 'block',
      margin: 'auto',
      height: 600,
      width: '95%',
    },
    cardContent: {
      width: '100%',
    },
    displayPictureContainer: {
      display: 'block',
    },
    displayPicture: {
      display: 'block',
      margin: 'auto',
      width: 'auto',
      height: 100,
    },
    role: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    company: {
      color: '#888',
      fontSize: '1.25rem',
      fontWeight: 300,
      textAlign: 'center',
    },
    dateRange: {
      color: '#888',
      fontSize: '1rem',
      textAlign: 'center',
    },
  }),
);

export interface Props {
  displayPictureUrl: string;
  role: string;
  company: string;
  dateRange: string;
}

const ExperienceCard: React.FC<Props> = ({ displayPictureUrl, role, company, dateRange, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <LineBreak height={'25px'} />
        <Grid container>
          <Grid item xs={12}>
            <Grid container className={classes.displayPictureContainer}>
              <img className={classes.displayPicture} src={displayPictureUrl} alt={'Display'} />
            </Grid>
          </Grid>
          <LineBreak height={'25px'} />
          <Grid item xs={12}>
            <Grid container justify="center" alignContent="center">
              <Box className={classes.role}>{role}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'5px'} />
          <Grid item xs={12}>
            <Grid container justify="center" alignContent="center">
              <Box className={classes.company}>{company}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'5px'} />
          <Grid item xs={12}>
            <Grid container justify="center" alignContent="center">
              <Box className={classes.dateRange}>{dateRange}</Box>
            </Grid>
          </Grid>
        </Grid>
        {children}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
