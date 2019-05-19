import React from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  const icon = require("../../assets/icon.png");
  return (
    <div className="navbar-fixed">
      {/* <nav style={{ backgroundColor: "#2d6161" }}> */}
      <nav className="nav" style={{ backgroundColor: "white" }}>
        <div className=" container row">
          <div className="col s3s m3">
            <img src={icon} alt="" />
          </div>
          <div className="col s9 m9">
            <NavBarLinks />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
