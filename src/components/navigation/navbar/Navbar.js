import React, { useState, Fragment } from "react";
import SideDrawer from "../sidedrawer/SideDrawer";
import { FaAlignJustify } from "react-icons/fa";
import classes from "./Navbar.module.scss";

const Navbar = (props) => {
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);

  const sideDrawerToggle = () => {
    toggleSideDrawer(!sideDrawerOpen);
  };

  return (
    <Fragment>
      <SideDrawer toggleSideDrawer={sideDrawerToggle} sDOpen={sideDrawerOpen} />
      <div className={classes.Container}>
        <div className={classes.LogoContainer}>
          <h1>LOGO</h1>
        </div>
        <div onClick={sideDrawerToggle} className={classes.DropdownContainer}>
          <FaAlignJustify size="2.5rem" />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
