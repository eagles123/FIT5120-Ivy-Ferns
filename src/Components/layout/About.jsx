import React from "react";
import PageFooter from "./Footer";

export default function About() {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: 100, height: "100%" }}>
        <div className="col s12 m12" style={{ textAlign: "center" }}>
          <h3>About us</h3>
          <hr />
          <br />
          <iframe
            src="https://www.youtube.com/embed/nR4r3vfdnT4"
            width="1050"
            height="600"
            frameBorder="1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="About Us"
          />
        </div>
      </div>

      <PageFooter />
    </React.Fragment>
  );
}
