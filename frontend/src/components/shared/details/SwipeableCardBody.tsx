import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import ReactResizeDetector from 'react-resize-detector';
import Pagination from './Pagination';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      height: 240,
      padding: '5% 10% 5% 10%',
    },
  }),
);

interface Props {
  pages: Array<React.ReactNode>;
}

const SwipeableCardBody: React.FC<Props> = ({ pages }) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState<number>(0);

  if (pages.length === 1) {
    return <div className={classes.slide}>{pages[0]}</div>;
  }

  return (
    <div className={classes.root}>
      <ReactResizeDetector handleWidth>
        {({ width }: { width: number }) => (
          <SwipeableViews enableMouseEvents index={index} onChangeIndex={setIndex} containerStyle={{ width }}>
            {pages.map((page, key) => (
              <div key={key} className={classes.slide}>
                {page}
              </div>
            ))}
          </SwipeableViews>
        )}
      </ReactResizeDetector>
      <Pagination dots={pages.length} index={index} onChangeIndex={setIndex} />
    </div>
  );
};

export default SwipeableCardBody;
