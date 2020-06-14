import React from 'react';
import FooterLinks from '../layout/FooterLinks';
import CourtsHero from '../courts/CourtsHero';
import CourtDetails from '../courts/CourtDetails';

const Courts = () => {
  return (
    <div>
      <CourtsHero />
      <CourtDetails />
      <FooterLinks color="primary-blue" />
    </div>
  );
};
export default Courts;
