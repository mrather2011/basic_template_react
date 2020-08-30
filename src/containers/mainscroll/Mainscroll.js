import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Assets from "../../components/assets/Assets";
import Approach from "../../components/approach/Approach";
import Casestudies from "../../components/casestudies/Casestudies";
import Listings from "../../components/listings/Listings";
import Valuation from "../../components/valuation/Valuation";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";

const Mainscroll = (props) => {
  return (
    <div>
      <Hero />
      <About />
      <Assets />
      <Approach />
      <Casestudies />
      <Listings />
      <Valuation />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Mainscroll;
