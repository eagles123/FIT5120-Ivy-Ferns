import React from "react";

export default function Profile({ img, name, degree, desp }) {
  return (
    <div className="row">
      <div className="col s12 m2">
        <img src={img} alt="" />
      </div>
      <div className="col s12 m7 offset-m2">
        <h5>{name}</h5>
        <h5 style={{ fontSize: 20 }}>{degree}</h5>
        <p style={{ fontSize: 20 }}>{desp}</p>
      </div>
    </div>
  );
}
