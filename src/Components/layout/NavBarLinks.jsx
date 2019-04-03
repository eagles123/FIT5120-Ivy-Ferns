import React from "react";
import { Link } from "react-router-dom";
import Banner from "./../common/Banner";

const NavBarLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <Banner link={"/about"} text={"About Us"} />
        </li>
        <li>
          <Banner link={"/faqs"} text={"FAQs"} />
        </li>
      </ul>
    </div>
  );
};

export default NavBarLinks;
