import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: 18,
      width: 18,
      cursor: 'pointer',
      border: 0,
      background: 'none',
      padding: 0,
    },
    dot: {
      backgroundColor: '#e4e6e7',
      height: 12,
      width: 12,
      borderRadius: 6,
      margin: 3,
    },
    active: {
      backgroundColor: '#319fd6',
    },
  }),
);

interface Props {
  active: boolean;
  index: number;
  onClick: (event: React.MouseEvent, index: number) => void;
}

const PaginationDot: React.FC<Props> = ({ active, index, onClick }) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent) => {
    onClick(event, index);
  };

  return (
    <button type="button" className={classes.root} onClick={handleClick}>
      <div className={`${classes.dot} ${active && classes.active}`} />
    </button>
  );
};

export default PaginationDot;
