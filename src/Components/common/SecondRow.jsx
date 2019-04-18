import React from "react";
import Carousel from "./Carousel";
import { Fade } from "react-reveal";

export default function SecondRow() {
  return (
    <div className="bg2section">
      <div className="row">
        <Fade left>
          <div className="col s12 m6">
            <h4>Why we do it</h4>
            <br />
            <Carousel />
          </div>
        </Fade>
        <Fade right>
          <div className="col s12 m6">
            <h4>How we do it</h4>
            <br />
            <iframe
              src="https://www.youtube.com/embed/yvGlwNhHEXM"
              width="600"
              height="400"
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="About Us"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
