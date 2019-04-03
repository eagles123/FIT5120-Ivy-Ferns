import React from "react";
import MySlider from "./../common/MySlider";

export default function SliderElement({ title, lable, text }) {
  const fontStyle = {
    fontSize: 20,
    fontFamily: "Comic Sans MS"
  };

  return (
    <React.Fragment>
      <h5>{title}</h5>
      <span style={fontStyle}>{text}</span>
      <MySlider lable={lable} />
    </React.Fragment>
  );
}
