import React from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  //change color here
  return (
    <div>
      {/* <nav style={{ backgroundColor: "#2d6161" }}> */}
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <div className="container row">
          <div className="col s4 m4">
            <a href="/" className="brand-logo">
              <img src={"icon1.png"} alt="" />
            </a>
          </div>
          <div className="col s8 m8">
            <NavBarLinks />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
