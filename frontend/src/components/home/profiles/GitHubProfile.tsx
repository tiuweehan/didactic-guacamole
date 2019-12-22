import React from 'react';
import useStyles from './ProfileStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileData } from '../types';

const GitHubProfile: React.FC<ProfileData> = ({ url }) => {
  const classes = useStyles();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon className={classes.icon} icon={['fab', 'github']} size={'3x'} />
    </a>
  );
};

export default GitHubProfile;
