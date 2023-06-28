import React from 'react';
import MobileCard from '../../UI/MobileCard';
import CreditsContent from '../../CreditsContent';
import MobileNavMenu from '../MobileNavMenu';

const Credits = (props) => {
  return (
    <div>
      <MobileNavMenu />
      <div className={props.padding}>
        <MobileCard>
          <CreditsContent />
        </MobileCard>
      </div>
    </div>
  );
};

export default Credits;
