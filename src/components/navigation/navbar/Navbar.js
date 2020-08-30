import React, { useState, Fragment } from "react";
import SideDrawer from "../sidedrawer/SideDrawer";
import { FaAlignJustify } from "react-icons/fa";
import classes from "./Navbar.module.scss";

const Navbar = (props) => {
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);

  const sideDrawerToggle = () => {
    toggleSideDrawer(!sideDrawerOpen);
    console.log(sideDrawerOpen);
  };

  return (
    <div
      onClick={sideDrawerToggle}
      className={[
        classes.Backdrop,
        sideDrawerOpen ? classes.BackdropOpen : classes.BackdropClosed,
      ].join(" ")}
    >
      <SideDrawer toggleSideDrawer={toggleSideDrawer} sDOpen={sideDrawerOpen} />
      <div className={classes.Container}>
        <div className={classes.LogoContainer}>
          <h1>LOGO</h1>
        </div>
        <div onClick={sideDrawerToggle} className={classes.DropdownContainer}>
          <FaAlignJustify size="2.5rem" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
