import React from "react";
import AboutHero from '../../components/about-us/About-hero';
import AboutDetails from '../../components/about-us/About-details';
import AboutPatners from "../../components/about-us/AboutPatners";
import AboutSlider from '../../components/about-us/AboutSlider';
import FooterLinks from "../layout/FooterLinks";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutDetails />
      <AboutSlider />
      <AboutPatners />
      <FooterLinks color="primary-blue"/>
    </div>
  );
};
export default About;
