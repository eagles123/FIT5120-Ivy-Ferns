import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger" />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a style={{ color: "black" }} className="nav-item nav-link" href="/">
            Home
          </a>
          {/* </NavLink> */}
        </li>
        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/recommend"
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
            Pick a Suburb
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/faqs"
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
