import React from 'react';
import MobileCard from '../../UI/MobileCard';
import CreditsContent from '../../CreditsContent';

const Credits = (props) => {
  return (
    <div className={props.padding}>
      <MobileCard>
        <CreditsContent />
      </MobileCard>
    </div>
  );
};

export default Credits;
