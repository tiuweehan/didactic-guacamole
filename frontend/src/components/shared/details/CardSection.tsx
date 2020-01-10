import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import LineBreak from 'components/layouts/utils/LineBreak';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      justifyContent: 'center',
    },
    title: {
      justifyContent: 'center',
      color: '#666',
    },
  }),
);

interface Props {
  title: string;
}

const CardSection: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      </Grid>

      <br />
      <Divider />
      <br />

      <Grid container>
        {React.Children.map(children, child => (
          <Grid item xs={12} md={6} lg={4}>
            {child}
            <LineBreak height={'15px'} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardSection;
