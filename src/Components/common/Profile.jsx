import React from "react";

export default function Profile({ img, name, degree, desp }) {
  return (
    <div className="row">
      <div className="col s5 m2">
        <img src={img} alt="" />
      </div>
      <div className="col s5 m6 offset-m1">
        <h5>{name}</h5>
        <h5>{degree}</h5>
        <p>{desp}</p>
      </div>
    </div>
  );
}
