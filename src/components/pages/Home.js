import React from "react";
import Hero from "../layout/Hero";
import About from "../layout/About";
import JoinNetwork from "../layout/JoinNetwork";
import Blog from "../layout/Blog";
import PartnersView from '../layout/partners'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <JoinNetwork />
       <PartnersView />
    </>
  );
};

export default Home;
