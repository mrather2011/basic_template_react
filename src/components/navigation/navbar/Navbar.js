import React, { useState, Fragment } from "react";
import SideDrawer from "../sidedrawer/SideDrawer";
import { FaAlignJustify } from "react-icons/fa";
import classes from "./Navbar.module.scss";

const Navbar = ({ currScreenPos }) => {
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);
  const [navBarFull, setNavBar] = useState(true);

  const sideDrawerToggle = () => {
    toggleSideDrawer(!sideDrawerOpen);
  };

  const navBarToggle = () => {
    if (navBarFull && Math.abs(currScreenPos.y) > 200) {
      setNavBar(!navBarFull);
    } else if (!navBarFull && Math.abs(currScreenPos.y) < 200) {
      setNavBar(!navBarFull);
    }
  };

  navBarToggle();
  //   console.log(Math.abs(currScreenPos.y));

  return (
    <div>
      <SideDrawer toggleSideDrawer={sideDrawerToggle} sDOpen={sideDrawerOpen} />
      <div
        id="Navbar"
        className={[
          classes.Container,
          navBarFull ? classes.ContainerFull : classes.ContainerShort,
        ].join(" ")}
      >
        <div className={classes.LogoContainer}>
          <h1>Metro Net Realty</h1>
        </div>
        <div onClick={sideDrawerToggle} className={classes.DropdownContainer}>
          <FaAlignJustify size="2.5rem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
