import React from "react";
import AboutHero from "../../about-us/About-hero";
import AboutDetails from "../../about-us/About-details";
import AboutPatners from "../../about-us/AboutPatners";
import AboutSlider from "../../about-us/AboutSlider";
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
