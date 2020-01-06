import React from 'react';
import { Avatar, Chip } from '@material-ui/core';

interface Props {
  avatar: string;
  label: string;
}

const TechChip: React.FC<Props> = ({ avatar, label }) => {
  return <Chip avatar={<Avatar src={avatar} />} label={label} />;
};

export default TechChip;
