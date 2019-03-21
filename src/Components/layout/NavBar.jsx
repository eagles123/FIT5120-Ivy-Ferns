import React from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Building Comfort
          </Link>
          <NavBarLinks />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
