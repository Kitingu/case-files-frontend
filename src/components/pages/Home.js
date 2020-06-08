import React from "react";
import Hero from "../layout/Hero";
import About from "../layout/About";
import JoinNetwork from "../layout/JoinNetwork";
import Blog from "../layout/Blog";
import PartnersView from '../layout/partners'
import FooterLinks from "../layout/FooterLinks";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <JoinNetwork />
       <PartnersView />
       <FooterLinks color="default"/>
    </>
  );
};

export default Home;
