import React from "react";
import FooterLinks from "../layout/FooterLinks";
import CourtsHero from "../courts/CourtsHero";
import CourtDetails from "../courts/CourtDetails";
import Cases from "../courts/Cases";
import justice from '../../images/service_4.jpg';

const Courts = () => {
  return (
    <div>
      <CourtsHero backgroundImage={justice} />
      <CourtDetails />
      <Cases />
      <FooterLinks color="primary-blue" />
    </div>
  );
};
export default Courts;
