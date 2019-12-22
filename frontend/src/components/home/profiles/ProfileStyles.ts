import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginLeft: '6px',
      marginRight: '6px',
      opacity: 0.5,
      '&:hover': {
        opacity: 0.95,
        cursor: 'pointer',
      },
    },
    link: {
      color: 'white',
    },
  }),
);

export default useStyles;
