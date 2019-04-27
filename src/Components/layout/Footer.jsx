import React, { Component } from "react";

export default function PageFooter() {
  return (
    <React.Fragment>
      <footer>
        <div className="row">
          <div className="col s12 m5 offset-m5">
            <p style={{ fontSize: "10px" }}>
              Copyright @ IvyFerns – Building Comfort in Regional Victoria
            </p>
          </div>
          <div className="col s6 m1 offset-m1">
            <a href="https://www.linkedin.com/groups/13700361/">
              <i style={{ margin: 10 }} className="fab fa-linkedin fa-3x" />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
