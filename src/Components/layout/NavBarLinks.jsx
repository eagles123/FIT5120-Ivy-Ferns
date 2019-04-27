import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <a style={{ color: "black" }} className="nav-item nav-link" href="/">
            Home
          </a>
        </li>
        <li>
          <NavLink
            style={{ color: "black" }}
            className="nav-item nav-link"
            to="/intro"
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
