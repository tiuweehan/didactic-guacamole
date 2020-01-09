import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardActions } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: 'block',
      margin: 'auto',
      height: 650,
      width: '95%',
      maxWidth: 400,
      padding: '50px 20px 20px 20px',
    },
    cardImage: {
      height: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardHeader: {
      height: 140,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContent: {
      height: 260,
    },
    cardActions: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    displayPicture: {
      maxWidth: 250,
      maxHeight: 100,
    },
  }),
);

interface Props {
  image: string;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: Array<React.ReactNode>;
}

const CardSkeleton: React.FC<Props> = ({ image, header, content, footer }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.cardImage}>
        <img src={image} alt={'Display'} className={classes.displayPicture} />
      </div>
      <div className={classes.cardHeader}>{header}</div>
      <div className={classes.cardContent}>{content}</div>
      <CardActions className={classes.cardActions}>{footer.map((icon: React.ReactNode) => icon)}</CardActions>
    </Card>
  );
};

export default CardSkeleton;
