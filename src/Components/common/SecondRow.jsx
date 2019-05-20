import React from "react";

export default function SecondRow() {
  return (
    <div className="sssection container responsive">
      <h4 sytle={{ fontSize: "1.6em" }}>How We Help You?</h4>
      <hr style={{ width: "90%" }} />
      <br />
      <div>
        <div
          style={{
            height: "75vh",
            width: "60vw",
            minWidth: "70%",
            margin: "0 auto",
            marginBottom: "10px"
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/qKgvQ5AK5UA?rel=0"
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
