import React from "react";
import { Fade } from "react-reveal";

export default function SecondRow() {
  return (
    <React.Fragment>
      <Fade right>
        <h4>How we do it?</h4>
        <br />
        <hr style={{ width: "90%" }} />
        <div>
          <br />
          <div style={{ height: "70vh", width: "60vw", margin: "0 auto" }}>
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
    </React.Fragment>
  );
}
