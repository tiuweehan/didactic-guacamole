import React from 'react';
import useStyles from './ProfileStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ProfileData } from '../types';

const EmailProfile: React.FC<ProfileData> = ({ url }) => {
  const classes = useStyles();

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
      <FontAwesomeIcon className={classes.icon} icon={faEnvelope} size={'3x'} />
    </a>
  );
};

export default EmailProfile;
