import React from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";
import { relative } from "path";

const NavBar = () => {
  //change color here
  return (
    <div>
      {/* <nav style={{ backgroundColor: "#2d6161" }}> */}
      <nav style={{ backgroundColor: "rgb(235, 235, 235)" }}>
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={"icon.png"} alt="" />
          </Link>
          <NavBarLinks />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
