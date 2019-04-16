import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/intro"
          >
            Pick Suburb
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/about"
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/faqs"
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
