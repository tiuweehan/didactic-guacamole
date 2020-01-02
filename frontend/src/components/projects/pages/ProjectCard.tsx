import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Grid } from '@material-ui/core';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: 'block',
      margin: 'auto',
      height: 650,
      width: '95%',
      maxWidth: 400,
    },
    cardContent: {
      width: '100%',
    },
    displayPictureContainer: {
      height: '100px',
      display: 'flex',
    },
    displayPicture: {
      margin: 'auto',
      maxWidth: 250,
      maxHeight: 100,
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    application: {
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
  name: string;
  application: string;
  dateRange: string;
}

const ProjectCard: React.FC<Props> = ({ displayPictureUrl, name, application, dateRange, children }) => {
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
              <Box className={classes.name}>{name}</Box>
            </Grid>
          </Grid>
          <LineBreak height={'5px'} />
          <Grid item xs={12}>
            <Grid container justify="center" alignContent="center">
              <Box className={classes.application}>{application}</Box>
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

export default ProjectCard;
