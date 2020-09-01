import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Assets from "../../components/assets/Assets";
import Approach from "../../components/approach/Approach";
import Casestudies from "../../components/casestudies/Casestudies";
import Listings from "../../components/listings/Listings";
import Valuation from "../../components/valuation/Valuation";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useElementSize } from "../../util/elementSize";

const Mainscroll = ({ currScreenPos }) => {
  const [initialLoad, updateInitialLoad] = useState({
    Hero: false,
    About: false,
    Assets: false,
    Approach: false,
    CaseStudies: false,
    Listings: false,
    Valuation: false,
    Testimonials: false,
    Contact: false,
  });

  const [currPos, setCurrPos] = useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setCurrPos(currPos);
  });

  const elementsObject = {
    Hero: useElementSize("Hero"),
    About: useElementSize("About"),
    Assets: useElementSize("Assets"),
    Approach: useElementSize("Approach"),
    CaseStudies: useElementSize("CaseStudies"),
    Listings: useElementSize("Listings"),
    Valuation: useElementSize("Valuation"),
    Testimonials: useElementSize("Testimonials"),
    Contact: useElementSize("Contact"),
  };

  // if (
  //   !initialLoad.Hero &&
  //   elementsObject.Hero > 0.5 &&
  //   elementsObject.Hero <= 1
  // ) {
  //   updateInitialLoad({
  //     ...initialLoad,
  //     Hero: true,
  //   });
  // }

  if (
    !initialLoad.About &&
    Math.abs(Math.abs(currPos.y) - elementsObject.About.top) /
      elementsObject.About.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      About: true,
    });
  } else if (
    !initialLoad.Assets &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Assets.top) /
      elementsObject.Assets.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Assets: true,
    });
  } else if (
    !initialLoad.Approach &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Approach.top) /
      elementsObject.Approach.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Approach: true,
    });
  } else if (
    !initialLoad.CaseStudies &&
    Math.abs(Math.abs(currPos.y) - elementsObject.CaseStudies.top) /
      elementsObject.CaseStudies.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      CaseStudies: true,
    });
  } else if (
    !initialLoad.Listings &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Listings.top) /
      elementsObject.Listings.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Listings: true,
    });
  } else if (
    !initialLoad.Valuation &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Valuation.top) /
      elementsObject.Valuation.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Valuation: true,
    });
  } else if (
    !initialLoad.Testimonials &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Testimonials.top) /
      elementsObject.Testimonials.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Testimonials: true,
    });
  } else if (
    !initialLoad.Contact &&
    Math.abs(Math.abs(currPos.y) - elementsObject.Contact.top) /
      elementsObject.Contact.height <
      0.5
  ) {
    updateInitialLoad({
      ...initialLoad,
      Contact: true,
    });
  }

  //   console.log(currPos, initialLoad, elementsObject);

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
