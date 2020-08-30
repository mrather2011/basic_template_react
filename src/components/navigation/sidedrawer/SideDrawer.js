import React from "react";
import classes from "./sidedrawer.module.scss";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Approach</Link>
        </li>
        <li>
          <Link>Case Studies</Link>
        </li>
        <li>
          <Link>Active Listings</Link>
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
  );
};

export default Navbar;
