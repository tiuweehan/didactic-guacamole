import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginLeft: '6px',
      marginRight: '6px',
      opacity: 0.8,
      '&:hover': {
        opacity: 0.95,
        cursor: 'pointer',
      },
    },
    link: {
      color: '#21759b',
    },
  }),
);

export default useStyles;
