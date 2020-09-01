import React, { useEffect, useState } from "react";
import classes from "./Hero.module.scss";
import BackgroundSlider from "react-background-slider";
import image1 from "../../img/new-york-city-new-york-usa-F5FNFFR.jpg";
import image2 from "../../img/view-of-new-york-at-sunset-P2QLDCX.jpg";
import image3 from "../../img/new-york-new-york-usasskyline-XM8RATU.jpg";

const Hero = (props) => {
  return (
    <div id="Hero" className={["Container", classes.Container].join(" ")}>
      <BackgroundSlider
        images={[image1, image3, image2]}
        duration={5}
        transition={2}
      />
      <div className={classes.TextContainer}>
        <h1>Boutique Commercial Real Estate</h1>
      </div>
      <div>
        <button>Explore By Asset Class</button>
        <button>Off Market Approach</button>
        <button>Case Studies</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Hero;
