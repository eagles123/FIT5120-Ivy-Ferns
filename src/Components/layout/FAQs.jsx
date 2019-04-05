import React from "react";
import NavBar from "./NavBar";

export default function FAQs() {
  return (
    <React.Fragment>
      <NavBar home={true} about={true} />
      <div className="container" style={{ marginTop: 100 }}>
        <h2>FREQUENTLY ASKED QUESTIONS (FAQ’s)</h2>
        <ol style={{ fontSize: 30, marginLeft: 100 }}>
          <li style={{ marginTop: 30 }}>
            How do I find the suburb according to my preferences?
          </li>
          <li style={{ marginTop: 30 }}>How do I choose my preferences?</li>
          <li style={{ marginTop: 30 }}>
            Can I change my preferences once they are chosen?
          </li>
          <li style={{ marginTop: 30 }}>
            Why are the same areas being reflected after changing the
            preferences?
          </li>
        </ol>
      </div>
    </React.Fragment>
  );
}
