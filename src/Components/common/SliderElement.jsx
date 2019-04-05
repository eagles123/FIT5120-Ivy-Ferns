import React, { useContext } from "react";
import NewSlider from "../common/NewSlider";

import { ParameterContext } from "./../context/ParameterContext";

export default function SliderElement({ title, label, text }) {
  const { stateDispatch } = useContext(ParameterContext);
  return (
    <React.Fragment>
      <h5>{title}</h5>
      <p style={{ paddingTop: "0px", fontFamily: "Arial" }}>{text}</p>

      {/* <MySlider lable={lable} /> */}
      <NewSlider label={label} stateDispatch={stateDispatch} />
    </React.Fragment>
  );
}
