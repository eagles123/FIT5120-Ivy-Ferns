import React from "react";

export default function SecondRow() {
  return (
    <div className="sssection container">
      <h4>How We Help You?</h4>
      <hr style={{ width: "90%" }} />
      <br />
      <div>
        <div
          style={{
            height: "70vh",
            width: "60vw",
            margin: "0 auto",
            marginBottom: "10px"
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/t_aOBekcqdQ?rel=0"
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
