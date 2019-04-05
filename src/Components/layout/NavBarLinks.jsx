import React from "react";
import { Link } from "react-router-dom";
import Banner from "./../common/Banner";

const NavBarLinks = ({ home, about, faqs, text }) => {
  return (
    <div>
      <ul className="right">
        {home ? (
          <li>
            <Link to="/">
              <Banner home={home} />
            </Link>
          </li>
        ) : null}
        {about ? (
          <li>
            <Link to="/about">
              <Banner text={"About Us"} />
            </Link>
          </li>
        ) : null}
        {faqs ? (
          <li>
            <Link to="/faqs">
              <Banner text={"FAQs"} />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default NavBarLinks;
