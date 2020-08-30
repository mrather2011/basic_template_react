import React from "react";
import SideDrawer from "../sidedrawer/SideDrawer";
import { FaAlignJustify } from "react-icons/fa";
import classes from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.LogoContainer}>
        <h1>LOGO</h1>
      </div>
      <div className={classes.DropdownContainer}>
        <FaAlignJustify size="2.5rem" />
      </div>
    </div>
  );
};

export default Navbar;
