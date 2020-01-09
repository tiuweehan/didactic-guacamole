import React from 'react';
import useStyles from './LinkStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkData } from '../types';

const WordpressLink: React.FC<LinkData> = ({ url }) => {
  const classes = useStyles({});

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon className={classes.icon} icon={['fab', 'wordpress']} size={'2x'} />
    </a>
  );
};

export default WordpressLink;
