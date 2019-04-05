import React from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";
import { relative } from "path";

const NavBar = ({ home, about, faqs, text }) => {
  //change color here
  return (
    <div>
      {/* <nav style={{ backgroundColor: "#2d6161" }}> */}
      <nav style={{ backgroundColor: "rgb(235, 235, 235)" }}>
        <div className="container">
          <Link to="/" className="brand-logo">
            <img src={"icon1.png"} alt="" />
          </Link>
          <NavBarLinks home={home} about={about} faqs={faqs} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
