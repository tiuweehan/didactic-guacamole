import * as React from 'react';
import DetailsCard from 'components/shared/details/DetailsCard';
import DetailsCardHeader from 'components/shared/details/DetailsCardHeader';
import SwipeableCardBody from 'components/shared/details/SwipeableCardBody';

interface Props {
  id?: string;
  displayPictureUrl: string;
  role: string;
  company: string;
  dateRange: string;
  footer: Array<React.ReactNode>;
}

const ExperienceCard: React.FC<Props> = ({ id, displayPictureUrl, role, company, dateRange, footer, children }) => {
  return (
    <DetailsCard
      id={id}
      image={displayPictureUrl}
      header={<DetailsCardHeader header={role} subheader={company} subsubheader={dateRange} />}
      content={<SwipeableCardBody pages={React.Children.toArray(children)} />}
      footer={footer}
    />
  );
};

export default ExperienceCard;
