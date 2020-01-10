import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PaginationDot from './PaginationDot';
import { range } from 'components/utils/index';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
    },
  }),
);

interface Props {
  dots: number;
  index: number;
  onChangeIndex: (index: number) => void;
}

const Pagination: React.FC<Props> = ({ dots, index, onChangeIndex }) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>, index: number) => {
    onChangeIndex(index);
  };

  return (
    <div className={classes.root}>
      {range(0, dots).map((i: number) => (
        <PaginationDot key={i} index={i} active={i === index} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Pagination;
