import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Assets from "../../components/assets/Assets";
import Approach from "../../components/approach/Approach";

const Mainscroll = (props) => {
  return (
    <div>
      <Hero />
      <About />
      <Assets />
      <Approach />
    </div>
  );
};

export default Mainscroll;
