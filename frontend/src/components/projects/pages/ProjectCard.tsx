import * as React from 'react';
import DetailsCard from 'components/shared/details/DetailsCard';
import DetailsCardHeader from 'components/shared/details/DetailsCardHeader';
import SwipeableCardBody from 'components/shared/details/SwipeableCardBody';

interface Props {
  id?: string;
  displayPictureUrl: string;
  name: string;
  application: string;
  dateRange: string;
  footer: Array<React.ReactNode>;
}

const ProjectCard: React.FC<Props> = ({ id, displayPictureUrl, name, application, dateRange, footer, children }) => {
  return (
    <DetailsCard
      id={id}
      image={displayPictureUrl}
      header={<DetailsCardHeader header={name} subheader={application} subsubheader={dateRange} />}
      content={<SwipeableCardBody pages={React.Children.toArray(children)} />}
      footer={footer}
    />
  );
};

export default ProjectCard;
