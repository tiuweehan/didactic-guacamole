import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginLeft: '6px',
      marginRight: '6px',
      opacity: 0.7,
      '&:hover': {
        opacity: 0.95,
        cursor: 'pointer',
      },
    },
    link: {
      display: 'flex',
    },
  }),
);

export default useStyles;
