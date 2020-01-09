import React from 'react';
import useStyles from './LinkStyles';
import { LinkData } from '../types';

interface CustomIcon {
  displayIcon: string;
}

type Props = LinkData & CustomIcon;

const CustomLink: React.FC<Props> = ({ url, displayIcon }) => {
  const classes = useStyles({});

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
      <img className={classes.icon} src={displayIcon} alt={''} height={'27px'} />
    </a>
  );
};

export default CustomLink;
