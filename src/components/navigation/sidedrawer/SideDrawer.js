import React from "react";
import { FaRedo } from "react-icons/fa";
import classes from "./sidedrawer.module.scss";
import { Link } from "react-router-dom";

const SideDrawer = ({ sDOpen, toggleSideDrawer }) => {
  return (
    <div
      className={[
        classes.Container,
        sDOpen ? classes.ContainerOpen : classes.ContainerClosed,
      ].join(" ")}
    >
      <div
        onClick={toggleSideDrawer}
        className={[
          classes.Backdrop,
          sDOpen ? classes.BackdropOpen : classes.BackdropClosed,
        ].join(" ")}
      >
        <div
          className={[
            classes.NavItems,
            sDOpen ? classes.NavItemsOpen : classes.NavItemsClosed,
          ].join(" ")}
        >
          <FaRedo onClick={toggleSideDrawer} size="3rem" />
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/approach">Approach</Link>
            </li>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="active-listings">Active Listings</Link>
            </li>
            <li>
              <Link>Valuation</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
