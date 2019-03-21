import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">Link1</NavLink>
        </li>
        <li>
          <NavLink to="/">Link2</NavLink>
        </li>
        <li>
          <NavLink to="/">Link3</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
