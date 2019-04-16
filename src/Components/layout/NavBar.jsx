import React from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  //change color here
  return (
    <div>
      {/* <nav style={{ backgroundColor: "#2d6161" }}> */}
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <div className="container">
          <a href="/" className="brand-logo">
            <img src={"icon1.png"} alt="" />
          </a>
          <NavBarLinks />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
