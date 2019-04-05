import React from "react";
import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <React.Fragment>
      <NavBar home={true} about={true} faqs={true} />
      <div className="container">
        <h4>You are now out of Victoria, nothing is here</h4>
        <p>404</p>
      </div>
    </React.Fragment>
  );
}
