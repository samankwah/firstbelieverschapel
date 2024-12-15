import React from "react";
import About from "./About";
import Event from "./Events";
import Sermons from "./Sermons";
import Contact from "./Contact";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Event />
      <Sermons />
      <Contact />
    </div>
  );
};

export default Home;
