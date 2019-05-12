import React from "react";

export default function SecondRow() {
  return (
    <div className="sssection container">
      <h4>How We Help You?</h4>
      <hr style={{ width: "90%" }} />
      <br />
      <div>
        <br />
        <div style={{ height: "70vh", width: "60vw", margin: "0 auto" }}>
          <iframe
            src="https://www.youtube.com/embed/t_aOBekcqdQ"
            width="100%"
            height="100%"
            frameBorder="1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="About Us"
          />
        </div>
      </div>
    </div>
  );
}
