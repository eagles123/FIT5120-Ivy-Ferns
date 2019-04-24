import React from "react";
import { Fade } from "react-reveal";
import MyCarousel from "./Carousel";

export default function SecondRow() {
  return (
    <div className="row">
      <Fade left>
        <div className="col s12 m6">
          <h4>Why we do it</h4>
          <br />
          <MyCarousel />
        </div>
      </Fade>
      <Fade right>
        <div className="col s12 m6">
          <h4>How we do it</h4>
          <br />
          <div style={{ height: "50vh", width: "40vw", marginLeft: 30 }}>
            <iframe
              src="https://www.youtube.com/embed/yvGlwNhHEXM"
              width="100%"
              height="100%"
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="About Us"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
