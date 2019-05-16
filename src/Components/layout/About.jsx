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

          <h6 style={{ textAlign: "center" }}>
            We aim to help our customers find a suburb in Regional Victoria that
            is most suited to their needs and preferences, so let’s learn more!
          </h6>
          <br />
          <iframe
            src="https://www.youtube.com/embed/nR4r3vfdnT4?rel=0"
            width="100%"
            height="600"
            frameBorder="1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="About Us"
          />
          {/* <iframe
            width="100%"
            height="600"
            frameBorder="1"
            src="https://www.powtoon.com/embed/fMJZ7xjzwWT/"
            frameborder="0"
          /> */}
        </div>
      </div>
      <PageFooter />
    </React.Fragment>
  );
}
