/* The navbar links titled Home, Pick A Suburb, FAQ's and About Us defined below*/
import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <a style={{ color: "black" }} className="nav-item nav-link" href="/">
            Home
            { /* Home navbar link implemented */}
          </a>
        </li>
        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/intro"
          >
            Pick Suburb
            { /* Pick A suburb navbar link implemented */}
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/about"
          >
            About Us
            { /* About us navbar link implemented */}
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/faqs"
          >
            FAQ
            {/* FAQ navbar link implemented */}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
