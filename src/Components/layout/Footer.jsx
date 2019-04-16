import React, { Component } from "react";

export default function PageFooter() {
  return (
    <footer>
      <div className="row">
        <div className="col s12 m5">
          <p>Copyright @ IvyFerns – Building Comfort in Regional Victoria</p>
        </div>
        <div className="col s6 m5">
          <p style={{ paddingLeft: "350px", textAlign: "right" }}>
            Connect With Us
          </p>
        </div>
        <div className="col s6 m1">
          <a href="https://www.linkedin.com/groups/13700361/">
            <i style={{ margin: 10 }} className="fab fa-linkedin fa-3x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
